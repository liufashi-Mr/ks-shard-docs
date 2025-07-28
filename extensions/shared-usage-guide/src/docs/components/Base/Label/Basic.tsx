import React from 'react';
import { Label, CollapseContent } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ padding: 16 }}>
      <Label name="应用" value="nginx" />
      <Label name="版本" value="v1.0.0" />
      {/* ? need to confirm */}
      <CollapseContent
        type="tags"
        data={[
          { key: '1', label: 'test1', value: 'test1' },
          { key: '2', label: 'test2', value: 'test2' },
          { key: '3', label: 'test3', value: 'test3' },
        ]}
      />
    </div>
  );
}
