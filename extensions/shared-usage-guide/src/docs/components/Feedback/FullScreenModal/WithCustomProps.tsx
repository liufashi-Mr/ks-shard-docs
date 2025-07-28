import React, { useState } from 'react';
import { FullScreenModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomProps() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        自定义全屏模态框
      </Button>
      
      <FullScreenModal
        visible={visible}
        title="自定义标题"
        onCancel={() => setVisible(false)}
        okText="保存"
        cancelText="关闭"
        onOk={() => {
          console.log('保存操作');
          setVisible(false);
        }}
      >
        <div style={{ padding: '20px' }}>
          <h3>自定义内容</h3>
          <p>这是一个自定义的全屏模态框</p>
          <p>您可以自定义按钮文本和操作</p>
        </div>
      </FullScreenModal>
    </div>
  );
} 