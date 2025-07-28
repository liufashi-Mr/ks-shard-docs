import React, { useState } from 'react';
import { Lightbox, Image } from '@ks-console/shared';

export default function WithImage() {
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
      src: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-14381094914124-7198515b166b.webp',
      alt: '图片3',
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {slides.map((item, index) => (
        <Image
          key={index}
          iconSize={64}
          src={item.src}
          iconLetter={item.alt}
          onClick={() => {
            setOpen(true);
            setIndex(index);
          }}
        />
      ))}

      <Lightbox
        open={open}
        index={index}
        slides={slides}
        close={() => setOpen(false)}
        carousel={{ finite: true }}
      />
    </div>
  );
}
