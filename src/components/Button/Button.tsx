import {PolymorphicProps, PolymorphicRef} from '@/types/polymorphic';
import * as React from 'react';

type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicProps<
  T,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  Props: ButtonProps<C>,
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
export const Button: ButtonComponent = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    {as, className = '', children, ...restProps}: ButtonProps<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    const Element = as || 'button';
    return (
      <Element className={className} ref={ref} {...restProps}>
        {children}
      </Element>
    );
  },
);
