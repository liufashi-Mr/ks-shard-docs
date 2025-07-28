import React from 'react';
import LabelsCard from '@ks-console/shared/lib/components/Base/Card/Labels';

export default function Basic() {
  const labels = {
    app: 'nginx',
    version: 'v1.0.0',
    env: 'prod',
  };

  return (
    <div style={{ padding: 16 }}>
      <LabelsCard labels={labels} />
    </div>
  );
} 