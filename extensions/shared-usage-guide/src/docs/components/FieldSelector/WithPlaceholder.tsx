import React, { useState } from 'react';
import { FieldSelector } from '@ks-console/shared';

interface Project {
  name: string;
  description: string;
}

const ProjectItem: React.FC<{ data: Project; active?: boolean }> = ({ data, active }) => (
  <div style={{ 
    padding: '8px', 
    border: active ? '2px solid #722ed1' : '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: active ? '#f9f0ff' : 'white'
  }}>
    <div>{data.name}</div>
    <div style={{ fontSize: '12px', color: '#666' }}>{data.description}</div>
  </div>
);

export default function WithPlaceholder() {
  const [selectedProject, setSelectedProject] = useState('');

  const projects: Project[] = [
    { name: 'web-app', description: 'Web 应用程序项目' },
    { name: 'api-service', description: 'API 服务项目' },
    { name: 'data-pipeline', description: '数据处理管道项目' }
  ];

  const renderPlaceholder = () => (
    <div style={{ 
      padding: '16px', 
      textAlign: 'center', 
      color: '#999',
      border: '1px dashed #ddd',
      borderRadius: '4px'
    }}>
      请选择一个项目
    </div>
  );

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedProject || '未选择'}
      </div>
      <FieldSelector
        value={selectedProject}
        onChange={setSelectedProject}
        Item={ProjectItem}
        list={projects}
        rowKey="name"
        renderPlaceholder={renderPlaceholder}
      />
    </div>
  );
} 