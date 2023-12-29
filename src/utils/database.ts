import mongoose from 'mongoose';

const connect = async () => {
    if(mongoose.connections[0].readyState) return;
    else {
        try {
            const uri = process.env.MONGODB_URI;
            if (!uri) {
                throw new Error("MONGODB_URI is not defined in the environment variables.");
            }
            await mongoose.connect(uri);
            console.log("MongoDB Connected!");
        } catch (error) {
            console.log(error);
        }
    }
}

export default connect;