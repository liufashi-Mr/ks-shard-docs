import React from 'react';
import { StyledTable } from './styles';

type TableProps = React.ComponentProps<typeof StyledTable>;

const Table: React.FC<TableProps> = (props) => <StyledTable {...props} />;

export default Table;
