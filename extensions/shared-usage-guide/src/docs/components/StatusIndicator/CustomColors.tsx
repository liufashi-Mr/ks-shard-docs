import React from 'react';
import { StatusIndicator } from '@ks-console/shared';

export default function CustomColors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="running" color="success" />
        <span>运行中 (success 颜色)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="pending" color="warning" />
        <span>等待中 (warning 颜色)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="failed" color="error" />
        <span>失败 (error 颜色)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="creating" color="blue" />
        <span>创建中 (blue 颜色)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator type="stopped" color="default" />
        <span>已停止 (default 颜色)</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <StatusIndicator color="success">自定义内容</StatusIndicator>
        <span>自定义内容显示</span>
      </div>
    </div>
  );
} 