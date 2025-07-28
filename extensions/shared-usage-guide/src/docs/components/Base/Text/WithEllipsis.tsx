import React from 'react';
import { Text } from '@ks-console/shared';

export default function WithEllipsis() {
  const longDescription = '这是一个非常长的描述文本，用于测试省略号功能是否正常工作，当文本超过一定长度时会显示省略号';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <Text
        title="长标题测试"
        description={longDescription}
        ellipsis={true}
      />
      
      <Text
        icon="pod"
        title="Pod 详细信息"
        description="这是一个包含很多详细信息的 Pod 描述，包括镜像、端口、环境变量等配置信息"
        ellipsis={true}
        onClick={() => alert('点击了文本')}
      />
    </div>
  );
} 