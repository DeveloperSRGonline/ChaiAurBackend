import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    // vaise hi hoga yaar dont worry
},{
    timestamps:true
})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)