import React, { useState } from 'react';
import { DeleteConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomTitle() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>删除集群</Button>

      <DeleteConfirmModal
        visible={visible}
        type="Cluster"
        deleteCluster={true}
        title="危险操作警告"
        tip="您即将删除整个集群！"
        desc="此操作将删除集群中的所有资源，包括："
        onOk={data => {
          console.log('删除集群:', data);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
}
