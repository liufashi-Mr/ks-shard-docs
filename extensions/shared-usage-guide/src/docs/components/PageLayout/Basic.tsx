import React from 'react';
import { PageLayout } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <PageLayout
        title="应用管理"
        tipsIconProps={{
          tipsText: "管理您的应用和部署"
        }}
      >
        <div style={{ padding: '16px' }}>
          <p>这是页面内容区域</p>
          <p>您可以在这里放置任何内容</p>
        </div>
      </PageLayout>
    </div>
  );
} 