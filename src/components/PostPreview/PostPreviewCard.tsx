import {media} from '@/styles/theme';
import {PostInfo} from '@/types/post';
import {timeAgo} from '@/utils/aboutTimes/dateToString';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const PostInfoCardContainer = styled.div`
  ${media('md')} {
    /* gap: ${(props) => props.theme.spacing.md}; */
  }
  ${media('sm')} {
    /* gap: ${(props) => props.theme.spacing.xl}; */
  }
  ${media('xs')} {
    /* gap: ${(props) => props.theme.spacing.sm}; */
  }
  display: flex;
  width: 390px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--Gray-2, #f7f7f7);
  background: var(--white, #fff);
`;

const TextContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 240px;
  height: 65px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  width: 310px;
  height: 43px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

const NewPostRedDot = styled.div`
  width: 4px;
  height: 4px;
  position: absolute;
  left: 2px;
  top: 10px;
  border-radius: 2px;
  background: var(--primary, #f50);
`;

const Title = styled.h3`
  margin: 0 auto 0 10px;
  display: flex;
  width: 300px;
  height: 43px;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

const SmallTextWrapper = styled.div`
  display: flex;
  width: 310px;
  padding-left: 12px;
  align-items: center;
  gap: 6px;
  color: gray;
  overflow: hidden;
  > span {
    color: var(--gray-6, #808080);

    /* Label/Label 1, 12 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 107px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const PostImage = styled.img`
  width: 65px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 6.5px;
  /* background: url(<path-to-image>), lightgray 50% / cover no-repeat, #fff; */

  // 디폴트 이미지로 어떤걸 띄울지 확인할 것
  background: rgba(0, 0, 0, 0.2);
`;

const CommentCountDisplayWrapper = styled.div`
  display: flex;
  width: 34px;
  height: 65px;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: var(--gray-3, #f0f0f0);
`;

const CommentCountDisplay = styled.div`
  display: flex;
  width: 21px;
  height: 38px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  > span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > .readCnt {
    height: 20px;
    color: var(--gray-7, #444);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
  }

  > .readCntDetail {
    /* width: 21px; */
    height: 18px;
    color: var(--gray-6, #808080);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
`;

const PostInfoCard: React.FC<PostInfo> = ({
  styledType = 0,
  nickname = '익명',
  id = 'psh',
  ctxt = '가나다라,<br>,0,<br>,abcd,<br>,1,<br>,kkkk',
  ttl = '제목',
  rnum = 61,
  img_url = '',
  snsType = null,
  ctxtType = 'mof',
  brd_no = 69,
  read_cnt = 0,
  reg_date = '2023-07-03 13:08:10',
  mod_date = '2023-07-03 13:08:10',
  user_like = 0,
}) => {
  // useEffect(() => {
  //   console.log('img_url', img_url);
  //   console.log('brd_no', brd_no);
  // }, [img_url]);

  // styledType 0은 postList 페이지
  // styledType 1은 각 도마뱀 페이지의 자유게시판 미리보기
  // styledType 0은 postList 페이지
  return styledType == 0 ? (
    <Link href={`/NormalPost/${brd_no}`}>
      <PostInfoCardContainer>
        <TextContainer>
          <TitleWrapper>
            <NewPostRedDot></NewPostRedDot>
            <Title>{ttl}</Title>
          </TitleWrapper>
          <SmallTextWrapper>
            <span>{nickname}</span>
            <span>{timeAgo(reg_date)}</span>
            <span>조회수</span>
          </SmallTextWrapper>
        </TextContainer>
        <ContentWrapper>
          <PostImage src={img_url} alt={'게시물 사진'} />
          {/* <CommentCountDisplayWrapper>
          <CommentCountDisplay>
            <span className="readCnt">{read_cnt}</span>
            <span className="readCntDetail">댓글</span>
          </CommentCountDisplay>
        </CommentCountDisplayWrapper> */}
        </ContentWrapper>
      </PostInfoCardContainer>
    </Link>
  ) : (
    <PostInfoCardContainer2>
      <ThumbtailWrapper2>
        <Image src={img_url} alt={'게시물 사진'} />
      </ThumbtailWrapper2>
    </PostInfoCardContainer2>
  );
};

export default PostInfoCard;

const PostInfoCardContainer2 = styled.div`
  ${media('md')} {
    /* gap: ${(props) => props.theme.spacing.md}; */
  }
  ${media('sm')} {
    /* gap: ${(props) => props.theme.spacing.xl}; */
  }
  ${media('xs')} {
    /* gap: ${(props) => props.theme.spacing.sm}; */
  }
  display: flex;
  width: 358px;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--Gray-2, #f7f7f7);
  background: var(--White, #fff);
`;

const ThumbtailWrapper2 = styled.div``;
