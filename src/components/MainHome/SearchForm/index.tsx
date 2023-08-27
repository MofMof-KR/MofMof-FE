import {A11yHidden} from '@/components/A11yHidden';
import Slider from '@/components/Slider';
import React, {ChangeEvent, HTMLAttributes} from 'react';
import Image from 'next/image';
import * as S from './SearchForm.style';
import {SearchInput} from '@/components/Input';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  search: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
}

export const SearchForm: React.FC<IProps> = ({
  search,
  onSearchChange,
  clearSearch,
}) => {
  return (
    <S.Section>
      <A11yHidden as="h2">search</A11yHidden>
      <SearchInput
        rightSide={
          <S.StyledButton onClick={clearSearch}>
            <Image
              src={'/images/home/iconamoon_search.svg'}
              width={25}
              height={25}
              alt={'search icon'}
            />
          </S.StyledButton>
        }
        type="text"
        placeholder="검색어를 입력해주세요."
        value={search}
        onChange={onSearchChange}
      />
      <Slider />
    </S.Section>
  );
};
