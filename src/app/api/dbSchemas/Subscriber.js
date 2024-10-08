import mongoose from 'mongoose';

const Subscriber = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models.Subscriber || mongoose.model('Subscriber', Subscriber);
