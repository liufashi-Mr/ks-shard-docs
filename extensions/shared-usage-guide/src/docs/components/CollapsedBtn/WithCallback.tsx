import React, { useState } from 'react';
import { CollapsedBtn } from '@ks-console/shared';

export default function WithCallback() {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsedChange = (newCollapsed: boolean) => {
    console.log('折叠状态变化:', newCollapsed);
    setCollapsed(newCollapsed);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        当前状态: {collapsed ? '折叠' : '展开'}
      </div>
      <CollapsedBtn
        collapsed={collapsed}
        onClickCollapsed={handleCollapsedChange}
      />
    </div>
  );
} 