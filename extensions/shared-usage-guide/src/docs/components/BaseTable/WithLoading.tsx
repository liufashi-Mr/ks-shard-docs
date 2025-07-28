import React, { useState } from 'react';
import { BaseTable } from '@ks-console/shared';

export default function WithLoading() {
  const data = [
    { name: 'nginx-pod', namespace: 'default', status: 'Running', age: '3d' },
    { name: 'app-pod', namespace: 'production', status: 'Running', age: '1d' },
  ];

  const columns = [
    { Header: '名称', accessor: 'name' },
    { Header: '命名空间', accessor: 'namespace' },
    { Header: '状态', accessor: 'status' },
    { Header: '年龄', accessor: 'age' },
  ] as any;

  return (
    <div style={{ padding: '16px' }}>
      <BaseTable dataSource={data} columns={columns} loading />
    </div>
  );
}
