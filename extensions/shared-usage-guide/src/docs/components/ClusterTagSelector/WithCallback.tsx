import React, { useState } from 'react';
import { ClusterTagSelector } from '@ks-console/shared';

export default function WithCallback() {
  const [selectedTags, setSelectedTags] = useState(['development', 'testing']);

  const handleTagChange = (tags: string[]) => {
    console.log('集群标签变化:', tags);
    setSelectedTags(tags);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedTags.join(', ')}
      </div>
      <ClusterTagSelector 
        value={selectedTags}
        onChange={handleTagChange}
      />
    </div>
  );
} 