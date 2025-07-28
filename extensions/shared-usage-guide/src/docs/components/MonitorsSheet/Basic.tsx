import React, { useState } from 'react';
import { MonitorsSheet } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        查看监控
      </Button>
      
      <MonitorsSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="资源监控"
      />
    </div>
  );
} 