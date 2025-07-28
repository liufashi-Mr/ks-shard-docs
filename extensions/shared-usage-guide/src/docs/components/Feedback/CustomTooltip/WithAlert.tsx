import React from 'react';
import { CustomTooltip } from '@ks-console/shared';

export default function WithAlert() {
  const usageData = [{ cpu: '95%', memory: '900Mi', storage: '18Gi' }];

  const totalData = [{ cpu: '100%', memory: '1Gi', storage: '20Gi' }];

  const alert = {
    type: 'warning',
    message: 'CPU 使用率过高',
    threshold: '90%',
  };

  return (
    <CustomTooltip
      active={true}
      usageData={usageData}
      totalData={totalData}
      label="高负载警告"
      alert={alert}
      unit=""
    />
  );
}
