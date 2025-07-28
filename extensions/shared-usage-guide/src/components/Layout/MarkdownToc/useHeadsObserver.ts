import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
interface IHeading {
  id: string;
  text: string;
  level: number;
}

export const useHeadsObserver = () => {
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState<IHeading[]>([]);
  const location = useLocation();
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -70% 0%' },
    );

    const headingElements = document.querySelectorAll('h2, h3, h4');

    setHeadings(
      Array.from(headingElements)
        .map(elem => {
          if (!(elem instanceof HTMLElement)) return null;
          const innerText = (elem as HTMLElement).innerText;
          const text = innerText.substring(0, innerText.length - 2);
          return {
            id: elem.id,
            text,
            level: Number(elem.nodeName.charAt(1)),
          };
        })
        .filter((h): h is IHeading => !!h),
    );

    headingElements.forEach(element => observer.observe(element));

    return () => {
      headingElements.forEach(element => observer.unobserve(element));
    };
  }, [location.pathname]);

  return { activeId, headings };
};
