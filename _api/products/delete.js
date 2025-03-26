import { productsCollection } from '../../src/services/firebase/firebase.admin.js'
const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

function getPublicId(urls) {
    const urlsArray = Array.isArray(urls)? urls : [urls]; 
    const ids = urlsArray.map(url => {
        const regex = /\/([^\/]+)\.[^\/]+$/;
        const match = url.match(regex);
        if(match)
            return match[1];
        else
            throw new Error("failed id extract from url");
    })
    return ids
} 


export default async function handler(req, res) {
    if(req.method !== "POST")
        return res.status(400).json({ message: "Method not allowed" });

    const { id } = req.body

    if(!id) 
        return res.status(401).json({ message: "id field required" })

    try {
        const docRef = productsCollection.doc(id);
        const docSnap = await docRef.get();
        
        if(!docSnap.exists) 
            return res.status(402).json({ message: "doc not exists!" });

        const doc = { id: docSnap.id, ...docSnap.data() }
        const publicIds = getPublicId( doc.images);

        await cloudinary.api.delete_resources(publicIds);
        await docRef.delete();

        return res.status(200).json({ message: "doc deleted", deleted_img_count: publicIds.length, deleted_doc: doc.id} )
    } catch (error) {
        return res.status(501).json({ error: error, message: "Error on deleting" })
    }
}