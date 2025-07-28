import React from 'react';
import { ProjectsSelectorModal } from '@ks-console/shared';

export default function WithActions() {
  const handleSelect = (url?: string) => {
    console.log('选择的项目 URL:', url);
  };

  const enableActions = {
    'project1': ['view', 'edit'],
    'project2': ['view'],
    'project3': ['view', 'edit', 'delete']
  };

  return (
    <div style={{ padding: '16px' }}>
      <ProjectsSelectorModal
        cluster="production-cluster"
        workspace="my-workspace"
        enableActions={enableActions}
        onSelect={handleSelect}
      />
    </div>
  );
} 