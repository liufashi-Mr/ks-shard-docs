import React from 'react';
import { DetailPageSide } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', height: '300px', border: '1px solid #ddd' }}>
      <div style={{ flex: 1, padding: '16px', borderRight: '1px solid #ddd' }}>
        详情内容区域
      </div>
      <DetailPageSide>
        <div style={{ padding: '16px' }}>
          详情侧边栏
        </div>
      </DetailPageSide>
    </div>
  );
} 