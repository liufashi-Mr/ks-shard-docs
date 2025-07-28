import React, { useState } from 'react';
import { DataTable, StatusIndicator } from '@ks-console/shared';
import { Button } from '@kubed/components';

interface PodData {
  id: string;
  name: string;
  status: string;
  namespace: string;
  age: string;
  ready: string;
  restarts: number;
}

export default function WithActions() {
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});

  const columns = [
    {
      title: '名称',
      field: 'name',
      searchable: true,
      sortable: true,
    },
    {
      title: '状态',
      field: 'status',
      render: (value: any) => <StatusIndicator type={String(value).toLowerCase() as any} />,
      filterOptions: [
        { label: '运行中', key: 'Running' },
        { label: '等待中', key: 'Pending' },
        { label: '失败', key: 'Failed' },
      ],
    },
    {
      title: '命名空间',
      field: 'namespace',
      sortable: true,
    },
    {
      title: '运行时间',
      field: 'age',
      sortable: true,
    },
    {
      title: '就绪状态',
      field: 'ready',
    },
    {
      title: '重启次数',
      field: 'restarts',
      sortable: true,
    },
  ];

  const handleSelect = (selectedRowIds: Record<string, boolean>, selectedFlatRows: PodData[]) => {
    setSelectedRows(selectedRowIds);
    console.log('Selected rows:', selectedFlatRows);
  };

  const handleDelete = () => {
    const selectedNames = Object.keys(selectedRows).filter(key => selectedRows[key]);
    console.log('Deleting pods:', selectedNames);
  };

  const handleRestart = () => {
    const selectedNames = Object.keys(selectedRows).filter(key => selectedRows[key]);
    console.log('Restarting pods:', selectedNames);
  };

  const batchActions = (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button
        color="error"
        onClick={handleDelete}
        disabled={Object.keys(selectedRows).length === 0}
      >
        删除
      </Button>
      <Button
        color="warning"
        onClick={handleRestart}
        disabled={Object.keys(selectedRows).length === 0}
      >
        重启
      </Button>
    </div>
  );

  return (
    <DataTable
      columns={columns}
      url="https://m1.apifoxmock.com/m1/6723821-6434759-default/mock-data"
      tableName="pods-table-actions"
      rowKey="id"
      selectType="checkbox"
      onSelect={handleSelect}
      batchActions={batchActions}
    />
  );
}
