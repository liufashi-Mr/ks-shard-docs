import React from 'react';
import { Image } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Image src="https://picsum.photos/64/64" iconSize={64} iconLetter="N" />
      <Image src="https://picsum.photos/48/48" iconSize={48} iconLetter="R" />
      <Image src="https://picsum.photos/32/32" iconSize={32} iconLetter="D" />
    </div>
  );
}
