import styled from 'styled-components';
import CommentListDisplay from './CommentListDisplay';
import {API_BASE_URL} from '@/constants/constants';
import {useEffect, useState} from 'react';
import {CommentInfo, CommentListResponse} from '@/types/post';
import CommentInput from './CommentInput';

type CommentListProps = {
  brdNo: number;
};

const tempResData: CommentListResponse = {
  statusCode: 200,
  message: 'success',
  responseValue: [
    {
      regDate: '2023-07-26 23:59:34',
      cmt_no: 1,
      cmt_ctxt: 'A',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-26 23:59:34',
      prt_cmt_no: 0,
      brd_no: 53,
    },
    {
      regDate: '2023-07-27 00:00:08',
      cmt_no: 4,
      cmt_ctxt: 'A-1',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-27 00:00:08',
      prt_cmt_no: 1,
      brd_no: 53,
    },
    {
      regDate: '2023-07-27 00:00:12',
      cmt_no: 5,
      cmt_ctxt: 'A-2',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-27 00:00:12',
      prt_cmt_no: 1,
      brd_no: 53,
    },
    {
      regDate: '2023-07-30 21:19:27',
      cmt_no: 8,
      cmt_ctxt: 'A-3',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-30 21:19:27',
      prt_cmt_no: 1,
      brd_no: 53,
    },
    {
      regDate: '2023-07-30 21:39:35',
      cmt_no: 9,
      cmt_ctxt: 'A-3',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-30 21:39:35',
      prt_cmt_no: 1,
      brd_no: 53,
    },
    {
      regDate: '2023-07-26 23:59:39',
      cmt_no: 2,
      cmt_ctxt: 'B',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-26 23:59:39',
      prt_cmt_no: 0,
      brd_no: 53,
    },
    {
      regDate: '2023-07-26 23:59:42',
      cmt_no: 3,
      cmt_ctxt: 'C',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-30 19:38:00',
      prt_cmt_no: 0,
      brd_no: 53,
    },
    {
      regDate: '2023-07-27 00:00:23',
      cmt_no: 6,
      cmt_ctxt: 'C-1',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-27 22:19:19',
      prt_cmt_no: 3,
      brd_no: 53,
    },
    {
      regDate: '2023-07-27 21:51:47',
      cmt_no: 7,
      cmt_ctxt: 'C-2',
      use_yn: 'Y',
      nickname: 'random',
      modDate: '2023-07-27 21:51:47',
      prt_cmt_no: 0,
      brd_no: 53,
    },
  ],
};

const CommentListWrapper = styled.div`
  display: flex;
  padding: 20px 0 12px 0;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--gray-3, #f0f0f0);
  background: var(--white, #fff);
`;

const CommentListNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 358px;
  height: 24px;
`;

const CommentInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 24px;
`;

const CommentInfo = styled.p`
  & .reply {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }

  & .replyCount {
    color: var(--primary, #f50);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;
function MoreCommentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="#1A1A1A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M6 12.665L10.666 8 6 3.332"
      ></path>
    </svg>
  );
}

const InterestCommentToggleWrapper = styled.div`
  width: 149px;
  height: 24px;
`;

const CommentListContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

const CommentListInputWrapper = styled.div``;

const mainUrl = API_BASE_URL + 'cmt/cmtlist?brdNo=';

function CommentList({brdNo}: CommentListProps) {
  const tempList = tempResData.responseValue;
  const [commentList, setCommentList] = useState<CommentInfo[]>(tempList);
  const [replyCount, setReplyCount] = useState<number>(0);

  const getCommentListFromServer = async (brdNo: number) => {
    try {
      const response = await fetch(mainUrl + brdNo.toString(), {
        method: 'GET',
      });

      if (response.ok) {
        setCommentList([]);
        response.json().then((data: CommentListResponse) => {
          if (data) {
            console.log('CommentList response data', data);
            setCommentList(data.responseValue);
          } else {
            console.log('no data yet');
          }
        });
        console.log('getPostListFromServer success!');
      } else {
        console.error('Failed to getPostListFromServer');
      }
    } catch (error) {
      console.error('PostListFree Error:', error, commentList);
    }
  };

  useEffect(() => {
    getCommentListFromServer(brdNo);
  }, []);

  return (
    <CommentListWrapper>
      <CommentListNav>
        <CommentInfoWrapper>
          <CommentInfo>
            <span className="reply">댓글</span>
            <span className="replyCount">{replyCount}</span>
          </CommentInfo>
          <MoreCommentIcon></MoreCommentIcon>
        </CommentInfoWrapper>
        <InterestCommentToggleWrapper>
          관심글 댓글 알림
        </InterestCommentToggleWrapper>
      </CommentListNav>
      <CommentListContentWrapper>
        <CommentListDisplay commentList={commentList}></CommentListDisplay>
      </CommentListContentWrapper>
      <CommentInput isAdditonalComment={false} brdNo={brdNo}></CommentInput>
    </CommentListWrapper>
  );
}

export default CommentList;
