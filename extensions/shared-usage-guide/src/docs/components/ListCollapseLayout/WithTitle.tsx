import React from 'react';
import { ListCollapseLayout } from '@ks-console/shared';

export default function WithTitle() {
  const navMenu = (
    <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
      <h4>工作负载</h4>
      <ul>
        <li>Deployments</li>
        <li>StatefulSets</li>
        <li>DaemonSets</li>
      </ul>
    </div>
  );

  const title = (
    <div style={{ padding: '16px', backgroundColor: '#e6f7ff' }}>
      <h2>工作负载管理</h2>
      <p>管理 Kubernetes 工作负载资源</p>
    </div>
  );

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <ListCollapseLayout
        navMenu={navMenu}
        title={title}
        showCollapsedBtn={true}
      >
        <div style={{ padding: '16px' }}>
          <h3>工作负载列表</h3>
          <p>显示所有工作负载资源</p>
        </div>
      </ListCollapseLayout>
    </div>
  );
} 