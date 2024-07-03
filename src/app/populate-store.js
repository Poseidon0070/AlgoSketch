"use client";
import { Provider } from 'react-redux'
import store from "@/store/store";
import MainHeader from "@/components/main-header";

export default function PopulateStore({ data, children }) {
    return (
        <Provider store={store}>
            <MainHeader />
            {children}
        </Provider>
    )
}