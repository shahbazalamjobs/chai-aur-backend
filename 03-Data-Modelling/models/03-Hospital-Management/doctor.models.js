import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    worksInHospitals: [
        {
            tpye: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ]
}, {timeStamps: true})

export const Doctor = mongoose.model('Doctor', doctorSchema);