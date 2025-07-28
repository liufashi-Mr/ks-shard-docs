import React from 'react';
import { Markdown } from '@ks-console/shared';

export default function WithGFM() {
  const markdownText = `# GFM 支持

## 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 另一个任务

## 表格

| 名称 | 状态 | 描述 |
|------|------|------|
| Pod 1 | Running | 运行中 |
| Pod 2 | Pending | 等待中 |
| Pod 3 | Failed | 失败 |

## 删除线和代码

~~删除的文本~~

\`行内代码\`

\`\`\`bash
kubectl get pods
\`\`\`
`;

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
      <Markdown isSupportGFM={true}>{markdownText}</Markdown>
    </div>
  );
} 