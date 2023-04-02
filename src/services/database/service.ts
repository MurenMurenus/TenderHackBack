import {UserModel} from "./models";
import {connect, disconnect} from './connector'
import {Callback} from "../../callback";
import {assign} from "../../utils/setObjProp"
import mongoose from "mongoose";
import {UserI} from "./models/user";

export async function checkLogin(mail: string, password: string): Promise<Callback> {
    await connect()
    let logins = await UserModel.find({mail: mail}).exec();
    let subLogins: Array<UserI> = await UserModel.find({externMail: {"$in": [mail]}, password: password}).exec();
    await disconnect();

    if (logins.length === 0) {
        if (subLogins.length === 0) {
            return new Callback(400);
        } else {
            if (subLogins[0].password === password) {
                return new Callback(200, subLogins[0]); //Если у двух юзеров одинаковые пароли, не понятно на какой акк зайдет саб
            }
            return new Callback(400);
        }
    }

    if (logins.length === 1) {
        if (logins[0].password === password) {
            return new Callback(200, logins[0]);
        }
        return new Callback(400);
    }
    return new Callback(400);
}

export async function registration(name: string, mail: string, password: string) {
    await connect()
    let query = await UserModel.find({name: name}).select('name').exec();
    console.log(query)
    if (query.length !== 0) {
        await disconnect();
        return new Callback(400);
    }
    // query = await UserModel.find({mail: mail}).select('mail').exec();
    // console.log(query)
    // if (query.length !== 0) {
    //     await disconnect();
    //     return new Callback(400);
    // }

    let user = new UserModel()
    user.name = name;
    user.mail = mail;
    user.id = "purch_9193545";
    user.password = password;
    await user.save();
    await disconnect();
    return new Callback(200);
}

export async function addSubUser(id: mongoose.Types.ObjectId, subUsers: Array<string>): Promise<Callback> {
    await connect();
    await UserModel.findOneAndUpdate({_id: id}, {$push: {"externMail": {$each: subUsers}}});
    await disconnect();
    return new Callback(200);
}

export async function updateAny(id: mongoose.Types.ObjectId, value: any, field: string): Promise<Callback> {
    let obj = {};
    await assign(obj, field, value);
    await UserModel.updateOne({_id: id}, obj);
    return new Callback(200);
}

export async function deleteUser(id: mongoose.Types.ObjectId): Promise<Callback> {
    await connect();
    if (await UserModel.find({_id: id}).exec()) {
        await UserModel.deleteOne({_id: id}).exec();
        await disconnect();
        return new Callback(200);
    }
    await disconnect();
    return new Callback(400);
}

export async function getUserExternMail(id: mongoose.Types.ObjectId): Promise<Callback> {
    await connect();
    if (await UserModel.find({_id: id}).exec()) {
        let user: Array<UserI> = await UserModel.find({_id: id}).exec();
        await disconnect();
        let mails: Array<string> = user[0].externMail;
        return new Callback(200, mails);
    }
    await disconnect();
    return new Callback(400);
}
