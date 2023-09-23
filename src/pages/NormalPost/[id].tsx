// pages/post/[id].js
import BoardHeader from '@/components/Board/BoardHeader';
import CommentList from '@/components/CommentList/CommentList';
import BaseLayout from '@/components/Layout';
import ToggleSvgColor from '@/components/ToggleSvgColor/ToggleSvgColor';
import {API_BASE_URL} from '@/constants/constants';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import PostViewedIcon from 'public/svgs/postViewdIcon.svg';
import Image from 'next/image';
import {PostDetailedInfo} from '@/types/post';

const mainUrl = API_BASE_URL + 'board/list';

const tempData = {
  statusCode: 200,
  message: 'success',
  responseValue: {
    userInfo: 'psh',
    read_cnt: 0,
    user_like: 0,
    reg_date: '2023-07-02 20:29:49',
    body: '<p>이건 temp data입니다!</p><p><img src="https://mofmof-be.s3.ap-northeast-2.amazonaws.com/1c42b91f-0b23-498d-8c95-0223e9dbad0a-bread1.jpg"></p><p>사진1 이후</p><p><br></p><p><br></p><p>사진2 이전</p><p><img src="https://mofmof-be.s3.ap-northeast-2.amazonaws.com/e783fe33-bf6e-43b6-9e88-5e566758eb8a-logo.png"></p><p>사진2 이후</p><p><br></p><p>사진3 이전</p><p><img src="https://mofmof-be.s3.ap-northeast-2.amazonaws.com/b54a29c4-c938-4e30-899f-5dfa07148f77-Unsplash_KhachikSimonian%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB%202.jpg"></p><p>사진3 이후</p><p><br></p>',
  },
};

const TitleAndWriter = styled.div`
  display: flex;
  width: 358px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  border-bottom: 1px solid var(--gray-4, #e2e2e2);
`;
const Title = styled.h2`
  margin: unset;
  display: inline-block;
  color: #000;

  /* Subtitle/Subtitle 1, 22 */
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

const AboutWriterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 6px;
  position: relative;
  margin-bottom: 16px;
`;
const WriterProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: pink;
  flex-shrink: 0;
`;
const WriterNicknameAndDateWrapper = styled.div`
  display: flex;
  height: 41px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const WriterNickname = styled.div`
  color: var(--gray-7, #444);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
`;
const PostDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  > span {
    display: inline-block;
    height: 18px;
    color: var(--gray-6, #808080);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;
const FollowBtn = styled.button`
  border: unset;
  margin: unset;
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  position: absolute;
  right: 0px;
  top: 7px;
  border-radius: 6px;
  background: #ffb996;

  height: 26px;
  > span {
    color: var(--primary, #f50);
    display: inline-block;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const FollowBtnSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7.00008 2.9165V11.0832M2.91675 6.99984H11.0834"
        stroke="#FF5500"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 게시글 내용 모양 편집은 여기서 해야함
const PostDisplayWrapper = styled.div`
  overflow: hidden;
  display: flex;
  width: 358px;
  padding: 20px 0px;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--gray-3, #f0f0f0);

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const PostViewedAndBookMarkWrapper = styled.div`
  display: flex;
  width: 358px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
const PostViewedWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 20px;
`;
const BookMarkBtn = styled.button`
  //버튼 기본스타일 제거
  border: 0;
  background-color: transparent;
  padding: unset;

  height: 30px;
`;

function Post() {
  const router = useRouter();
  const {id} = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [displayData, setDisplayData] = useState<PostDetailedInfo>(
    tempData.responseValue,
  );
  const [postId, setPostId] = useState<string | null>(null);

  const bookmarkSvgString = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.5 5h9c.796 0 1.559.263 2.121.732.563.47.879 1.105.879 1.768V25L15 20.25 7.5 25V7.5c0-.663.316-1.299.879-1.768C8.94 5.263 9.704 5 10.5 5z"
      ></path>
    </svg>`;

  // 원하는 데이터를 로드하고 UI를 렌더링하세요
  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (id) {
        const response = await fetch(`${mainUrl}/detail?brdNo=${id}`, {
          method: 'GET',
        });

        if (response.ok) {
          console.log('포스트 불러오기 성공!');
          response.json().then((data) => {
            console.log('포스트 내용', data.responseValue);
            setDisplayData(data.responseValue);
            setIsLoading(false);
          });
        } else {
          console.error('포스트 불러오기 실패');
        }
      }
    } catch (error) {
      console.error('포스트 불러오기 에러:', error);
    }
  };

  useEffect(() => {
    if (typeof id === 'string') {
      console.log('stringid', id);
      setPostId(id);
      fetchData();
    } else {
      console.log(id);
    }
  }, [id]);

  return (
    <BaseLayout isNavShown={true}>
      {isLoading ? (
        <div>로딩 중...</div> // 이곳에 원하는 로딩 표시(ex: 스피너 아이콘 등)
      ) : (
        <div style={{margin: '0 auto', width: '390px'}}>
          <BoardHeader title="펫테일 게코" />
          <div style={{margin: '0 16px'}}>
            <BackToBoardButton>
              <span>자유게시판</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.00032 12.6663L10.667 7.99967L6.00033 3.33301"
                  stroke="#FF5500"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BackToBoardButton>
            <TitleAndWriter>
              <Title>얌전했던 아이 막 뛰어다녀요 ㅠㅠ</Title>
              <AboutWriterWrapper>
                <WriterProfile></WriterProfile>
                <WriterNicknameAndDateWrapper>
                  <WriterNickname>크림이 아빠</WriterNickname>
                  <PostDate>
                    <span>{displayData.reg_date}</span>
                    <span>23:50</span>
                  </PostDate>
                </WriterNicknameAndDateWrapper>
                <FollowBtn>
                  <FollowBtnSvg></FollowBtnSvg>
                  <span>팔로우</span>
                </FollowBtn>
              </AboutWriterWrapper>
            </TitleAndWriter>
            <PostDisplayWrapper
              dangerouslySetInnerHTML={{
                __html: displayData ? displayData.body : '',
              }}
            ></PostDisplayWrapper>
            <PostViewedAndBookMarkWrapper>
              <PostViewedWrapper>
                <Image src={PostViewedIcon} alt="조회수 아이콘"></Image>
                <span>302</span>
                <span>명이 봤어요</span>
              </PostViewedWrapper>
              <BookMarkBtn>
                <ToggleSvgColor
                  svg={bookmarkSvgString}
                  color="orange"
                ></ToggleSvgColor>
              </BookMarkBtn>
            </PostViewedAndBookMarkWrapper>
            <CommentList brdNo={Number.parseInt(id)}></CommentList>
          </div>
        </div>
      )}
    </BaseLayout>
  );
}

export default Post;

const BackToBoardButton = styled.button`
  //버튼 기본스타일 제거
  border: 0;
  background-color: transparent;
  padding: unset;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  > span {
    color: var(--primary, #f50);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;
