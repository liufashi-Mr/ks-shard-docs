import React from 'react';
import { Markdown } from '@ks-console/shared';

export default function WithTheme() {
  const markdownText = `# 主题示例

## GitHub Light 主题

这个主题使用 GitHub 风格的浅色主题。

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
\`\`\`
`;

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
      <Markdown themeName="github-light">{markdownText}</Markdown>
    </div>
  );
} 