import React, { useState } from 'react';
import { RouterModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomProps() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        打开路由模态框 (自定义属性)
      </Button>
      
      <RouterModal
        open={open}
        onOpenChange={setOpen}
        link="/clusters"
        headerTitle="集群管理"
        side="right"
        size="lg"
      />
    </div>
  );
} 