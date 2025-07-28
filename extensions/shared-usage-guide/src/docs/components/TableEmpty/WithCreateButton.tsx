import React from 'react';
import { TableEmpty } from '@ks-console/shared';

export default function WithCreateButton() {
  const handleCreateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('点击创建按钮');
  };

  return (
    <div style={{ padding: '16px', height: '300px' }}>
      <TableEmpty
        description="暂无 Service 资源"
        createButton={true}
        createButtonText="创建 Service"
        clickCreateButtonFn={handleCreateClick}
      />
    </div>
  );
} 