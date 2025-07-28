import React, { useState } from 'react';
import { MonitorsSheet } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        查看监控 (自定义头部)
      </Button>
      
      <MonitorsSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="应用监控"
        headerDescription="查看应用的性能指标"
        headerIcon="📈"
      />
    </div>
  );
} 