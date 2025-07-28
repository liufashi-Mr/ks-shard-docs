import React, { useState } from 'react';
import { DeleteConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>删除确认</Button>
      <DeleteConfirmModal
        visible={visible}
        type="Pod"
        title="确认删除"
        tip="此操作不可撤销"
        onOk={data => {
          console.log('删除资源:', data);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
}
