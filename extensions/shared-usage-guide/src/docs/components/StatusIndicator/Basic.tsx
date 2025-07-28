import React from 'react';
import { StatusIndicator } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="running" />
        <span>运行中</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="pending" />
        <span>等待中</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="failed" />
        <span>失败</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="stopped" />
        <span>已停止</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="creating" />
        <span>创建中</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="updating" />
        <span>更新中</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="deleting" />
        <span>删除中</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="unknown" />
        <span>未知状态</span>
      </div>
    </div>
  );
} 