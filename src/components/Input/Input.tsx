import {PolymorphicProps, PolymorphicRef} from '@/types/polymorphic';
import React, {ChangeEvent, ReactNode, useId} from 'react';
import styled from 'styled-components';
import {A11yHidden} from '../A11yHidden';
import {Button} from '../Button';
import Image from 'next/image';

type InputProps<T extends React.ElementType = 'input'> = PolymorphicProps<
  T,
  {
    className?: string;
    id?: string;
    type?: string;
    placeholder?: string;
    onFocus?: () => void;
    onBlur?: () => void;
  }
>;

type InputComponent = <C extends React.ElementType = 'input'>(
  Props: InputProps<C>,
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
export const Input: InputComponent = React.forwardRef(
  <T extends React.ElementType = 'input'>(
    {
      className = '',
      as,
      id,
      type = 'text',
      placeholder,
      onFocus,
      onBlur,
      ...restProps
    }: InputProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Element = as || 'input';
    return (
      <Element
        className={className}
        id={id}
        type={type}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

interface ISearchInput extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
      <SearchButton>
        <Image
          src={`/images/home/iconamoon_search.svg`}
          width={25}
          height={25}
          alt={`search icon`}
        />
      </SearchButton>
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
  position: relative;
`;

const StyledInput = styled(Input)`
  height: 100%;
  background: transparent;
  border: 0;
  &:placeholder {
    color: var(--gray-6);
  }
  font-size: 1rem;
`;

const SearchButton = styled(Button)`
  position: absolute;
  right: 0.5rem;
  background: transparent;
  border: none;
`;
