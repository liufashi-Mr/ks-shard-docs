import React, { useState, useCallback } from 'react';
import { InfiniteScroll } from '@ks-console/shared';

export default function Basic() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, i) => `Item ${items.length + i + 1}`);
      setItems(prev => [...prev, ...newItems]);
      setIsLoading(false);
    }, 1000);
  }, [items.length]);

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      <InfiniteScroll
        hasNextPage={true}
        isLoading={isLoading}
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