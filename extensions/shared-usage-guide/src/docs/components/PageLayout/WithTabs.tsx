import React, { useState } from 'react';
import { PageLayout } from '@ks-console/shared';

export default function WithTabs() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { title: '概览', name: 'overview' },
    { title: '部署', name: 'deployments', count: 3 },
    { title: '服务', name: 'services', count: 2 },
    { title: '配置', name: 'configs', disabled: true }
  ];

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <PageLayout
        title="应用详情"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      >
        <div style={{ padding: '16px' }}>
          <p>当前标签页: {activeTab}</p>
          <p>这是标签页内容区域</p>
        </div>
      </PageLayout>
    </div>
  );
} 