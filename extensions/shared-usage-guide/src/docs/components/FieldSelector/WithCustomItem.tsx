import React, { useState } from 'react';
import { FieldSelector } from '@ks-console/shared';

interface Namespace {
  name: string;
  status: string;
  podCount: number;
}

const NamespaceItem: React.FC<{ data: Namespace; active?: boolean }> = ({ data, active }) => (
  <div style={{ 
    padding: '12px', 
    border: active ? '2px solid #52c41a' : '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: active ? '#f6ffed' : 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <div>
      <div style={{ fontWeight: 'bold' }}>{data.name}</div>
      <div style={{ fontSize: '12px', color: '#666' }}>
        状态: {data.status}
      </div>
    </div>
    <div style={{ 
      backgroundColor: '#1890ff', 
      color: 'white', 
      padding: '2px 8px', 
      borderRadius: '12px',
      fontSize: '12px'
    }}>
      {data.podCount} Pods
    </div>
  </div>
);

export default function WithCustomItem() {
  const [selectedNamespace, setSelectedNamespace] = useState('');

  const namespaces: Namespace[] = [
    { name: 'default', status: 'Active', podCount: 5 },
    { name: 'kube-system', status: 'Active', podCount: 12 },
    { name: 'production', status: 'Active', podCount: 8 }
  ];

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedNamespace || '未选择'}
      </div>
      <FieldSelector
        value={selectedNamespace}
        onChange={setSelectedNamespace}
        Item={NamespaceItem}
        list={namespaces}
        rowKey="name"
      />
    </div>
  );
} 