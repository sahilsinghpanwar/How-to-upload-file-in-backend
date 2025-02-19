import {v2 as cloudinary} from "cloudinary"
import fs from "fs"  //file system





cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});



// aab hum file ko upload krange

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        // upload the file on cloudinary   (resource_type ka means h ke type kya hain image, video, raw etc but hum auto use krange vo kudh he detect kr lega)
        const response = await cloudinary.uploader.upload
        (localFilePath, {
            resource_type: "auto",
        })
        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary ", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the loacally saved temporary file as the upload operation got failed (hum ne file ko delete kr diya) 
        return null;
    }
}

export {uploadOnCloudinary}