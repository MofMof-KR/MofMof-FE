import Link from 'next/link';
import styled from 'styled-components';
import BaseLayout from '@/components/Layout';
import PostInfoCard from '@/components/PostPreview/PostPreviewCard';
import GridAndPagination from '@/components/GridAndPagination/GridAndPagination';
import GridAndInfiniteScroll from '@/components/GridAndPagination/GridAndInfiniteScroll';
import {useEffect, ReactElement, useState} from 'react';
import ListIndicator from './ListIndicator';
import {PostListResponse} from '@/types/post';
import BoardHeader from '@/components/Board/BoardHeader';
import {API_BASE_URL} from '@/constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {openPortal} from '@/store/slices/portal/portalSlice';
import Portal from '@/components/Portal';
import {RootState} from '@/store/rootReducer';
import {PortalChildren} from '@/constants/PortalChildren';
import EditorContainer from '@/containers/EditorContainer';
import {Editor} from '@/components/Editor';

const tempinfo: PostListResponse = {
  responseValue: [
    {
      id: 'psh',
      ctxt: '가나다라,<br>,0,<br>,abcd,<br>,1,<br>,kkkk',
      ttl: '이 제목은 temp info의 값입니다.',
      rnum: 61,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/7ac6da63-acd5-44ec-9705-83ce24003d47-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 74,
      read_cnt: 0,
      reg_date: '2023-07-11 13:08:10',
      mod_date: '2023-07-11 13:08:10',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '<br>,0,<br>,<br>,<br>,1',
      ttl: '제목',
      rnum: 60,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/04474f98-42d0-429c-9b35-ca7b315ecb35-image_0.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 73,
      read_cnt: 0,
      reg_date: '2023-07-02 21:36:23',
      mod_date: '2023-07-02 21:36:23',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '1234,<br>,0,<br>,1,<br>,ㅁㄴㅇㄹ,ㅁㄴㅇㄹ,<br>',
      ttl: '제목',
      rnum: 59,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/6baebcb2-bdfe-4ea8-a0dd-15ce2a5dc1e4-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 72,
      read_cnt: 0,
      reg_date: '2023-07-02 21:32:00',
      mod_date: '2023-07-02 21:32:00',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: 'kkkkkk',
      ttl: '제목',
      rnum: 58,
      img_url: 'default',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 71,
      read_cnt: 0,
      reg_date: '2023-07-02 20:31:38',
      mod_date: '2023-07-02 20:31:38',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '가나다라,<br>,0,<br>,abcd,<br>,1,<br>,kkkk',
      ttl: '제목',
      rnum: 61,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/7ac6da63-acd5-44ec-9705-83ce24003d47-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 74,
      read_cnt: 0,
      reg_date: '2023-07-03 13:08:10',
      mod_date: '2023-07-03 13:08:10',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '<br>,0,<br>,<br>,<br>,1',
      ttl: '제목',
      rnum: 60,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/04474f98-42d0-429c-9b35-ca7b315ecb35-image_0.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 73,
      read_cnt: 0,
      reg_date: '2023-07-02 21:36:23',
      mod_date: '2023-07-02 21:36:23',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '1234,<br>,0,<br>,1,<br>,ㅁㄴㅇㄹ,ㅁㄴㅇㄹ,<br>',
      ttl: '제목',
      rnum: 59,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/6baebcb2-bdfe-4ea8-a0dd-15ce2a5dc1e4-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 72,
      read_cnt: 0,
      reg_date: '2023-07-02 21:32:00',
      mod_date: '2023-07-02 21:32:00',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: 'kkkkkk',
      ttl: '제목',
      rnum: 58,
      img_url: 'default',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 71,
      read_cnt: 0,
      reg_date: '2023-07-02 20:31:38',
      mod_date: '2023-07-02 20:31:38',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '가나다라,<br>,0,<br>,abcd,<br>,1,<br>,kkkk',
      ttl: '제목',
      rnum: 61,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/7ac6da63-acd5-44ec-9705-83ce24003d47-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 74,
      read_cnt: 0,
      reg_date: '2023-07-03 13:08:10',
      mod_date: '2023-07-03 13:08:10',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '<br>,0,<br>,<br>,<br>,1',
      ttl: '제목',
      rnum: 60,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/04474f98-42d0-429c-9b35-ca7b315ecb35-image_0.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 73,
      read_cnt: 0,
      reg_date: '2023-07-02 21:36:23',
      mod_date: '2023-07-02 21:36:23',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '1234,<br>,0,<br>,1,<br>,ㅁㄴㅇㄹ,ㅁㄴㅇㄹ,<br>',
      ttl: '제목',
      rnum: 59,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/6baebcb2-bdfe-4ea8-a0dd-15ce2a5dc1e4-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 72,
      read_cnt: 0,
      reg_date: '2023-07-02 21:32:00',
      mod_date: '2023-07-02 21:32:00',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: 'kkkkkk',
      ttl: '제목',
      rnum: 58,
      img_url: 'default',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 71,
      read_cnt: 0,
      reg_date: '2023-07-02 20:31:38',
      mod_date: '2023-07-02 20:31:38',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '가나다라,<br>,0,<br>,abcd,<br>,1,<br>,kkkk',
      ttl: '제목',
      rnum: 61,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/7ac6da63-acd5-44ec-9705-83ce24003d47-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 74,
      read_cnt: 0,
      reg_date: '2023-07-03 13:08:10',
      mod_date: '2023-07-03 13:08:10',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '<br>,0,<br>,<br>,<br>,1',
      ttl: '제목',
      rnum: 60,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/04474f98-42d0-429c-9b35-ca7b315ecb35-image_0.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 73,
      read_cnt: 0,
      reg_date: '2023-07-02 21:36:23',
      mod_date: '2023-07-02 21:36:23',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: '1234,<br>,0,<br>,1,<br>,ㅁㄴㅇㄹ,ㅁㄴㅇㄹ,<br>',
      ttl: '제목',
      rnum: 59,
      img_url:
        'https://mofmof-be.s3.ap-northeast-2.amazonaws.com/6baebcb2-bdfe-4ea8-a0dd-15ce2a5dc1e4-image_1.jpeg',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 72,
      read_cnt: 0,
      reg_date: '2023-07-02 21:32:00',
      mod_date: '2023-07-02 21:32:00',
      user_like: 0,
    },
    {
      id: 'psh',
      ctxt: 'kkkkkk',
      ttl: '제목',
      rnum: 58,
      img_url: 'default',
      snsType: null,
      ctxtType: 'mof',
      brd_no: 71,
      read_cnt: 0,
      reg_date: '2023-07-02 20:31:38',
      mod_date: '2023-07-02 20:31:38',
      user_like: 0,
    },
  ],
  pageCount: 7,
  perPage: 10,
  page: 1,
  totalCount: 61,
};

const mainUrl = API_BASE_URL + 'board/';

export default function PostListFree() {
  const [isLoading, setIsLoading] = useState(true);
  const [postinfo, setPostInfo] = useState<PostListResponse>();
  let tempArr: ReactElement[] = [];
  const [retPostInfo, setRetPostInfo] = useState<ReactElement[]>([]);

  const getPostListFromServer = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(mainUrl + 'list?page=1&perPage=10', {
        method: 'GET',
      });

      response.json().then((data) => {
        if (data) {
          setPostInfo(data);
          console.log('getPostListFromServer response', data);
        } else {
          console.log('no data yet');
        }
      });

      if (response.ok) {
        console.log('getPostListFromServer success!');
      } else {
        console.error('Failed to getPostListFromServer');
      }
    } catch (error) {
      console.error('PostListFree Error:', error, postinfo);
    }
  };

  useEffect(() => {
    getPostListFromServer();
  }, []);

  useEffect(() => {
    updatePostInfo();
  }, [postinfo]);

  const updatePostInfo = () => {
    if (postinfo && postinfo.responseValue) {
      tempArr = [];
      for (let x = 0; x < postinfo.responseValue.length; x++) {
        const item = postinfo.responseValue[x];
        tempArr.push(
          <PostInfoCard
            styledType={0}
            id={item.id}
            ctxt={item.ctxt}
            ttl={item.ttl}
            rnum={item.rnum}
            img_url={item.img_url}
            snsType={item.snsType}
            ctxtType={item.ctxtType}
            brd_no={item.brd_no}
            read_cnt={item.read_cnt}
            reg_date={item.reg_date}
            mod_date={item.mod_date}
            user_like={item.user_like}
          ></PostInfoCard>,
        );
      }

      setRetPostInfo(tempArr);
      console.log('retPostInfo', retPostInfo);
      setIsLoading(false);
    } else {
      // tempArr = [];
      // for (let x = 0; x < tempinfo.responseValue.length; x++) {
      //   const item = tempinfo.responseValue[x];
      //   tempArr.push(
      //     <PostInfoCard
      //       styledType={0}
      //       id={item.id}
      //       ctxt={item.ctxt}
      //       ttl={item.ttl}
      //       rnum={item.rnum}
      //       img_url={item.img_url}
      //       snsType={item.snsType}
      //       ctxtType={item.ctxtType}
      //       brd_no={item.brd_no}
      //       read_cnt={item.read_cnt}
      //       reg_date={item.reg_date}
      //       mod_date={item.mod_date}
      //       user_like={item.user_like}
      //     ></PostInfoCard>,
      //   );
      // }
      // setRetPostInfo(tempArr);
    }
  };

  const dispatch = useDispatch();
  const [_, portalChild] = useSelector((state: RootState) => {
    return state.portal;
  });
  const openEditor = () => {
    dispatch(openPortal(PortalChildren.EDITOR));
  };
  return (
    <BaseLayout isNavShown={true}>
      {isLoading || !postinfo ? (
        <div>로딩 중...</div> // 이곳에 원하는 로딩 표시(ex: 스피너 아이콘 등)
      ) : (
        <div style={{margin: '0 auto', width: '390px'}}>
          <BoardHeader title="펫테일 게코"></BoardHeader>
          <ListIndicator></ListIndicator>
          <button onClick={openEditor}>QuillEditor</button>
          {/*<button onClick={openEditor}>editor</button>*/}
          {/* <GridAndPagination
        cards={retPostInfo}
        perPage={postinfo.perPage}
      ></GridAndPagination> */}
          <GridAndInfiniteScroll
            cards={retPostInfo}
            // 스크롤 한번에 몇개씩 보일 지
            perPage={10}
            mainUrl={mainUrl}
          ></GridAndInfiniteScroll>
        </div>
      )}
      {portalChild !== PortalChildren.NAV_MENU ? (
        <Portal>
          <Editor />
        </Portal>
      ) : null}
    </BaseLayout>
  );
}
