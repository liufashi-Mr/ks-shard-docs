import React from 'react';
import { ListPage } from '@ks-console/shared';

export default function WithTabs() {
  const tabs = [
    {
      id: 'deployments',
      navLabel: 'Deployments',
      table: {
        columns: [
          { title: '名称', key: 'name', render: (text: string) => text },
          { title: '命名空间', key: 'namespace', render: (text: string) => text },
          { title: '副本数', key: 'replicas', render: (text: number) => text }
        ],
        dataSource: [
          { name: 'nginx-deployment', namespace: 'default', replicas: 3 },
          { name: 'app-deployment', namespace: 'production', replicas: 5 }
        ]
      } as any
    },
    {
      id: 'services',
      navLabel: 'Services',
      table: {
        columns: [
          { title: '名称', key: 'name', render: (text: string) => text },
          { title: '命名空间', key: 'namespace', render: (text: string) => text },
          { title: '类型', key: 'type', render: (text: string) => text }
        ],
        dataSource: [
          { name: 'nginx-service', namespace: 'default', type: 'ClusterIP' },
          { name: 'app-service', namespace: 'production', type: 'LoadBalancer' }
        ]
      } as any
    }
  ];

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <ListPage
        tabs={tabs}
        currentTab="deployments"
        hasNamespaceSelector={true}
      />
    </div>
  );
} 