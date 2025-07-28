import React, { useState } from 'react';
import { TimeSelector } from '@ks-console/shared';

export default function WithCallbacks() {
  const [selectedTime, setSelectedTime] = useState('1h');

  const handleChange = (val: any) => {
    console.log('时间范围变化:', val);
    setSelectedTime(val.range);
  };

  const handleToggle = (toggled: boolean) => {
    console.log('切换状态:', toggled);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedTime}
      </div>
      <TimeSelector 
        showStep={true}
        onChange={handleChange}
        onToggle={handleToggle}
        timeOps={['1h', '6h', '12h', '1d']}
      />
    </div>
  );
} 