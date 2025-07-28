import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const MdxContainer = styled.div`
  flex: 1;
  padding: 20px;
  height: calc(100% - 24px);
  overflow-y: auto;
  scroll-behavior: smooth;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
  margin: 12px;
  margin-right: 0;
  border-radius: 6px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  scrollbar-width: none;

  :target::before {
    content: '';
    display: block;
    height: 80px;
    margin-top: -80px;
  }

  h1 {
    font-size: 28px;
    margin-top: 24px;
    margin-bottom: 13px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eaecef;
  }

  h2 {
    font-size: 24px;
    margin-top: 21px;
    margin-bottom: 11px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f0f0f0;
  }

  h3 {
    font-size: 20px;
    margin-top: 18px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    line-height: 1.7;
    margin-bottom: 16px;
  }

  a {
    color: #55bc8a;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul,
  ol {
    margin-bottom: 16px;
    padding-left: 32px;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.6;
  }

  blockquote {
    border-left: 4px solid #dfe2e5;
    padding: 0 16px;
    color: #6a737d;
    margin: 24px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
  }

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

export default MdxContainer;

export const GlobalStyle = createGlobalStyle`
  .__heading-anchor {
    opacity: 0;
    margin-left: 12px;
    text-decoration: none;
    color: #aaa;
    transition: opacity 0.2s;
    cursor: pointer;
  }
  h1:hover .__heading-anchor,
  h2:hover .__heading-anchor,
  h3:hover .__heading-anchor,
  h4:hover .__heading-anchor,
  h5:hover .__heading-anchor,
  h6:hover .__heading-anchor {
    opacity: 1;
  }
  
  code[class*="language-"],
  pre[class*="language-"] {
    color: #24292f;
    background: none;
    font-family: 'Fira Mono', 'Consolas', 'Menlo', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 14px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  pre[class*="language-"] {
    padding: 16px;
    margin: 8px 0;
    overflow: auto;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #f0f0f0;
  }

  :not(pre) > code[class*="language-"] {
    padding: 4px 6px;
    border-radius: 8px;
    color: #c92c2c;
    background: #fff;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a737d;
    font-style: italic;
  }

  .token.punctuation {
    color: #24292f;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #b31d28;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #22863a;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #e36209;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #005cc5;
  }

  .token.function,
  .token.class-name {
    color: #6f42c1;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #d73a49;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  } 
` as React.ComponentType;
