import React from 'react';
import { ListCollapseLayout } from '@ks-console/shared';

export default function WithSwitcher() {
  const navMenu = (
    <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
      <h4>资源类型</h4>
      <ul>
        <li>Deployments</li>
        <li>Services</li>
        <li>Pods</li>
      </ul>
    </div>
  );

  const switcher = {
    title: '集群选择',
    subtitle: '选择要查看的集群',
    content: (
      <div>
        <p>集群 1</p>
        <p>集群 2</p>
        <p>集群 3</p>
      </div>
    )
  };

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <ListCollapseLayout
        navMenu={navMenu}
        switcher={switcher}
        showCollapsedBtn={true}
      >
        <div style={{ padding: '16px' }}>
          <h3>集群资源列表</h3>
          <p>显示选中集群的资源列表</p>
        </div>
      </ListCollapseLayout>
    </div>
  );
} 