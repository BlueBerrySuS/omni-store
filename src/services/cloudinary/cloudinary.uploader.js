import axios from "axios";
import { presets } from "./cloudinary.presets";


const cloudName = "djl0ohbf2";


const uploadImages = async (images,preset) => {
    let imagesArray = Object.values(images);
    try {
        const result = await Promise.all(imagesArray.map(async image => {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", preset);
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                formData,
            );
            return res.data.secure_url;
        }));
        return result;
    } catch (error) {
        throw new Error(error);
    };
};


export const uploadProductImages = async (images) => {
    try {
        const result = await uploadImages(images, presets.products);
        return result;
    } catch (error) {
        throw new Error(error);
    };
};

export const uploadBrandIcon = async (image) => {
    try {
        const result = await uploadImages(image, presets.brands);
        return result;
    } catch (error) {
        throw new Error(error);
    };
};