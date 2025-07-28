import React, { useState } from 'react';
import { LogSheet } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setOpen(true)}>
        查看日志
      </Button>
      
      <LogSheet
        open={open}
        onOpenChange={setOpen}
        headerTitle="容器日志"
      />
    </div>
  );
} 