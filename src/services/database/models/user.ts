import mongoose from "mongoose";
export interface UserI {
    name: string,
    _id: mongoose.Types.ObjectId,
    id: string,
    password: string,
    mail: string,
    phone: string,
    externMail: Array<string>,
    role: string,
    avatar: string
}

export const UserSchema = new mongoose.Schema<UserI>({
    name: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String},
    id: {type: String, required: true},
    phone: {type: String},
    externMail: [],
    role: {type: String, enum: ['marketer', 'client']},
    avatar: String
});

export let UserModel = mongoose.model("User", UserSchema);
