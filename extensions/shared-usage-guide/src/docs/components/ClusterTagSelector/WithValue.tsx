import React, { useState } from 'react';
import { ClusterTagSelector } from '@ks-console/shared';

export default function WithValue() {
  const [selectedTags, setSelectedTags] = useState(['production', 'stable']);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedTags.join(', ')}
      </div>
      <ClusterTagSelector 
        value={selectedTags}
        onChange={setSelectedTags}
      />
    </div>
  );
} 