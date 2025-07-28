import React from 'react';
import { WorkspaceBasicInfoForm } from '@ks-console/shared';

export default function WithInitialValues() {
  const initialValues = {
    metadata: {
      name: 'my-workspace',
      annotations: {
        'kubesphere.io/creator': 'admin',
      },
      managedFields: [],
    },
    spec: {
      template: {
        metadata: {
          creationTimestamp: null,
        },
        spec: {
          manager: 'admin',
        },
      },
      placement: {
        clusters: [{ name: 'cluster1' }],
      },
      overrides: [],
    },
  };

  const handleOk = (value: any) => {
    console.log('工作空间基本信息:', value);
  };

  return (
    <div style={{ padding: '16px' }}>
      <WorkspaceBasicInfoForm initialValues={initialValues} onOk={handleOk} />
    </div>
  );
}
