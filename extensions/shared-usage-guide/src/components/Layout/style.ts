import styled from 'styled-components';
import { ListPageSide } from '@ks-console/shared';
export const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  overflow-y: auto;
`;

export const StyledListPageSide = styled(ListPageSide)`
  width: 300px;
`;

export const SidebarArea = styled.div`
  padding: 12px;
  flex-shrink: 0;
`;
