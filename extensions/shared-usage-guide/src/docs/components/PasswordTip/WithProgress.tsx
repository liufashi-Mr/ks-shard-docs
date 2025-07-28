import React, { useState } from 'react';
import { PasswordTip } from '@ks-console/shared';
import { Input } from '@kubed/components';

export default function WithProgress() {
  const [password, setPassword] = useState('');

  return (
    <div style={{ padding: '16px' }}>
      <Input
        type="password"
        placeholder="请输入密码 (带进度条)"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <PasswordTip password={password} hasProgress={true} />
    </div>
  );
} 