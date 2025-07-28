import React from 'react';
import { ListPageSide } from '@ks-console/shared';

export default function WithMultipleChildren() {
  return (
    <div style={{ display: 'flex', height: '300px', border: '1px solid #ddd' }}>
      <div style={{ flex: 1, padding: '16px', borderRight: '1px solid #ddd' }}>
        <h3>Service 列表</h3>
        <p>这里是 Service 资源列表</p>
      </div>
      <ListPageSide>
        <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h4>筛选器</h4>
          <p>按类型筛选</p>
        </div>
        <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h4>统计信息</h4>
          <p>总数: 5</p>
        </div>
        <div style={{ padding: '16px' }}>
          <h4>操作</h4>
          <p>创建新服务</p>
        </div>
      </ListPageSide>
    </div>
  );
} 