import React from 'react';
import { StatusIndicator } from '@ks-console/shared';

export default function WithCount() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="running" total={10} ready={8} />
        <span>运行中 (8/10)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="pending" total={5} ready={0} />
        <span>等待中 (0/5)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="failed" total={3} ready={0} />
        <span>失败 (0/3)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="stopped" total={2} ready={2} />
        <span>已停止 (2/2)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="creating" total={1} ready={0} />
        <span>创建中 (0/1)</span>
      </div>
    </div>
  );
} 