import React, { useState } from 'react';
import RepoManagementModal from '@ks-console/shared/lib/components/Modals/RepoManagementModal';
import { Button } from '@kubed/components';

export default function WithDetail() {
  const [visible, setVisible] = useState(false);

  const repoDetail = {
    apiVersion: 'v1',
    kind: 'Repository',
    metadata: {
      name: 'my-app',
      namespace: 'default'
    },
    spec: {
      url: 'https://github.com/username/my-app',
      branch: 'main',
      type: 'git'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑仓库
      </Button>
      
      <RepoManagementModal
        visible={visible}
        // detail={repoDetail}
        onOk={() => {
          console.log('仓库更新完成');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 