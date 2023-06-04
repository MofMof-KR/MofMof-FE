import {PolymorphicProps, PolymorphicRef} from '@/types/polymorphic';
import * as React from 'react';

type InputProps<T extends React.ElementType = 'input'> = PolymorphicProps<
  T,
  {
    id?: string;
    type?: string;
    onClick?: () => void;
  }
>;

type InputComponent = <C extends React.ElementType = 'input'>(
  Props: InputProps<C>,
) => React.ReactElement | null;
// eslint-disable-next-line react/display-name
const Input: InputComponent = React.forwardRef(
  <T extends React.ElementType = 'input'>(
    {as, id, type = 'text', ...props}: InputProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Element = as || 'input';
    return <Element id={id} type={type} ref={ref} {...props} />;
  },
);

export {Input};
