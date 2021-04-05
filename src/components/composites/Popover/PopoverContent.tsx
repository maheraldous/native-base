import { useThemeProps } from '../../../hooks';
import React from 'react';
import Box from '../../primitives/Box';
import type { IPopoverContentProps } from './types';
import { Popover } from 'react-native-popper';
import { useToken } from '../../../hooks';

export const PopoverContent = React.forwardRef(
  (props: IPopoverContentProps, ref: any) => {
    let defaultStyle = useThemeProps('Popover', props);
    defaultStyle = props.isUnstyled ? {} : defaultStyle.popoverContentProps;
    const color = useToken('colors', defaultStyle.backgroundColor);

    return (
      <Popover.Content>
        <Popover.Arrow height={10} width={16} color={color} />
        <Box {...defaultStyle} {...props} ref={ref} />
      </Popover.Content>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
