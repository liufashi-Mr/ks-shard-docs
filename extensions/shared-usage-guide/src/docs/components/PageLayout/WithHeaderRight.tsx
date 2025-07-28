import React from 'react';
import { PageLayout } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithHeaderRight() {
  const headerRight = (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button>创建应用</Button>
      <Button>导入应用</Button>
    </div>
  );

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <PageLayout
        title="应用列表"
        headerRight={headerRight}
        tipsIconProps={{
          tipsText: "查看和管理您的应用"
        }}
      >
        <div style={{ padding: '16px' }}>
          <p>这是应用列表页面</p>
          <p>右侧有操作按钮</p>
        </div>
      </PageLayout>
    </div>
  );
} 