import {PolymorphicProps, PolymorphicRef} from '@/types/polymorphic';
import {ElementType, forwardRef} from 'react';

type A11yHiddenProps<T extends ElementType = 'span'> = PolymorphicProps<
  T,
  {
    children?: React.ReactNode;
  }
>;

type A11yHiddenComponent = <C extends ElementType = 'span'>(
  Props: A11yHiddenProps<C>,
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
const A11yHidden: A11yHiddenComponent = forwardRef(
  <T extends React.ElementType = 'span'>(
    {as, children, ...restProps}: A11yHiddenProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Element = as || 'span';
    return (
      <Element
        ref={ref}
        style={{
          overflow: 'hidden',
          position: 'absolute',
          clip: 'rect(1px, 1px, 1px, 1px)',
          clipPath: 'circle(0)',
          width: '1px',
          height: '1px',
          margin: '-1px',
          border: '0',
          padding: '0',
          whiteSpace: 'nowrap',
        }}
        {...restProps}
      >
        {children}
      </Element>
    );
  },
);

export {A11yHidden};
