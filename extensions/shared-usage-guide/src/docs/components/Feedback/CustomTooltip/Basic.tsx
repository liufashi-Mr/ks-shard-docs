import React from 'react';
import { CustomTooltip } from '@ks-console/shared';

export default function Basic() {
  const usageData = [
    { cpu: '60%', memory: '512Mi', storage: '10Gi' },
    { cpu: '40%', memory: '256Mi', storage: '5Gi' },
  ];

  const totalData = [
    { cpu: '100%', memory: '1Gi', storage: '20Gi' },
    { cpu: '100%', memory: '1Gi', storage: '20Gi' },
  ];

  return (
    <CustomTooltip
      payload={[
        {
          name: 'cpu',
          value: '60',
          unit: '%',
        },
        {
          name: 'memory',
          value: '512',
          unit: 'Mi',
        },
      ]}
      active={true}
      usageData={usageData}
      totalData={totalData}
      label="资源使用情况"
      unit=""
    />
  );
}
