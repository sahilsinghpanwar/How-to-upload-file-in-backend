import mongoose from "mongoose";

import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema(
    {

        videoFile: {
            type: String,
            required: true,
        },

        thumbnail: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        duration: {
            type: Number,
            required: true,
        },

        views: {
            type: Number,
            required: true,
        },

        isPublished: {
            type: Boolean,
            required: true,
        },

        owner: {
            type: Schema.type.ObjectId,
            ref: "User",
        },

    },

    {
        timestamps: true,
    }
);


videoSchema.plugin(mongooseAggregatePaginate);


export const video = mongoose.model("Video", videoSchema);