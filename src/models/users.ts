import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    githubId: {type: String, required: true, unique: true}
},
{timestamps: true});

export default mongoose.models.User || mongoose.model("User", userSchema);
