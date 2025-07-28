import React, { useState } from 'react';
import { FieldSelector } from '@ks-console/shared';

interface Cluster {
  name: string;
  region: string;
  status: string;
}

const ClusterItem: React.FC<{ data: Cluster; active?: boolean }> = ({ data, active }) => (
  <div style={{ 
    padding: '8px', 
    border: active ? '2px solid #1890ff' : '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: active ? '#f0f8ff' : 'white'
  }}>
    <div>{data.name}</div>
    <div style={{ fontSize: '12px', color: '#666' }}>
      {data.region} - {data.status}
    </div>
  </div>
);

export default function Basic() {
  const [selectedCluster, setSelectedCluster] = useState('');

  const clusters: Cluster[] = [
    { name: 'production-cluster', region: 'us-west-1', status: 'Running' },
    { name: 'staging-cluster', region: 'us-east-1', status: 'Running' },
    { name: 'development-cluster', region: 'eu-west-1', status: 'Stopped' }
  ];

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedCluster || '未选择'}
      </div>
      <FieldSelector
        value={selectedCluster}
        onChange={setSelectedCluster}
        Item={ClusterItem}
        list={clusters}
        rowKey="name"
      />
    </div>
  );
} 