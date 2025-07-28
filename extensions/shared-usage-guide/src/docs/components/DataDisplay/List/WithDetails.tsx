import React from 'react';
import { List, ListAdd, ListItem } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithOperations() {
  const handleEdit = () => {
    alert('编辑');
  };

  const handleDelete = () => {
    alert('删除');
  };

  const dataSource = [
    {
      id: 1,
      icon: 'nginx',
      title: 'nginx-deployment',
      description: 'Web 服务器部署',
      status: 'Running',
      details: [
        {
          title: '版本',
          description: '1.23.4',
        },
        {
          title: '端口',
          description: '80, 443',
        },
        {
          title: '配置文件路径',
          description: '/etc/nginx/nginx.conf',
        },
      ],
    },
    {
      id: 2,
      icon: 'redis',
      title: 'redis-cache',
      description: '缓存服务',
      status: 'Running',
      details: [
        {
          title: '版本',
          description: '7.0.11',
        },
        {
          title: '监听端口',
          description: '6379',
        },
        {
          title: '内存限制',
          description: '1GB',
        },
      ],
    },
    {
      id: 3,
      icon: 'mysql',
      title: 'mysql-database',
      description: '数据库服务',
      status: 'Failed',
      details: [
        {
          title: '版本',
          description: '8.0.33',
        },
        {
          title: '监听端口',
          description: '3306',
        },
        {
          title: '数据目录',
          description: '/var/lib/mysql',
        },
        {
          title: '错误原因',
          description: '磁盘空间不足',
        },
      ],
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
          details={item.details}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </List>
  );
}
