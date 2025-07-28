import React, { useState, Children, isValidElement, cloneElement } from 'react';
import { Divider } from '@kubed/components';
import { CodeSimpleDuotone, CodeDuotone } from '@kubed/icons';
import { DemoBlockContainer, DemoBlockTitle, CenterTextWrap } from './style';

interface DemoBlockProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const DemoBlock: React.FC<DemoBlockProps> = ({ children, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(e => !e);

  const demoComponent = Children.toArray(children).find(
    child => isValidElement(child) && child.type !== 'pre',
  );
  const codeBlock = Children.toArray(children).find(
    child => isValidElement(child) && child.type === 'pre',
  );

  return (
    <DemoBlockContainer>
      <div>{demoComponent}</div>
      {title && (
        <Divider
          variant="dotted"
          label={<DemoBlockTitle>{title}</DemoBlockTitle>}
          style={{ width: '100%', margin: '16px 0' }}
        />
      )}
      {description && <div>{description}</div>}
      <CenterTextWrap>
        <span onClick={handleExpand}>{expanded ? <CodeSimpleDuotone /> : <CodeDuotone />}</span>
      </CenterTextWrap>
      {expanded && <div>{codeBlock}</div>}
    </DemoBlockContainer>
  );
};

export default DemoBlock;
