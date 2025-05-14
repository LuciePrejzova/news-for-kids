import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from './reducers/articlesSlice';


export const store = configureStore(
    {
        reducer:{
            articles: articlesReducer,
        }
    }
)