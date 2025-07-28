import React from 'react';
import { WorkspaceClusterSettingsForm } from '@ks-console/shared';

export default function Basic() {
  const handleOk = (formValues: any) => {
    console.log('集群设置:', formValues);
  };

  return (
    <div style={{ padding: '16px' }}>
      <WorkspaceClusterSettingsForm
        onOk={handleOk}
      />
    </div>
  );
} 