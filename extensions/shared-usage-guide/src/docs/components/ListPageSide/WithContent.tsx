import React from 'react';
import { ListPageSide } from '@ks-console/shared';

export default function WithContent() {
  return (
    <div style={{ display: 'flex', height: '300px', border: '1px solid #ddd' }}>
      <div style={{ flex: 1, padding: '16px', borderRight: '1px solid #ddd' }}>
        <h3>Deployment 列表</h3>
        <p>这里是 Deployment 资源列表</p>
      </div>
      <ListPageSide>
        <div style={{ padding: '16px' }}>
          <h4>快速操作</h4>
          <ul>
            <li>创建 Deployment</li>
            <li>导入 YAML</li>
            <li>批量操作</li>
          </ul>
        </div>
      </ListPageSide>
    </div>
  );
} 