import React, { useState, useCallback } from 'react';
import { InfiniteScroll } from '@ks-console/shared';

export default function WithEmpty() {
  const [items, setItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (items.length === 0) {
        const newItems = Array.from({ length: 10 }, (_, i) => `Service ${i + 1}`);
        setItems(newItems);
      } else {
        const newItems = Array.from({ length: 5 }, (_, i) => `Service ${items.length + i + 1}`);
        setItems(prev => [...prev, ...newItems]);
      }
      setIsLoading(false);
    }, 1000);
  }, [items.length]);

  const emptyComponent = (
    <div style={{ textAlign: 'center', padding: '32px' }}>
      <div>暂无数据</div>
      <button onClick={loadMore} style={{ marginTop: '8px' }}>
        加载数据
      </button>
    </div>
  );

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      <InfiniteScroll
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        isEmpty={items.length === 0}
        empty={emptyComponent}
        onLoadMore={loadMore}
      >
        {items.map((item, index) => (
          <div key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
            {item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
} 