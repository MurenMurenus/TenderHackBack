import mongoose from "mongoose";
import {DB_URL} from "../../configs/dbConf";

const connect = async () => {
    await mongoose.connect(DB_URL);
};

async function disconnect() {
    await mongoose.disconnect()
}

export {connect, disconnect};


