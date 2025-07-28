import React from 'react';
import { DetailPageSide } from '@ks-console/shared';

export default function WithContent() {
  return (
    <div style={{ display: 'flex', height: '300px', border: '1px solid #ddd' }}>
      <div style={{ flex: 1, padding: '16px', borderRight: '1px solid #ddd' }}>
        <h3>Deployment 详情</h3>
        <p>nginx-deployment 的详细信息</p>
      </div>
      <DetailPageSide>
        <div style={{ padding: '16px' }}>
          <h4>快速操作</h4>
          <ul>
            <li>编辑 YAML</li>
            <li>重启</li>
            <li>删除</li>
          </ul>
        </div>
      </DetailPageSide>
    </div>
  );
} 