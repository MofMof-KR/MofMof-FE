import {PolymorphicProps, PolymorphicRef} from '@/types/polymorphic';
import React, {ReactNode, useId} from 'react';
import styled from 'styled-components';
import {A11yHidden} from '../A11yHidden';

type InputProps<T extends React.ElementType = 'input'> = PolymorphicProps<
  T,
  {
    className?: string;
    id?: string;
    type?: string;
  }
>;

type InputComponent = <C extends React.ElementType = 'input'>(
  Props: InputProps<C>,
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
export const Input: InputComponent = React.forwardRef(
  <T extends React.ElementType = 'input'>(
    {className = '', as, id, type = 'text', ...restProps}: InputProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Element = as || 'input';
    return (
      <Element
        className={className}
        id={id}
        type={type}
        ref={ref}
        {...restProps}
      />
    );
  },
);

interface ISearchInput extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  onChange: any;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
}

export const SearchInput: React.FC<ISearchInput> = ({
  type,
  value,
  onChange,
  leftSide,
  rightSide,
  ...restProps
}) => {
  const searchId = useId();
  return (
    <StyledSearchInput>
      {leftSide}
      <A11yHidden as="label" htmlFor={searchId}>
        search
      </A11yHidden>
      <StyledInput
        type={type}
        id={searchId}
        value={value}
        onChange={onChange}
        {...restProps}
      />
      {rightSide}
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 62.4375rem;
  background: var(--gray-3);
  margin-bottom: 1.12rem;
`;

const StyledInput = styled(Input)`
  height: 100%;
  background: transparent;
  flex: 1 1 auto;
  border: 0;
  &:placeholder {
    color: var(--gray-6);
  }
  font-size: 1rem;
`;
