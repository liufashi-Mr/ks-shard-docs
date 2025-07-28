import React from 'react';
import { DetailPageSide } from '@ks-console/shared';

export default function WithMultipleChildren() {
  return (
    <div style={{ display: 'flex', height: '300px', border: '1px solid #ddd' }}>
      <div style={{ flex: 1, padding: '16px', borderRight: '1px solid #ddd' }}>
        <h3>Pod 详情</h3>
        <p>nginx-pod 的详细信息</p>
      </div>
      <DetailPageSide>
        <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h4>基本信息</h4>
          <p>状态: Running</p>
        </div>
        <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h4>容器</h4>
          <p>nginx: 1.19</p>
        </div>
        <div style={{ padding: '16px' }}>
          <h4>操作</h4>
          <p>查看日志</p>
        </div>
      </DetailPageSide>
    </div>
  );
} 