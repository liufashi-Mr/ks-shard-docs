import React, { useState } from 'react';
import { DeleteConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithResource() {
  const [visible, setVisible] = useState(false);

  const resources = ['nginx-pod', 'redis-pod'];

  return (
    <div>
      <Button onClick={() => setVisible(true)}>删除多个资源</Button>

      <DeleteConfirmModal
        visible={visible}
        type="Pod"
        resource={resources}
        title="确认删除多个 Pod"
        tip="将删除以下 Pod："
        onOk={data => {
          console.log('删除资源:', data);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
}
