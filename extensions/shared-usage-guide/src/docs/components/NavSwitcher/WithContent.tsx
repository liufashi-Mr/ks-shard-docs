import React, { useState } from 'react';
import { NavSwitcher } from '@ks-console/shared';

export default function WithContent() {
  const [collapsed, setCollapsed] = useState(false);

  const content = (
    <div style={{ padding: '8px' }}>
      <div style={{ marginBottom: '8px' }}>
        <input type="radio" name="cluster" id="cluster1" />
        <label htmlFor="cluster1">生产集群</label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <input type="radio" name="cluster" id="cluster2" />
        <label htmlFor="cluster2">测试集群</label>
      </div>
      <div>
        <input type="radio" name="cluster" id="cluster3" />
        <label htmlFor="cluster3">开发集群</label>
      </div>
    </div>
  );

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
        content={content}
      />
    </div>
  );
} 