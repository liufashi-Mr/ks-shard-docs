import React, { useState, useCallback } from 'react';
import { InfiniteScroll } from '@ks-console/shared';

export default function WithLoading() {
  const [items, setItems] = useState(Array.from({ length: 15 }, (_, i) => `Pod ${i + 1}`));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 5 }, (_, i) => `Pod ${items.length + i + 1}`);
      setItems(prev => [...prev, ...newItems]);
      setIsLoading(false);
    }, 1500);
  }, [items.length]);

  const loadingComponent = (
    <div style={{ textAlign: 'center', padding: '16px' }}>
      <div>加载中...</div>
    </div>
  );

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      <InfiniteScroll
        hasNextPage={true}
        isLoading={isLoading}
        loading={loadingComponent}
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