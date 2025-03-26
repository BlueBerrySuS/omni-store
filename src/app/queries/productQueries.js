import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { uploadProductImages } from '../../services/cloudinary/cloudinary,api';



const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: builder => ({
        getProducts: builder.query({
            queryFn: async () => {
                try {
                    const res = await axios.get("/api/products")
                    return { data: res.data }; 
                } catch (error) {
                    return { error: { message: error.message } }
                }
            }
        }),
        getProduct: builder.query({
            queryFn: async (id) => {
                try {
                    const res = await axios.get(`api/products/${id}`);
                    return { data: res.data };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            } 
        }),
        addProduct: builder.mutation({
            queryFn: async ({ data }) => {
                try {
                    const images = await uploadProductImages(data.images);
                    const uploadData = { ...data, images: images, }
                    
                    const res = await axios.post("/api/products", uploadData);
                    return { data: res.data };
                } catch (error) {
                    return { error: { message: error.message } };
                }
            }
        }),
        // updateProduct: builder.mutation({
        //     queryFn: async ({ id, updatedData }) => {
        //         try {
        //             const docRef = doc(productsRef, id);
        //             await updateDoc(docRef, updatedData);
        //             return { data: { id, ...updatedData } };
        //         } catch (error) {
        //             return { error: { message: error.message } };
        //         }
        //     }
        // }),
        deleteProduct: builder.mutation({
            queryFn: async (id) => {
                try {
                    const res = await axios.post("/api/products/delete", { id })
                    return { data: res.data }
                } catch (error) {
                    return { error: error.message };
                }
            }
        }),
    })
})

export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useDeleteProductMutation, } = productsApi;
export default productsApi;