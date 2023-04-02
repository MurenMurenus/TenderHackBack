import mongoose from "mongoose";

interface OrganisationI {
    name: string;
    users: mongoose.Types.Array<mongoose.Types.ObjectId> | Array<mongoose.Types.ObjectId>
}

export const OrganisationSchema = new mongoose.Schema<OrganisationI>({
    name: {type: String, required: true},
    users: []
})

export let OrganisationModel = mongoose.model("Organisation", OrganisationSchema);