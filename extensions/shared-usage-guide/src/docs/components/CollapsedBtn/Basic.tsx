import React, { useState } from 'react';
import { CollapsedBtn } from '@ks-console/shared';

export default function Basic() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        当前状态: {collapsed ? '折叠' : '展开'}
      </div>
      <CollapsedBtn
        collapsed={collapsed}
        onClickCollapsed={setCollapsed}
      />
    </div>
  );
} 