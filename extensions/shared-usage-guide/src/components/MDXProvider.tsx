import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import DemoBlock from './DemoBlock';
import Table from './Table';

// 定义全局组件
const components = {
  DemoBlock,
  table: Table,
};

interface CustomMDXProviderProps {
  children: React.ReactNode;
}

const CustomMDXProvider: React.FC<CustomMDXProviderProps> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default CustomMDXProvider;
