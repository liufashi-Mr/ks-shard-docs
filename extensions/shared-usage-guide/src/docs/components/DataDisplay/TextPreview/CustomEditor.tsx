import React from 'react';
import { TextPreview } from '@ks-console/shared';

export default function CustomEditor() {
  const files = {
    'package.json': `class Example {
   static void main(String[] args) {
      int count = 0;
		
      while(count<5) {
         println(count);
         count++;
      }
   }
}`,
  };

  const editorOptions = {
    fontSize: 12,
    readOnly: false,
    mode: 'groovy',
  };

  return <TextPreview files={files} editorOptions={editorOptions} hideToolbar={true} />;
}
