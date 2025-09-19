import React, { useState } from 'react';
import { Card, DataTable, Button, Select, Input } from '@kubed/components';
import { ColumnDef } from '@tanstack/react-table';
import { useUrlSearchParamsStatus, tableState2Query } from '@ks-console/shared';
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

export default function WithFilters() {
  const { state, setState } = useUrlSearchParamsStatus(['']);
  const [searchValue, setSearchValue] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const query = React.useMemo(() => {
    const baseQuery = tableState2Query(state);
    const filters: any = {};

    if (searchValue) {
      filters.name = searchValue;
    }
    if (departmentFilter) {
      filters.department = departmentFilter;
    }
    if (statusFilter) {
      filters.status = statusFilter;
    }

    return {
      ...baseQuery,
      ...filters,
    };
  }, [state, searchValue, departmentFilter, statusFilter]);

  const { data, isLoading, refetch } = store.useQueryList(query, {
    enabled: true,
  });

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
        accessorKey: 'phone',
        header: '电话',
        meta: {
          th: {
            width: 150,
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
        accessorKey: 'createTime',
        header: '创建时间',
        meta: {
          sortable: true,
          th: {
            width: 150,
          },
        },
        cell: ({ getValue }) => {
          const time = getValue();
          return new Date(time).toLocaleDateString();
        },
      },
    ];
  }, []);

  const baseConfig = React.useState(() =>
    DataTable.getDefaultTableOptions<MockData>({
      tableName: 'filters-data-table',
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
    onParamsChange: setState,
    state,
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
            toolbarLeft: (
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Input
                  placeholder="搜索姓名"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  style={{ width: 200 }}
                />
                <Select
                  placeholder="选择部门"
                  value={departmentFilter}
                  onChange={setDepartmentFilter}
                  style={{ width: 150 }}
                >
                  <Select.Option value="">全部部门</Select.Option>
                  <Select.Option value="技术部">技术部</Select.Option>
                  <Select.Option value="产品部">产品部</Select.Option>
                  <Select.Option value="运营部">运营部</Select.Option>
                  <Select.Option value="市场部">市场部</Select.Option>
                </Select>
                <Select
                  placeholder="选择状态"
                  value={statusFilter}
                  onChange={setStatusFilter}
                  style={{ width: 120 }}
                >
                  <Select.Option value="">全部状态</Select.Option>
                  <Select.Option value="active">活跃</Select.Option>
                  <Select.Option value="inactive">非活跃</Select.Option>
                </Select>
                <Button onClick={() => refetch()}>刷新</Button>
              </div>
            ),
          };
        },
        filters: () => {
          return {
            simpleMode: false,
            suggestions: [
              {
                key: 'name',
                label: '姓名',
              },
              {
                key: 'department',
                label: '部门',
              },
              {
                key: 'status',
                label: '状态',
              },
            ],
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
