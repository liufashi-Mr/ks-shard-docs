import React, { useState } from 'react';
import { PasswordTip } from '@ks-console/shared';
import { Input } from '@kubed/components';

export default function CustomStyle() {
  const [password, setPassword] = useState('');

  return (
    <div style={{ padding: '16px' }}>
      <Input
        type="password"
        placeholder="请输入密码 (自定义样式)"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px' }}>
        <PasswordTip 
          password={password} 
          hasProgress={true}
          className="custom-password-tip"
        />
      </div>
    </div>
  );
} 