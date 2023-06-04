import * as React from 'react';

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicProps<
  T extends React.ElementType,
  Props = Record<string, unknown>,
> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };
