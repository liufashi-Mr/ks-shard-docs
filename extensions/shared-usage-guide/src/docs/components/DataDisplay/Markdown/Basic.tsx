import React from 'react';
import { Markdown } from '@ks-console/shared';

export default function Basic() {
  const markdownText = `# 标题 1
## 标题 2

这是一个段落，包含**粗体**和*斜体*文本。

- 列表项 1
- 列表项 2
- 列表项 3

\`\`\`javascript
console.log('Hello World!');
\`\`\`

> 这是一个引用块
`;

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
      <Markdown>{markdownText}</Markdown>
    </div>
  );
} 