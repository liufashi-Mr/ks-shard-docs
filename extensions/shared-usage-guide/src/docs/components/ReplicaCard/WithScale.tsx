import React, { useState } from 'react';
import { ReplicaCard } from '@ks-console/shared';

export default function WithScale() {
  const [detail, setDetail] = useState({
    name: 'app-deployment',
    namespace: 'production',
    replicas: 5,
    ready: 5,
    available: 5,
    updated: 5
  });

  const handleScale = (replica: number) => {
    console.log('缩放副本数量:', replica);
    setDetail(prev => ({
      ...prev,
      replicas: replica,
      ready: replica,
      available: replica,
      updated: replica
    }));
  };

  return (
    <div style={{ padding: '16px' }}>
      <ReplicaCard
        module="deployments"
        detail={detail}
        enableScale={true}
        onScale={handleScale}
      />
    </div>
  );
} 