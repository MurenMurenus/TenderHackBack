import {addSubUser} from "../services/database/service";
import * as express from "express";
import {UserModel} from "../services/database/models";
import {Callback} from "../callback";
import {UserI} from "../services/database/models/user";
import mongoose from "mongoose"

export async function addSubUsers(request: express.Request): Promise<number> {
    interface requestI {
        id: mongoose.Types.ObjectId,
        subUsers: Array<string>
    }

    class data implements requestI{
        id: mongoose.Types.ObjectId;
        subUsers: Array<string>;

        constructor(id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(), subUsers: Array<string> = []) {
            this.id = id;
            this.subUsers = subUsers;
        }

    }
    let requestRaw = request.body;
    let reqParsed: requestI = Object.assign(new data(), requestRaw);

    if (!reqParsed) {
        return 400;
    }
    let result: Callback = await addSubUser(reqParsed.id, reqParsed.subUsers);

    if (!result.status) {
        return 400;
    }
    return 200;
}