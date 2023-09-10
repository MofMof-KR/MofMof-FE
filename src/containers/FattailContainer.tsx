import {SearchForm} from '@/components/MainHome';
import React, {useState} from 'react';
import {
  MofPedia,
  FreeBoard,
  MofCaculator,
  QnA,
  PhotoRoom,
  FattailGuide,
  Tabs,
} from '@/components/Fattail';

const tabItems = [
  {id: 0, name: '홈'},
  {id: 1, name: '모프피디아'},
  {id: 2, name: '모프계산기'},
  {id: 3, name: '가이드'},
  {id: 4, name: '자유게시판'},
];

const mofPediaObjs = [
  {id: 0, name: 'normal', ko: '노말', width: 154, height: 115},
  {id: 1, name: 'normal', ko: '노말', width: 154, height: 115},
];

const photoRoomObjs = [
  {id: 0, title: '주저리1주저리1주저리', writer: 'person1', mof: 'mof1'},
  {id: 1, title: '주저리2주저리2주저리', writer: 'person2', mof: 'mof2'},
  {id: 2, title: '주저리3주저리3주저리', writer: 'person3', mof: 'mof3'},
];

const FattailContainer = () => {
  const [search, setSearch] = useState('');
  const clearSearch = () => {
    setSearch('');
  };
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const [pickedTabIndex, setPickedTabIndex] = useState(0);
  return (
    <>
      <Tabs tabItems={tabItems} pickedTabIndex={pickedTabIndex} />
      <SearchForm
        search={search}
        onSearchChange={onSearchChange}
        clearSearch={clearSearch}
      />
      <MofPedia
        headerText={'모프피디아'}
        additionalText={'다양한 펫테일 모프 종류'}
        link={'/fattail'}
        mofPediaObjs={mofPediaObjs}
      />
      <MofCaculator
        headerText={'모프계산기'}
        additionalText={'한국어 모프계산기로 편하게'}
        link={'/fattail'}
      />
      <FattailGuide
        headerText={'펫테일 가이드'}
        additionalText={'펫테일 집사가 알아야할 모든 것'}
        link={'/fattail'}
      />
      <FreeBoard
        headerText={'자유게시판'}
        additionalText={'펫테일에 관한 자유로운 글을 올려보세요!'}
        link={'/fattail'}
      />
      <PhotoRoom
        headerText={'사진방'}
        additionalText={'우리 아이 사진 여기서 자랑해요'}
        link={'/fattail'}
        photoRoomObjs={photoRoomObjs}
      />
      <QnA
        headerText={'Q&A'}
        additionalText={'펫테일에 관한 모든 궁금증은 여기서'}
        link={'/fattail'}
      />
    </>
  );
};

export default FattailContainer;
