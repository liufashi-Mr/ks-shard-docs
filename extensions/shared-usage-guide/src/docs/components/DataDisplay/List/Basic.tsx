import React from 'react';
import { List, ListItem } from '@ks-console/shared';

export default function Basic() {
  const dataSource = [
    {
      id: 1,
      icon: 'nginx-duotone',
      title: 'nginx-deployment',
      description: 'Web 服务器部署',
      status: 'Running',
    },
    {
      id: 2,
      icon: 'redis',
      title: 'redis-cache',
      description: '缓存服务',
      status: 'Running',
    },
    {
      id: 3,
      icon: 'app-mysql',
      title: 'mysql-database',
      description: '数据库服务',
      status: 'Failed',
    },
  ];

  return (
    <List>
      {dataSource.map(item => (
        <ListItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
          status={item.status}
        />
      ))}
    </List>
  );
}
