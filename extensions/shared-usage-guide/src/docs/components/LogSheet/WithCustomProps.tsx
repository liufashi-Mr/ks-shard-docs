import React, { useState } from 'react';
import { LogSheet } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomProps() {
  const [open, setOpen] = useState(false);

  const sheetContentProps = {
    side: 'right' as const,
    size: 'lg' as const
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        查看日志 (自定义属性)
      </Button>
      
      <LogSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="系统日志"
        sheetContentProps={sheetContentProps}
      />
    </div>
  );
} 