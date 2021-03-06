// @flow
import React from 'react';
import Mask from './components/Mask';
import Fade from 'components/Fade';
import Flex from 'shared/components/Flex';

export default function LoadingPlaceholder(props: Object) {
  return (
    <Fade>
      <Flex column auto {...props}>
        <Mask header />
        <Mask />
        <Mask />
        <Mask />
      </Flex>
    </Fade>
  );
}
