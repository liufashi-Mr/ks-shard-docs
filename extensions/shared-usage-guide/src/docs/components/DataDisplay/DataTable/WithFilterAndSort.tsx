import React from 'react';
import { DataTable, StatusIndicator } from '@ks-console/shared';

export default function WithFilterAndSort() {
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
      canHide: true,
    },
    {
      title: '运行时间',
      field: 'age',
      sortable: true,
      canHide: true,
    },
    {
      title: '就绪状态',
      field: 'ready',
      canHide: true,
    },
    {
      title: '重启次数',
      field: 'restarts',
      sortable: true,
      canHide: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      useStorageState
      url="https://m1.apifoxmock.com/m1/6723821-6434759-default/mock-data"
      tableName="pods-table"
      rowKey="id"
    />
  );
}
