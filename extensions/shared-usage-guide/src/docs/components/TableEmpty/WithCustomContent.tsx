import React from 'react';
import { TableEmpty } from '@ks-console/shared';

export default function WithCustomContent() {
  return (
    <div style={{ padding: '16px', height: '300px' }}>
      <TableEmpty
        description="暂无 ConfigMap 资源"
        createButton={true}
        createButtonText="创建 ConfigMap"
      >
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <p>您可以通过以下方式创建 ConfigMap：</p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>使用 YAML 文件创建</li>
            <li>从现有文件创建</li>
            <li>使用命令行创建</li>
          </ul>
        </div>
      </TableEmpty>
    </div>
  );
} 