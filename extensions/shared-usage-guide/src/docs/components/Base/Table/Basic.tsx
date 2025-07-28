import React, { useState } from 'react';
import { Table } from '@ks-console/shared';
import { Switch } from '@kubed/components';

interface RowData {
  id: number;
  name: string;
  status: string;
  age: string;
}

export default function Basic() {
  const [loading, setLoading] = useState(false);

  const dataSource: RowData[] = [
    { id: 1, name: 'nginx', status: 'Running', age: '2d' },
    { id: 2, name: 'redis', status: 'Running', age: '1d' },
    { id: 3, name: 'mysql', status: 'Pending', age: '3h' },
  ];

  const columns: any = [
    { Header: 'ID', accessor: 'id' },
    { Header: '名称', accessor: 'name' },
    { Header: '状态', accessor: 'status' },
    { Header: '运行时间', accessor: 'age' },
  ];

  return (
    <div>
      <Switch okText="关" offText="开" onChange={setLoading}>
        loading
      </Switch>
      <br />
      <br />
      <Table<RowData> dataSource={dataSource} columns={columns} loading={loading} />
    </div>
  );
}
