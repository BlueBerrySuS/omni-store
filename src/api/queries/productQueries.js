import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addDoc, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { productsRef } from '../firebase/firebase.refs';



const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    endpoints: builder => ({
        getProducts: builder.query({
            queryFn: async () => {
                try {
                    const snapshot = await getDocs(productsRef);
                    const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    return { data: productsList }; 
                } catch (error) {
                    return {error: {message: error.message}}
                }
            }
        }),
        getProduct: builder.query({
            queryFn: async (id) => {
                try {
                    const docRef = doc(productsRef, id);
                    const docSnap = await getDoc(docRef);
                    if(docSnap.exists()) {
                        return { data: docSnap.data() };
                    } else {
                        return { error: { message: "Document not found"} };
                    }
                } catch (error) {
                    return {error: {message: error.message}};
                }
            } 
        }),
        addProduct: builder.mutation({
            queryFn: async (data) => {
                try {
                    const docRef = await addDoc(productsRef, data);
                    return { data: { id: docRef.id, ...data } };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            }
        }),
        updateProduct: builder.mutation({
            queryFn: async ({ id, updatedData }) => {
                try {
                    const docRef = doc(productsRef, id);
                    await updateDoc(docRef, updatedData);
                    return { data: { id, ...updatedData } };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            }
        }),
        deleteProduct: builder.mutation({
            queryFn: async (id) => {
                try {
                    const docRef = doc(productsRef, id);
                    await deleteDoc(docRef);
                    return { data: { id } }
                } catch (error) {
                    return { error: { message: error.message } };
                }
            }
        }),
    })
})

export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi;
export default productsApi;