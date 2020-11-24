import { Request, Response } from 'express';
import { decrypt, Hash } from '../../db/Crypto';
import UserDao, { User } from '../../db/User';
import { TokenGenerator } from '../Token';
import * as fs from 'fs';
import { ExpirationStrategy, MemoryStorage } from "node-ts-cache";

const tokenCache = new ExpirationStrategy(new MemoryStorage());

type AuthResponse = {
    msg: string,
    statusCode: number,
    token?: string
}

const UnAuthorized = Promise.resolve({
    success: false,
    message: 'Email or password is incorrect',
    statusCode: 403
});

export class AuthenticationController {

    public async validateToken(email: string, token: string) {
        const cacheUser = await tokenCache.getItem<string>(token);
        if (cacheUser && cacheUser === email) {
            return true;
        }
        return false;
    }

    public async authentication (request: Request, response: Response){
        const email = request.body.email;
        console.log(`${email}` );
        const result = await UserDao.fetchUser(email).then( (user: User) => {
            if (!user) {
                return UnAuthorized;
            }
            const hash = {
                iv: user.hash.split(":")[0],
                content: user.hash.split(":")[1],
            }
            const text = fs.readFileSync('secrets.text');
            const textByLine = text.toString().split("\n");
            const descripted = decrypt(hash, textByLine[0]);
            const tkn = TokenGenerator.generate();
            tokenCache.setItem(tkn, email, {  ttl: 86400 });
            if(email === user.email && request.body.password === descripted) {
                return Promise.resolve({
                    success: true,
                    message: 'ok',
                    statusCode: 200,
                    token: tkn
                });
            } else {
                return UnAuthorized;
            }
        }).catch((err) => {
            console.log(err);
            return UnAuthorized;
        });
        response.statusCode = result.statusCode;
        response.send(result);
    }
}