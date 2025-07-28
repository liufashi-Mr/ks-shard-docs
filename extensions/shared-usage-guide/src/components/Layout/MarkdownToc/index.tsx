import React, { useLayoutEffect } from 'react';
import { useHeadsObserver } from './useHeadsObserver';
import { TocContainer, TocTitle, TocList, TocItem } from './styles';
import { useLocation } from 'react-router-dom';

type Heading = {
  id: string;
  text: string;
  level: number;
};

const MarkdownToc: React.FC = () => {
  const { activeId, headings } = useHeadsObserver();
  const location = useLocation();


  useLayoutEffect(() => {
    const el = document.getElementById(decodeURI(location.hash.substring(1)));
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  if (headings.length === 0) return null;

  return (
    <TocContainer>
      <TocTitle>目录</TocTitle>
      <TocList>
        {headings.map(heading => (
          <TocItem key={heading.id} level={heading.level} isActive={activeId === heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </TocItem>
        ))}
      </TocList>
    </TocContainer>
  );
};

export default MarkdownToc;
