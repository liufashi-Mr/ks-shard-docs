import React from 'react';
import { DetailPage, Avatar, StatusIndicator, Icon } from '@ks-console/shared';

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

export default function Basic() {
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

  const store = React.useMemo(
    () => ({
      useGetMutation: () => ({}),
    }),
    [],
  );

  const sideProps = {
    title: 'Pod 详情',
    description: 'Pod 的基本信息和状态',
    icon: <Icon name="pod" />,
    attrs: [
      {
        label: t('CLUSTER'),
        value: 'host',
      },
      {
        label: t('SCOPE_TCAP'),
        value: 'namespace',
      },
      {
        label: t('CREATION_TIME_TCAP'),
        value: new Date().toLocaleString(),
      },
      {
        label: t('CREATOR'),
        value: 'admin',
      },
    ],
    data: mockData,
  };

  return (
    <div style={{ height: '400px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <DetailPage sideProps={sideProps} store={store} data={mockData} />
    </div>
  );
}
