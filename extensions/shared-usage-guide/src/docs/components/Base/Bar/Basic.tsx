import React from 'react';
import { Bar } from '@ks-console/shared';
import styled from 'styled-components';

// ? Seems some bugs here?
const BarBox = styled(Bar)`
  width: 100%;
  height: 20px;
  border-radius: 99px;
`;

export default function Basic() {
  return (
    <div style={{ padding: 16 }}>
      <BarBox value={0.7} text="text" />
      <BarBox value={0.8} rightText="right text" />
      <BarBox value={1} text="text" rightText="right text" />
    </div>
  );
}
