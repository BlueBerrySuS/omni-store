import { productsCollection } from "../../src/services/firebase/firebase.admin.js";


export default async function handler(req, res) {

    if(req.method !== "GET") {
        res.status(400).json({ message: "Method not allowed" });
    };

    const { id } = req.query;

    try {
        const docSnap = await productsCollection.doc(id).get();

        if(!docSnap.exists)
            return res.status(401).json({ message: "doc not exists!" })

        const doc = { id:docSnap.id, ...docSnap.data() };
        res.status(200).json({ doc }); 
    } catch (error) {
        res.status(500).json({ err: error.message, message: "Error on get data from firebase" })
    }
}