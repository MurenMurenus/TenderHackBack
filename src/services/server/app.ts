import {addSubUsers} from "../../controllers/addSubUser";
import {getExternMail} from "../../controllers/getUserExternMail";
const express = require("express");
import * as ex from "express";
const cors  = require('cors');
import {register} from "../../controllers/register";
import {login} from "../../controllers/login";
import {updPass} from "../../controllers/updatePassword";
import {updAvatar} from "../../controllers/updateAvatar";
import {updPhone} from "../../controllers/updatePhone";
import {delUser} from "../../controllers/deleteUser";
import {Callback} from "../../callback";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', async (req: ex.Request, res: ex.Response) => {
    let data: Callback = await login(req);
    await res.status(data.status).json(data.entity);
})

app.post('/api/register', async (req: ex.Request, res: ex.Response) => {
    let data: Callback = await register(req);
    await res.sendStatus(data.status);
})

app.post('/api/changePassword', async (req: ex.Request, res: ex.Response) => {
    await res.sendStatus(await updPass(req));
})

app.post('/api/changeAvatar', async (req: ex.Request, res: ex.Response) => {
    await res.sendStatus(await updAvatar(req));
})

app.post('/api/changePhone', async (req: ex.Request, res: ex.Response) => {
    await res.sendStatus(await updPhone(req));
})

app.post('/api/addSubUser', async (req: ex.Request, res: ex.Response) =>{
    await res.sendStatus(await addSubUsers(req));
})

app.post('/api/deleteUser', async (req: ex.Request, res: ex.Response)=>{
    let data: Callback = await delUser(req);
    await res.sendStatus(data.status);
})

app.post('/api/get-user-extern-email', async (req: ex.Request, res: ex.Response)=>{
    let data: Callback = await getExternMail(req);
    await res.status(data.status).json(data.entity);
})
export {app};
