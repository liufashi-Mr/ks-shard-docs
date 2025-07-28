import React from 'react';
import { ProjectsSelectorModal } from '@ks-console/shared';

export default function WithCallback() {
  const handleSelect = (url?: string) => {
    if (url) {
      console.log('选择的项目 URL:', url);
      // 可以在这里进行页面跳转或其他操作
      window.open(url, '_blank');
    } else {
      console.log('未选择项目');
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <ProjectsSelectorModal
        cluster="development-cluster"
        workspace="dev-workspace"
        enableActions={{}}
        onSelect={handleSelect}
      />
    </div>
  );
} 