import React, { useState } from 'react';
import { Switch } from '@kubed/components';
import { Panel } from '@ks-console/shared';

export default function PanelBasic() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <Switch okText="关" offText="开" onChange={setLoading}>
          loading
        </Switch>
        <Panel title="With loading" loading={loading}>
          <p>应用名称: nginx</p>
          <p>版本: v1.0.0</p>
          <p>状态: 运行中</p>
        </Panel>
      </div>
      <Panel title="With extra" extras="注意：这里是额外信息😁">
        <p>应用名称: nginx</p>
        <p>版本: v1.0.0</p>
        <p>状态: 运行中</p>
      </Panel>
    </div>
  );
}
