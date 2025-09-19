import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;

  th,
  td {
    border: 1px solid #dfe2e5;
    padding: 10px 16px;
    text-align: left;
  }

  th {
    background-color: #f6f8fa;
    font-weight: 600;
  }
`;
