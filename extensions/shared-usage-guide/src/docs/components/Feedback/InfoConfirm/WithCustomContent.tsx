import React, { useState } from 'react';
import { InfoConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomContent() {
  const [visible, setVisible] = useState(false);

  const customContent = (
    <div>
      <h4>重要更新通知</h4>
      <p>系统将进行以下更新：</p>
      <ul>
        <li>新增用户管理功能</li>
        <li>优化性能表现</li>
        <li>修复已知问题</li>
      </ul>
      <p>更新期间系统将重启，预计耗时 5 分钟。</p>
    </div>
  );

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        显示详细通知
      </Button>
      
      <InfoConfirmModal
        visible={visible}
        title="系统更新通知"
        content={customContent as any}
        onOk={() => {
          console.log('用户确认更新');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 