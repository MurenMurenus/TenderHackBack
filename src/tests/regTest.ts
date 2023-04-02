import {Report, UserModel, UserSchema} from "../services/database/models";
import {updateAny} from "../services/database";
import {connect, disconnect} from '../services/database/connector'
import {addSubUser} from "../services/database/service";
import {sendMail_} from "../utils/sendEmail";
/*
const test = async () => {
    await connect();

    let user = new UserModel();
    user.name = "Bibka";
    user.mail = 'habib@gmail.dick'
    user.password = '1234';
    user.phone = '324242423'
    user.avatar = 'p1';
    user.role = 'marketer';

    let user2 = new UserModel();
    user2.name = "buba";
    user2.mail = 'hhh@mail'
    user2.password = '12';
    user2.phone = '111'
    user2.avatar = 'p2';
    user2.role = 'client';
    user2.externMail = []
    let report = new Report();


    report.expenseFoPeriod = 12332;
    report.income = 122;
    report.conversionCost = 1000000;
    report.clicks = 22;
    report.marketType = 'Suka';
    report.placement = 'pizda';
    report.users = []
    report.users.push(user._id)
    await report.save();
    await user2.save()
    await user.save();
    //await updateAny(user._id, 'Boba', 'name';
    let r = await addSubUser(user2._id, ["klkl.", "klkl.909009"]);
    await connect()
    let user3 = await UserModel.find({_id: user2._id});
    console.log(user3, r);
    await disconnect()
    //console.log(typeof user[0]);
    // console.log(user);
    // console.log(user2);
    // console.log(report);
    /*async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let i;
    for (i = 0; i < 100; i++) {
        console.log(await User.find({_id: user._id}).exec())
        await sleep(1000);
    }
// let res = await checkLogin(user.login, user.password);
}*/

const test2 = async () => {
    let text = "Привет мир!";
    let textHtml = "<b>Привет мир!</b>";
    let theme = "Тема письма";
    let st: string;
    st = await sendMail_('dolgovdaniil007@gmail.com', theme, text, textHtml);
    console.log(st);
}

test2();
