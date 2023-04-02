import {checkLogin} from "../services/database";
import * as express from "express";
import {UserI, UserModel} from "../services/database/models/user";
import {Callback} from "../callback";


export async function login(request: express.Request): Promise<Callback> {
    interface requestI {
        mail: string,
        password: string
    }

    class data implements requestI{
        mail: string;
        password: string;

        constructor(mail: string, password: string) {
            this.mail = mail;
            this.password = password;
        }

    }

    let userRaw = request.body;
    let user: data = Object.assign(new UserModel(), userRaw);

    return await checkLogin(user.mail, user.password);

}
