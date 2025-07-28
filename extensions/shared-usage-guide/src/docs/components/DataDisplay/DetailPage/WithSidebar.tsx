import React from 'react';
import { DetailPage, Avatar, StatusIndicator } from '@ks-console/shared';

interface PodDetail {
  name: string;
  status: string;
  namespace: string;
  age: string;
  ready: string;
  restarts: number;
  image: string;
  ports: string;
  node: string;
  cpu: string;
  memory: string;
  storage: string;
}

export default function WithSidebar() {
  const mockData: PodDetail = {
    name: 'nginx-deployment-66b6c48dd5',
    status: 'Running',
    namespace: 'default',
    age: '2d',
    ready: '1/1',
    restarts: 0,
    image: 'nginx:1.21',
    ports: '80/TCP',
    node: 'worker-node-1',
    cpu: '100m',
    memory: '128Mi',
    storage: '1Gi',
  };

  const mockStore = React.useMemo(
    () => ({
      useGetMutation: () => ({}),
    }),
    [],
  );


  const sideProps = {
    title: 'Pod 详情',
    icon: 'pod',
    description: 'Pod 的基本信息和状态',
    data: mockData,
    sections: [
      {
        title: '基本信息',
        items: [
          { label: '名称', value: mockData.name },
          { label: '命名空间', value: mockData.namespace },
          { label: '状态', value: mockData.status },
          { label: '运行时间', value: mockData.age },
        ],
      },
      {
        title: '资源配置',
        items: [
          { label: 'CPU', value: mockData.cpu },
          { label: '内存', value: mockData.memory },
          { label: '存储', value: mockData.storage },
        ],
      },
      {
        title: '网络配置',
        items: [
          { label: '端口', value: mockData.ports },
          { label: '节点', value: mockData.node },
        ],
      },
    ],
  };

  return (
    <div style={{ height: '500px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <DetailPage
        sideProps={sideProps}
        store={mockStore}
        data={mockData}
        nav={
          <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar title={mockData.name} icon="pod" />
              <div>
                <h3 style={{ margin: 0 }}>{mockData.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <StatusIndicator type={mockData.status.toLowerCase() as any} />
                  <span>{mockData.status}</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
} 