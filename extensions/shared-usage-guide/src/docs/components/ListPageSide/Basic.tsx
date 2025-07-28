import React from 'react';
import { ListPageSide } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', height: '300px', border: '1px solid #ddd' }}>
      <div style={{ flex: 1, padding: '16px', borderRight: '1px solid #ddd' }}>
        主内容区域
      </div>
      <ListPageSide>
        <div style={{ padding: '16px' }}>
          侧边栏内容
        </div>
      </ListPageSide>
    </div>
  );
} 