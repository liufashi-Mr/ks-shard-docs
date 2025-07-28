import React, { useState } from 'react';
import { ConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithDescription() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        显示信息确认对话框
      </Button>
      
      <ConfirmModal
        title="系统更新"
        description={
          <div>
            <p>系统将进行重要更新，更新内容包括：</p>
            <ul>
              <li>安全补丁更新</li>
              <li>性能优化</li>
              <li>新功能添加</li>
            </ul>
            <p>更新期间系统将重启，请确保已保存所有工作。</p>
          </div>
        }
        titleIconProps={{
          type: 'info'
        }}
        visible={visible}
        onOk={() => {
          console.log('用户确认更新');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 