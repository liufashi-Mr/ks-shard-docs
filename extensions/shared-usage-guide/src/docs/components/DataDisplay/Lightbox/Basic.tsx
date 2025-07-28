import React, { useState } from 'react';
import { Lightbox } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      alt: '图片1',
    },
    {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
      alt: '图片2',
    },
    {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
      alt: '图片3',
    },
  ];

  return (
    <div>
      <Button onClick={() => setOpen(true)}>查看图片</Button>
      <Lightbox open={open} index={index} slides={slides} close={() => setOpen(false)} />
    </div>
  );
}
