import React, {ReactElement, useEffect, useRef, useState} from 'react';
import Grid from './Grid';
import styled from 'styled-components';
import {PostListResponse} from '@/types/post';
import PostInfoCard from '../PostPreview/PostPreviewCard';

interface GridAndInfiniteScrollProps {
  cards: ReactElement[];
  perPage: number;
  mainUrl: string;
}

function GridAndInfiniteScroll({
  cards,
  perPage: itemsPerPage,
  mainUrl,
}: GridAndInfiniteScrollProps) {
  const [allItems, setAllItems] = useState<ReactElement[]>(cards);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const lastCardRef = useRef<HTMLDivElement>(null);

  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    //관찰자가 어떠한 target의 관찰을 시작하거나, 혹은 관찰하는 target의 교차 상태가 변했을 때 호출 될 콜백 함수
    //entries는 교차 상태가 변화한 target들의 배열
    //observer는 이 콜백 함수를 호출한 IntersectionObserver를 의미
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isLoading && !isLastPage) {
        setLoading(true);
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    //threshold는 관찰자가 root와 target 간의 교차가 이루어졌다고 판단하는 기준으로써, 만약 0.3으로 설정해준다면 target요소가 root에서 30%만큼 보였을 때 교차가 이루어졌다고 판단한다. 기본값은 0
    const observerObtion = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerObtion);

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      if (lastCardRef.current) {
        observer.unobserve(lastCardRef.current);
      }
    };
  }, [isLoading, isLastPage]);

  useEffect(() => {
    if (isLoading) {
      getPostListFromServer().then((data: PostListResponse) => {
        if (data) {
          console.log('data', data);

          if (data.responseValue.length != 0) {
            console.log('data.responseValue', data.responseValue);
            const newPostsList = data.responseValue;
            const newPostItems = newPostsList.map((post) => (
              <PostInfoCard key={post.id} {...post} />
            ));
            setIsLastPage(data.responseValue.length < itemsPerPage);
            setLoading(false);
            setAllItems((prevItems) => [...prevItems, ...newPostItems]);
          } else {
            setIsLastPage(true);
            setLoading(false);

            setAllItems((prevItems) => [...prevItems, ...cards]);
          }
        }
      });
    }
  }, [isLoading]);

  async function getPostListFromServer() {
    console.log(
      'getPostListFromServer결과: ' +
        mainUrl +
        `list?page=${currentPage}&perPage=${itemsPerPage}`,
    );

    try {
      const response = await fetch(
        mainUrl + `list?page=${currentPage}&perPage=${itemsPerPage}`,
        {
          method: 'GET',
        },
      );

      if (response.ok) {
        console.log('getPostListFromServer success!');
        return response.json();
      } else {
        console.error('Failed to getPostListFromServer');
        return {responseValue: []}; // 추가된 부분
      }
    } catch (error) {
      console.error('Error:', error);
      return {responseValue: []}; // 추가된 부분
    }
  }

  return (
    <GridAndInfiniteScrollWrapper>
      <Grid cards={allItems} />
      <div ref={lastCardRef} />
      {isLoading && <div>Loading...</div>}
    </GridAndInfiniteScrollWrapper>
  );
}

export default GridAndInfiniteScroll;

const GridAndInfiniteScrollWrapper = styled.div``;
