import React from 'react';
import { ListPage } from '@ks-console/shared';

export default function Basic() {
  const table = {
    columns: [
      { title: '名称', key: 'name', render: (text: string) => text },
      { title: '命名空间', key: 'namespace', render: (text: string) => text },
      { title: '状态', key: 'status', render: (text: string) => text },
      { title: '年龄', key: 'age', render: (text: string) => text }
    ],
    dataSource: [
      { name: 'nginx-deployment', namespace: 'default', status: 'Running', age: '2d' },
      { name: 'app-deployment', namespace: 'production', status: 'Running', age: '1d' }
    ]
  } as any;

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <ListPage
        table={table}
        hasNamespaceSelector={true}
      />
    </div>
  );
} 