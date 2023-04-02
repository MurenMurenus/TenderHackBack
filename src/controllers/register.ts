import {registration, updateAny} from "../services/database";
import * as express from "express";
import {UserModel} from "../services/database/models";
import {UserI} from "../services/database/models/user";
import {Callback} from "../callback";

export async function register(request: express.Request): Promise<Callback> {
    let userRaw = request.body;
    let user: UserI = Object.assign(new UserModel(), userRaw);
    console.log(user._id)
    return await registration(user.name, user.mail, user.password);
}
