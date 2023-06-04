import React from 'react';
// import dynamic from 'next/dynamic';

// const MainHome = dynamic(() => import('../MainHome'));
import {GeckoMenuList} from './GeckoMenuList';
import {
  GeckoCategory,
  GeckoCategoryTitle,
  GeckoCategoryDescription,
  GeckoCategoryInfo,
  GeckoTag,
  Line,
} from './Style';

const Home = () => {
  return (
    <>
      <GeckoCategory>
        <GeckoCategoryInfo>
          <GeckoCategoryTitle>Lizards Page</GeckoCategoryTitle>
          <GeckoCategoryDescription>
            귀여운 도마뱀들을 만나보세요!
          </GeckoCategoryDescription>
          <GeckoTag>
            <p>#모프소개</p>
          </GeckoTag>
          <GeckoTag>
            <p>#모프계산기</p>
          </GeckoTag>
        </GeckoCategoryInfo>
        <GeckoMenuList />
      </GeckoCategory>
      <Line />
    </>
  );
};

export default Home;
