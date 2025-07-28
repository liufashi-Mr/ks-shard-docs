import React, { useState } from 'react';
import { EventsSheet } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        查看事件
      </Button>
      
      <EventsSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="Kubernetes 事件"
        module="deployments"
      />
    </div>
  );
} 