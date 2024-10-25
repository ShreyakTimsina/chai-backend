import mongoose, { Schema } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    videoFile: {
        type: String, //cloudinary
        required: true,
    },
    thumbnail: {
        type: String, //cloudinary
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: true,
        required: true,
    },
}, { timestamps: true });

export const Video = mongoose.model("Video", videoSchema);