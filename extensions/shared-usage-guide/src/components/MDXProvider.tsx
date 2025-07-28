import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import DemoBlock from './DemoBlock';

// 定义全局组件
const components = {
  DemoBlock,
};

interface CustomMDXProviderProps {
  children: React.ReactNode;
}

const CustomMDXProvider: React.FC<CustomMDXProviderProps> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
};

export default CustomMDXProvider; 