import React from 'react';
import { Card, DataTable, Button } from '@kubed/components';
import { ColumnDef } from '@tanstack/react-table';
import store from './store';
import { StatusIndicator } from '@ks-console/shared';

interface MockData {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  status: string;
  createTime: string;
  updateTime: string;
}

export default function Basic() {
  const { data, isLoading, refetch } = store.useQueryList(
    {},
    {
      enabled: true,
    },
  );

  const columns: ColumnDef<MockData, any>[] = React.useMemo(() => {
    return [
      {
        accessorKey: 'name',
        header: '名称',
        meta: {
          th: {
            width: 150,
          },
        },
      },
      {
        accessorKey: 'status',
        header: '状态',
        meta: {
          sortable: true,
          th: {
            width: 200,
          },
        },
        cell: ({ getValue }) => {
          const status = getValue();
          return <StatusIndicator type={status}>{t(status.toUpperCase())}</StatusIndicator>;
        },
      },
      {
        accessorKey: 'namespace',
        header: '项目',
        meta: {
          th: {
            width: 150,
          },
        },
      },
      {
        accessorKey: 'age',
        header: '时长',
        meta: {
          sortable: true,
          th: {
            width: 120,
          },
        },
      },
      {
        accessorKey: 'ready',
        header: '实例',
        meta: {
          sortable: true,
          th: {
            width: 120,
          },
        },
      },
      {
        accessorKey: 'restarts',
        header: '重启次数',
        meta: {
          sortable: true,
          th: {
            width: 100,
          },
        },
      },
    ];
  }, []);

  const baseConfig = React.useState(() =>
    DataTable.getDefaultTableOptions<MockData>({
      tableName: 'basic-data-table',
      manual: true,
      enableVisible: true,
      enableSelection: false,
    }),
  )[0];

  const table = DataTable.useTable<MockData>({
    ...baseConfig,
    columns,
    loading: isLoading,
    data: data?.data ?? [],
    rowCount: data?.total ?? 0,
    getRowId: React.useCallback(row => row.id, []),
    meta: {
      ...baseConfig.meta,
      refetch: () => {
        refetch();
      },
      getProps: {
        table: () => {
          return {
            stickyHeader: true,
            tableWrapperClassName: 'table',
          };
        },
        toolbar: () => {
          return {
            toolbarLeft: <Button onClick={() => refetch()}>刷新数据</Button>,
          };
        },
      },
    },
  });

  return (
    <Card padding={0}>
      <DataTable.DataTable table={table} />
    </Card>
  );
}
