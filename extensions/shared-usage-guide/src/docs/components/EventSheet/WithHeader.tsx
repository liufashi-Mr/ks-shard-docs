import React, { useState } from 'react';
import { EventsSheet } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        查看事件 (自定义头部)
      </Button>
      
      <EventsSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="应用事件"
        headerDescription="查看应用的事件历史"
        headerIcon="📊"
        module="pods"
      />
    </div>
  );
} 