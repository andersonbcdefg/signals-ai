/**
 * The Journal section is the journal reading/writing flow for the app.
 */

import React, { useState } from 'react';
import { Text, Flex } from 'rebass';
import AnimatedBox from '../core/AnimatedBox';
import { useSpring } from 'react-spring';
import styled from 'styled-components';
import TextField from '../components/TextField';

const StyledBox = styled(AnimatedBox)`
  background: #ffffff;
  /* border: 0.25px solid #aaa; */
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s;
`;

const Journal = ({ active }) => {
  const springProps = useSpring({
    width: active ? '100%' : '50%',
    height: active ? '100%' : '70%',
    from: { width: '50%', height: '50%' }
  });

  return (
    <StyledBox
      style={{
        maxWidth: springProps.width,
        flexGrow: 1,
        height: springProps.height,
        // border: active ? 'none' : '0.25px solid #aaa',
        boxShadow: active ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginLeft: active ? 0 : '-40px',
      }}
    >
      <TextField />
    </StyledBox>
  );
};

export default Journal;
