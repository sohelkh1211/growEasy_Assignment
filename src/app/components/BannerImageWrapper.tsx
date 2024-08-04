// app/components/BannerImageWrapper.tsx
"use client"; // This file must be a client component

import React from "react";
import { Provider } from 'react-redux';
import store from '../store';
import BannerImageComp from './BannerImageComp';
import { ads } from '../utils';

const BannerImageWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <BannerImageComp ads={ads} />
    </Provider>
  );
};

export default BannerImageWrapper;
