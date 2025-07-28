import React, { useState } from 'react';
import { NavSwitcher } from '@ks-console/shared';

export default function WithTitle() {
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
        title="命名空间"
        subtitle="选择要查看的命名空间"
        content={
          <div style={{ padding: '8px' }}>
            <p>default</p>
            <p>kube-system</p>
            <p>production</p>
          </div>
        }
      />
    </div>
  );
} 