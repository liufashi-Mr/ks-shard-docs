import styled from 'styled-components';

export const DemoBlockContainer = styled.div`
  padding: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  margin-bottom: 24px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const DemoBlockTitle = styled.div`
  color: #000;
  font-weight: 500;
  font-size: 16px;
`;

export const CenterTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    cursor: pointer;
  }
`;
