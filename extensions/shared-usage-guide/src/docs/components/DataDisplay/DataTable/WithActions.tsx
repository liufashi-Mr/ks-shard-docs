import React from 'react';
import { Card, DataTable, Button } from '@kubed/components';
import { ColumnDef } from '@tanstack/react-table';
import { Icon } from '@ks-console/shared';
import { Eye, Pen, Trash } from '@kubed/icons';
import store from './store';

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

export default function WithActions() {
  const tableRef = React.useRef<any>();
  const { data, isLoading, refetch } = store.useQueryList(
    {},
    {
      enabled: true,
    },
  );

  const handleView = (record: MockData) => {
    console.log(`查看用户: ${record.name}`);
    // 在实际项目中，这里可以打开详情页面或模态框
  };

  const handleEdit = (record: MockData) => {
    console.log(`编辑用户: ${record.name}`);
    // 在实际项目中，这里可以打开编辑表单
  };

  const handleDelete = (record: MockData) => {
    console.log(`删除用户: ${record.name}`);
    // 在实际项目中，这里可以显示确认对话框
  };

  const handleBatchDelete = () => {
    const selectedRows = tableRef.current?.getSelectedRowModel()?.rows || [];
    const selectedNames = selectedRows.map((row: any) => row.original.name).join(', ');
    console.log(`批量删除用户: ${selectedNames}`);
    // 在实际项目中，这里可以显示确认对话框
  };

  const columns: ColumnDef<MockData, any>[] = React.useMemo(() => {
    return [
      {
        accessorKey: 'name',
        header: '姓名',
        meta: {
          sortable: true,
          th: {
            width: 150,
          },
        },
      },
      {
        accessorKey: 'email',
        header: '邮箱',
        meta: {
          sortable: true,
          th: {
            width: 200,
          },
        },
      },
      {
        accessorKey: 'department',
        header: '部门',
        meta: {
          sortable: true,
          th: {
            width: 120,
          },
        },
      },
      {
        accessorKey: 'position',
        header: '职位',
        meta: {
          sortable: true,
          th: {
            width: 120,
          },
        },
      },
      {
        accessorKey: 'status',
        header: '状态',
        meta: {
          sortable: true,
          th: {
            width: 100,
          },
        },
        cell: ({ getValue }) => {
          const status = getValue();
          return (
            <span
              style={{
                color: status === 'active' ? '#52c41a' : '#ff4d4f',
                fontWeight: 'bold',
              }}
            >
              {status === 'active' ? '活跃' : '非活跃'}
            </span>
          );
        },
      },
      {
        header: '操作',
        accessorKey: 'actions',
        meta: {
          width: 150,
        },
        cell: ({ row }) => {
          const record = row.original;
          return (
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="sm" variant="text" icon={<Eye />} onClick={() => handleView(record)}>
                查看
              </Button>
              <Button size="sm" variant="text" icon={<Pen />} onClick={() => handleEdit(record)}>
                编辑
              </Button>
              <Button
                size="sm"
                variant="text"
                color="error"
                icon={<Trash />}
                onClick={() => handleDelete(record)}
              >
                删除
              </Button>
            </div>
          );
        },
      },
    ];
  }, []);

  const baseConfig = React.useState(() =>
    DataTable.getDefaultTableOptions<MockData>({
      tableName: 'actions-data-table',
      manual: true,
      enableVisible: true,
      enableSelection: true,
      enableMultiSelection: true,
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
            batchActions: (
              <Button color="error" onClick={handleBatchDelete}>
                批量删除
              </Button>
            ),
          };
        },
      },
    },
  });

  React.useEffect(() => {
    tableRef.current = table;
  }, [table]);

  return (
    <Card padding={0}>
      <DataTable.DataTable table={table} />
    </Card>
  );
}
