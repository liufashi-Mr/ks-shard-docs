import React from 'react';
import { AnnotationsCard } from '@ks-console/shared';

export default function () {
  return (
    <AnnotationsCard
      annotations={{
        'kubesphere.io/alias-name': 'alias-name',
        'kubesphere.io/creator': 'admin',
        'kubesphere.io/description': 'description',
        test: '11',
      }}
      hiddenKeys={['test']}
    />
  );
}
