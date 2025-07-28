import React from 'react';
import { Image } from '@ks-console/shared';

export default function WithFallback() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Image 
        src="invalid-url"
        iconSize={48}
        iconLetter="N"
        canLoading
      />
      <Image 
        src=""
        iconSize={48}
        iconLetter="D"
      />
      <Image 
        src={undefined}
        iconSize={48}
        iconLetter="K"
      />
    </div>
  );
} 