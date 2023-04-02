import {Callback} from "../callback";
import {UserModel} from "../services/database/models";
import {deleteUser} from "../services/database/service";
import * as express from "express";
import mongoose from "mongoose";
import {getUserExternMail} from "../services/database/service";

export async function getExternMail(request: express.Request): Promise<Callback> {
    interface externMail {
        _id: mongoose.Types.ObjectId;
    }

    class data implements externMail{
        _id: mongoose.Types.ObjectId;

        constructor(id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId()) {
            this._id = id;
        }

    }

    let userRaw = request.body;
    let user: data = Object.assign(new UserModel(), userRaw);

    return await getUserExternMail(user._id);
}