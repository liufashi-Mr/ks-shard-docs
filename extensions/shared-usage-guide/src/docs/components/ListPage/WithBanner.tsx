import React from 'react';
import { ListPage } from '@ks-console/shared';

export default function WithBanner() {
  const banner = {
    title: 'Deployment 管理',
    description: '管理 Kubernetes Deployment 资源',
    tips: [
      {
        key: 'tip1',
        title: '提示',
        content: 'Deployment 是 Kubernetes 中用于管理 Pod 副本的控制器'
      }
    ]
  } as any;

  const table = {
    columns: [
      { title: '名称', key: 'name', render: (text: string) => text },
      { title: '命名空间', key: 'namespace', render: (text: string) => text },
      { title: '状态', key: 'status', render: (text: string) => text }
    ],
    dataSource: [
      { name: 'nginx-deployment', namespace: 'default', status: 'Running' },
      { name: 'app-deployment', namespace: 'production', status: 'Running' }
    ]
  } as any;

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <ListPage
        banner={banner}
        table={table}
        hasNamespaceSelector={true}
      />
    </div>
  );
} 