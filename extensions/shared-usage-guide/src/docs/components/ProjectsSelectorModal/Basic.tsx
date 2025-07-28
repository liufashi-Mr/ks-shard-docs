import React from 'react';
import { ProjectsSelectorModal } from '@ks-console/shared';

export default function Basic() {
  const handleSelect = (url?: string) => {
    console.log('选择的项目 URL:', url);
  };

  return (
    <div style={{ padding: '16px' }}>
      <ProjectsSelectorModal
        cluster="production-cluster"
        workspace="my-workspace"
        enableActions={{}}
        onSelect={handleSelect}
      />
    </div>
  );
} 