import React from 'react';
import Layout from './components/Layout';
import CustomMDXProvider from './components/MDXProvider';

export default function App() {
  return (
    <CustomMDXProvider>
      <Layout />
    </CustomMDXProvider>
  );
}
