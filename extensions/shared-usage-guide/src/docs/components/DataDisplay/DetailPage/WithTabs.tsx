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
}

export default function WithTabs() {
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
  };

  const tabs = [
    {
      name: 'overview',
      title: '概览',
      component: (
        <div style={{ padding: '24px' }}>
          <h4>基本信息</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <strong>名称:</strong> {mockData.name}
            </div>
            <div>
              <strong>命名空间:</strong> {mockData.namespace}
            </div>
            <div>
              <strong>状态:</strong> {mockData.status}
            </div>
            <div>
              <strong>运行时间:</strong> {mockData.age}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'yaml',
      title: 'YAML',
      component: (
        <div style={{ padding: '24px' }}>
          <h4>YAML 配置</h4>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px' }}>
            {`apiVersion: v1
kind: Pod
metadata:
  name: ${mockData.name}
  namespace: ${mockData.namespace}
spec:
  containers:
  - name: nginx
    image: ${mockData.image}
    ports:
    - containerPort: 80`}
          </pre>
        </div>
      ),
    },
    {
      name: 'events',
      title: '事件',
      component: (
        <div style={{ padding: '24px' }}>
          <h4>事件列表</h4>
          <div style={{ fontSize: '14px' }}>
            <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <strong>2024-01-15 10:30:00</strong> - Pod 创建成功
            </div>
            <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <strong>2024-01-15 10:31:00</strong> - 容器启动中
            </div>
            <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <strong>2024-01-15 10:32:00</strong> - Pod 运行中
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: '500px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <DetailPage
        sideProps={sideProps}
        store={mockStore}
        data={mockData}
        tabs={tabs}
        activeTab="overview"
        replica={`af`}
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
