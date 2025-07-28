import React from 'react';
import { CustomTooltip } from '@ks-console/shared';

export default function WithCustomLabel() {
  const usageData = [{ cpu: '75%', memory: '750Mi', storage: '15Gi' }];

  const totalData = [{ cpu: '100%', memory: '1Gi', storage: '20Gi' }];

  const renderLabel = (res: any) => {
    return `自定义标签: ${res.name || '未知资源'}`;
  };

  return (
    <CustomTooltip
      active={true}
      usageData={usageData}
      totalData={totalData}
      renderLabel={renderLabel}
      label="自定义显示"
      unit=""
    />
  );
}
