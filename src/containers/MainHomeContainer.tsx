import React, {HTMLAttributes, useState} from 'react';
import {
  SearchForm,
  AllAboutMof,
  MofCommunity,
  RecentTopSearches,
  PopularArticles,
  FAQ,
} from '@/components/MainHome';

const mofObjs = [
  {name: 'fattail', ko: '펫테일', width: 70, height: 52},
  {name: 'crested', ko: '크레스티드', width: 103, height: 69},
  {name: 'leopard', ko: '레오파드', width: 89, height: 66},
  {name: 'gargoyle', ko: '가고일', width: 102, height: 76},
  {name: 'tokay', ko: '토케이', width: 101, height: 67},
  {name: 'leachianus', ko: '리키에너스', width: 89, height: 59},
  {name: 'knobtailed', ko: '납테일', width: 81, height: 53},
];

const popularityObjs = [
  {name: '크레스티드 게코'},
  {name: '화이트리스트'},
  {name: '분양'},
  {name: '온도'},
  {name: '귀뚜라미'},
  {name: '슈퍼푸드'},
  {name: '모프계산'},
  {name: '적재형 케이지'},
];

const questionObjs = {
  id: 0,
  title: '충식을 하지 않는 도마뱀은 어떤 종류가 있을까요?',
  content:
    '질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다. 질문에 대한 답변입니다.',
};

type IProps = HTMLAttributes<HTMLDivElement>;

export const MainHomeContainer: React.FC<IProps> = () => {
  const [search, setSearch] = useState('');
  const clearSearch = () => {
    setSearch('');
  };
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <SearchForm
        search={search}
        onSearchChange={onSearchChange}
        clearSearch={clearSearch}
      />
      <AllAboutMof />
      <MofCommunity mofObjs={mofObjs} />
      <RecentTopSearches popularityObjs={popularityObjs} />
      <PopularArticles />
      <FAQ questionObjs={questionObjs} />
    </>
  );
};
