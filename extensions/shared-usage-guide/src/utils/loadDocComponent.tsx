import React from 'react';
const docsContext = require.context('../docs', true, /\.mdx$/);

export function loadDocComponent(_path?: string) {
  const path = `./${_path}/index.mdx`;
  if (!docsContext.keys().includes(path) || !_path) {
    return () => <div>todo</div>;
  }
  return docsContext(path).default;
}
