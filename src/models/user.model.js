import mongoose from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },

        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },

        avatar: {
            type: String, //cloudinary url
            required: true,
        },

        coverImage: {
            type: String
        },

        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            },

        ],

        passsword: {
            type: String,
            required: [true, 'password is required'],
        },

        refreshToken: {
            type: String,
        },
    
    },

    {
        timestamps: true,
    }
)


userSchema.pre("save", async function (next){

    if (!this.isModified("passsword")) return next()

        else{
            this.passsword = bcrypt.hash(this.passsword, 10);
            next();
        }
        
    
        userSchema.method.isPasswordCorrect = async function (passsword) {
            return await bcrypt.compare(passsword, this.passsword);
        }

})


userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
     {
         _id: this._id,
         email: this.email,
         username: this.username,
         fullname: this.fullname,
     },
     process.env.ACCESS_TOKEN_SECRET,
 
     {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
     }
 
 )
 }
 
 
 userSchema.methods.generateRefreshToken = function () {
 
     const secret = jwt.sign(
 
         {
 _id: this._id,
         },
         process.env.REFRESH_TOKEN_SECRET,
 
         {
             expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
         }
 
     )
     return secret
 
 }
 
 
 export const User = mongoose.model("User", userSchema);