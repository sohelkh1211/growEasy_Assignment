"use client";

import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import EditBannerTemplate from "./EditBannerTemplate";


const EditBannerWrapper: React.FC = () => {
    return (
        <Provider store={store}>
            <EditBannerTemplate />
        </Provider>
    )
}

export default EditBannerWrapper;