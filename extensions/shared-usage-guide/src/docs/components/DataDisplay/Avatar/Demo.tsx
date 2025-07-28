import React from 'react';
import { Avatar } from '@ks-console/shared';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Avatar title="default-project" description="默认" />
      <Avatar title="web-application" to="https://www.baidu.com" description="带链接" />
      <Avatar title="database-service" module="users" description="内置 module 的 Icon" />
      <Avatar title="redis" icon="redis" iconSize={20} description="带图标" />
      <Avatar
        title="multi-cluster-project"
        isMultiCluster
        description="多集群项目"
        module="clusters"
      />
      <Avatar title="multi-cluster-project" isMultiCluster description="多集群项目" icon="cdn" />
    </div>
  );
}
