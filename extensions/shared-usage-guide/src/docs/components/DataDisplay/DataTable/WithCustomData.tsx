import React from 'react';
import { DataTable, StatusIndicator } from '@ks-console/shared';

interface PodData {
  id: string;
  name: string;
  status: string;
  namespace: string;
  age: string;
  ready: string;
  restarts: number;
}

export default function WithCustomData() {
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
      sortable: true,
    },
    {
      title: '命名空间',
      field: 'namespace',
      sortable: true,
      filterOptions: [
        { label: 'default', key: 'default' },
        { label: 'database', key: 'database' },
        { label: 'web', key: 'web' },
      ],
    },
    {
      title: '运行时间',
      field: 'age',
      sortable: true,
    },
    {
      title: '就绪状态',
      field: 'ready',
      sortable: true,
    },
    {
      title: '重启次数',
      field: 'restarts',
      sortable: true,
      filterOptions: [
        { label: '0次', key: 0 },
        { label: '1-3次', key: '1-3' },
        { label: '3次以上', key: '3+' },
      ],
    },
    {
      title: '测试',
      field: 'test',
    },
  ];

  const serverDataFormat = (response: any) => ({
    items: response.data,
    totalItems: response.total,
  });

  const format = (data: any) => ({ ...data, test: '1' });

  const transformRequestParams = (params: any) => ({ ...params, perPage: params.limit });

  return (
    <DataTable
      columns={columns}
      url="https://m1.apifoxmock.com/m1/6723821-6434759-default/mock-data-2"
      tableName="pods-table-filters"
      format={format}
      transformRequestParams={transformRequestParams}
      serverDataFormat={serverDataFormat}
      rowKey="id"
      simpleSearch
      placeholder="搜索 Pod 名称..."
    />
  );
}
