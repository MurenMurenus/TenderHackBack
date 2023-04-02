import {registration, updateAny} from "../services/database";
import * as express from "express";
import {UserModel} from "../services/database/models";
import {UserI} from "../services/database/models/user";
import {Callback} from "../callback";
import {deleteUser} from "../services/database/service";
import mongoose from "mongoose";

export async function delUser(request: express.Request): Promise<Callback> {
    interface requestI {
        _id: mongoose.Types.ObjectId;
    }

    class data implements requestI{
        _id: mongoose.Types.ObjectId;

        constructor(id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId()) {
            this._id = id;
        }

    }

    let userRaw = request.body;
    let user: data = Object.assign(new UserModel(), userRaw);

    return await deleteUser(user._id);
}