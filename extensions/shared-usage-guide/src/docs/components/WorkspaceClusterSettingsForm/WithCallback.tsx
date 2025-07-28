import React from 'react';
import { WorkspaceClusterSettingsForm } from '@ks-console/shared';

export default function WithCallback() {
  const handleOk = (formValues: any) => {
    console.log('集群设置配置:', formValues);
    
    // 可以在这里进行表单验证或其他处理
    if (formValues.spec?.placement?.clusters) {
      console.log('选择的集群:', formValues.spec.placement.clusters);
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <WorkspaceClusterSettingsForm
        onOk={handleOk}
      />
    </div>
  );
} 