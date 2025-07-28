import React, { useState } from 'react';
import { CollapseContainer } from '@ks-console/shared';

export default function Controlled() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CollapseContainer 
        title="受控面板 1"
        isOpen={open1}
        onChange={setOpen1}
      >
        <div style={{ padding: '16px' }}>
          <p>这是受控面板的内容</p>
          <p>当前状态: {open1 ? '展开' : '收起'}</p>
        </div>
      </CollapseContainer>
      
      <CollapseContainer 
        title="受控面板 2"
        isOpen={open2}
        onChange={setOpen2}
      >
        <div style={{ padding: '16px' }}>
          <p>另一个受控面板</p>
          <p>当前状态: {open2 ? '展开' : '收起'}</p>
        </div>
      </CollapseContainer>
    </div>
  );
} 