import React from 'react';
import { List, ListAdd, ListItem } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithOperations() {
  const [dataSource, setDataSource] = React.useState([
    {
      id: 1,
      icon: 'nginx',
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
      icon: 'mysql',
      title: 'mysql-database',
      description: '数据库服务',
      status: 'Failed',
    },
  ]);

  const handleDuplicate = ({ id }: any) => {
    setDataSource(x => {
      const newDataSource = [...x];
      const newItemIndex = x.findIndex(item => item.id === id);
      const newItem = { ...x[newItemIndex], id: Date.now() };
      newDataSource.splice(newItemIndex + 1, 0, newItem);
      return newDataSource;
    });
  };

  const handleDelete = ({ id }: any) => {
    setDataSource(x => {
      return x.filter(item => item.id !== id);
    });
  };

  const handleAdd = () => {
    setDataSource(x => {
      return [
        ...x,
        {
          id: Date.now(),
          icon: 'github',
          title: `new-item-${Date.now()}`,
          description: `new-item-${Date.now()}-desc`,
          status: 'Running',
        },
      ];
    });
  };

  return (
    <List>
      {dataSource.map(item => (
        <ListItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
          status={item.status}
          operations={
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="sm" color="warning" onClick={() => handleDuplicate(item)}>
                复制
              </Button>
              <Button size="sm" color="error" onClick={() => handleDelete(item)}>
                删除
              </Button>
            </div>
          }
        />
      ))}
      <ListAdd title={t('ADD_DATA_TCAP')} description={t('ADD_DATA_DESC')} onClick={handleAdd} />
    </List>
  );
}
