import {updateAny} from "../services/database";
import * as express from "express";
import {UserI, UserModel} from "../services/database/models/user";
import {Callback} from "../callback";


export async function updAvatar(request: express.Request): Promise<number> {
    let userRaw = request.body;
    let user: UserI = Object.assign(new UserModel(), userRaw);

    if (!user) {
        return 400;
    }

    let result: Callback = await updateAny(user._id, user.avatar, 'avatar');

    if (!result.status) {
        return 400;
    }
    return 200;
}
