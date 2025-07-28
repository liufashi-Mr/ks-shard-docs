import styled from 'styled-components';

// TOC 容器样式
export const TocContainer = styled.div`
  position: sticky;
  top: 12px;
  max-height: 100%;
  overflow-y: auto;
  width: 180px;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;

  &::-webkit-scrollbar {
    width: 2px;
  }

  scrollbar-width: none;
`;

// TOC 标题样式
export const TocTitle = styled.div`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 6px;
  font-weight: 600;
`;

// TOC 列表样式
export const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// TOC 项目样式
export const TocItem = styled.li<{ level: number; isActive: boolean }>`
  margin: 6px 0;
  transition: all 0.2s ease;
  border-left: 2px solid ${props => (props.isActive ? '#55bc8a' : 'transparent')};
  > a {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  font-size: ${props => {
    switch (props.level) {
      case 2:
        return '14px';
      case 3:
        return '13px';
      case 4:
        return '12px';
      default:
        return '13px';
    }
  }};

  padding-left: ${props => {
    switch (props.level) {
      case 2:
        return '10px';
      case 3:
        return '20px';
      case 4:
        return '30px';
      default:
        return '10px';
    }
  }};

  a {
    color: ${props => (props.isActive ? '#55bc8a' : '#555')};
    text-decoration: none;
    display: block;
    font-weight: ${props => (props.isActive ? '500' : '400')};
    transition: color 0.2s ease;

    &:hover {
      color: #55bc8a;
    }
  }
`;
