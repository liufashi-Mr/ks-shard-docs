import React, { useState } from 'react';
import { RouterModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        打开路由模态框
      </Button>
      
      <RouterModal
        open={open}
        onOpenChange={setOpen}
        link="/workspaces"
        headerTitle="工作空间管理"
      />
    </div>
  );
} 