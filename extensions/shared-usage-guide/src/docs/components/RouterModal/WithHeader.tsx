import React, { useState } from 'react';
import { RouterModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        打开路由模态框 (自定义头部)
      </Button>
      
      <RouterModal
        open={open}
        onOpenChange={setOpen}
        link="/projects"
        headerTitle="项目管理"
        headerDescription="管理项目和应用"
        headerIcon="📁"
      />
    </div>
  );
} 