import { collection } from "firebase/firestore";
import { db } from "./firebase.config";

export const productsRef = collection(db, "products");