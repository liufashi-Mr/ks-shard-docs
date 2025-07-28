import React, { useState } from 'react';
import { NavSwitcher } from '@ks-console/shared';

export default function Basic() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setCollapsed(!collapsed)}>
          切换折叠状态
        </button>
      </div>
      <NavSwitcher
        collapsed={collapsed}
        title="集群选择"
        subtitle="选择要查看的集群"
      />
    </div>
  );
} 