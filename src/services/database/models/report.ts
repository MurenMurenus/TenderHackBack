import mongoose, {model, Schema, Types} from "mongoose";
interface ReportI {
    expenseFoPeriod: number, //расход за период
    income: number, //доход
    conversionCost: number, //стоимость конверсии
    clicks: number,
    marketType: string,
    placement: string,
    users: mongoose.Types.Array<mongoose.Types.ObjectId> | Array<mongoose.Types.ObjectId>
}

export const ReportSchema = new mongoose.Schema<ReportI>({
    expenseFoPeriod: {type: Number}, //расход за период
    income: {type: Number}, //доход
    conversionCost: {type: Number}, //стоимость конверсии
    clicks: {type: Number},
    marketType: {type: String},
    placement: {type: String},
    users: []
})

export let Report = mongoose.model("Report", ReportSchema);

