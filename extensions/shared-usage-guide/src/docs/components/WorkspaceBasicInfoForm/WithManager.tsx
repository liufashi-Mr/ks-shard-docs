import React from 'react';
import { WorkspaceBasicInfoForm } from '@ks-console/shared';

export default function WithManager() {
  const handleOk = (value: any) => {
    console.log('工作空间基本信息:', value);
  };

  return (
    <div style={{ padding: '16px' }}>
      <WorkspaceBasicInfoForm
        manager="admin"
        isHideManagerFiled={false}
        onOk={handleOk}
      />
    </div>
  );
} 