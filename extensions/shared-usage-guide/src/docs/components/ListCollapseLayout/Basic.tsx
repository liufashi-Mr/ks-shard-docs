import React from 'react';
import { ListCollapseLayout } from '@ks-console/shared';

export default function Basic() {
  const navMenu = (
    <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
      <h4>导航菜单</h4>
      <ul>
        <li>Deployments</li>
        <li>Services</li>
        <li>Pods</li>
      </ul>
    </div>
  );

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <ListCollapseLayout
        navMenu={navMenu}
        showCollapsedBtn={true}
      >
        <div style={{ padding: '16px' }}>
          <h3>主要内容</h3>
          <p>这里是列表页面的主要内容</p>
        </div>
      </ListCollapseLayout>
    </div>
  );
} 