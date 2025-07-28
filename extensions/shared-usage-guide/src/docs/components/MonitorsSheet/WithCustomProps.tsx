import React, { useState } from 'react';
import { MonitorsSheet } from '@ks-console/shared';
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
        查看监控 (自定义属性)
      </Button>
      
      <MonitorsSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="系统监控"
        sheetContentProps={sheetContentProps}
      />
    </div>
  );
} 