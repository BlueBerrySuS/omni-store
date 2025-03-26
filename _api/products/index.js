import { productsCollection } from "../../src/services/firebase/firebase.admin.js";


export default async function handler(req, res) {
    
    if(req.method === "GET") {
        try {
            const querySnap = await productsCollection.get();
            const docsArray = querySnap.docs.map(doc => ({
                id: doc.id, 
                ...doc.data() 
            }));
            return res.status(200).json({ docs: docsArray })
        } catch (error) {
            return res.status(500).json({ err: error.message, message: "Error on get data form firebase" });
        }
    } 


    if(req.method === "POST") {
        const { name, text, images } = req.body;

        if(!name || !text || !images) {
            return res.status(400).json({ message: "Missing required fields" });
        };

        try {
            const docRef = await productsCollection.add({ name, text, images });
            return res.status(200).json({ id: docRef.id });
        } catch (error) {
            return res.status(500).json({ err: error.message, message: "Error on load data to firebase" });
        };
    }
}