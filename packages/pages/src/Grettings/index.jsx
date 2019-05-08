import React from 'react';
import styled from 'styled-components';
import { Grettings as LogicGrettings } from '@my-awesome-project/business';

const GrettingsFont = styled.span`
  color: palevioletred;
  font-weight: bold;
`;

const Grettings = () => (
  <GrettingsFont>{LogicGrettings('username')}</GrettingsFont>
);

export default Grettings;
