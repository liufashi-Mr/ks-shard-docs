import React, { useState } from 'react';
import RepoManagementModal from '@ks-console/shared/lib/components/Modals/RepoManagementModal';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        管理仓库
      </Button>
      
      <RepoManagementModal
        visible={visible}
        onOk={() => {
          console.log('仓库管理完成');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 