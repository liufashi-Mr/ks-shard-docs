import React, { useState } from 'react';
import { LogSheet } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        查看日志 (自定义头部)
      </Button>
      
      <LogSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="应用日志"
        headerDescription="查看应用的实时日志信息"
        headerIcon="📋"
      />
    </div>
  );
} 