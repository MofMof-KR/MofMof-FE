import {CommentInfo} from '@/types/post';
import {timeAgo} from '@/utils/aboutTimes/dateToString';
import React, {FC} from 'react';
import styled from 'styled-components';

// props 타입 정의
type CommentListDisplayProps = {
  commentList: CommentInfo[];
};

type CommentDisplayProps = {
  isParent?: boolean;
};

const CommentListDisplay: FC<CommentListDisplayProps> = ({commentList}) => {
  console.log('commentList', commentList);

  function DisplayComments(commentList: CommentInfo[]) {
    let CommentComponentList = [] as React.ReactElement[];
    CommentComponentList = commentList.map((elem) => {
      if (elem.prt_cmt_no == 0) {
        // 부모 댓글
        let TempComp;
        return (
          <ParentCmt key={elem.cmt_no.toString()}>
            {/* todo 프로필 이미지 적용 아직 api값 없음 */}
            <img src="/"></img>
            <div className="commentContentWrapper">
              <div className="commentedUserName">{elem.nickname}</div>
              <div className="commentContent">{elem.cmt_ctxt}</div>
              <div className="commentInfoWrapper">
                <div className="mod_date">{timeAgo(elem.reg_date)}</div>
                {/* <div className="modTime"></div> */}
                <button className="childCommentButton" type="button">
                  답글쓰기
                </button>
              </div>
            </div>
          </ParentCmt>
        );
      } else {
        // 자식 댓글

        return (
          <ChildCmt key={elem.cmt_no.toString()}>
            {/* todo 프로필 이미지 적용 아직 api값 없음 */}
            <img src="/"></img>
            <div className="commentContentWrapper">
              <span className="commentedUserName">{elem.nickname}</span>
              <span className="commentContent">{elem.cmt_ctxt}</span>
              <div className="commentInfoWrapper">
                <span className="mod_date">{timeAgo(elem.reg_date)}</span>
                {/* <div className="modTime"></div> */}
                <button className="childCommentButton" type="button">
                  답글쓰기
                </button>
              </div>
            </div>
          </ChildCmt>
        );
      }
    });

    return CommentComponentList;
  }

  console.log('disc', DisplayComments(commentList));

  return (
    <CommentListDisplayWrapper>
      {DisplayComments(commentList)}
    </CommentListDisplayWrapper>
  );
};

export default CommentListDisplay;

const CommentListDisplayWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 358px;
  align-items: flex-end;
  gap: 8px;
`;

const ParentCmt = styled.li`
  list-style: none;
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
  color: blue;

  img {
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;

    width: 30px;
    height: 30px;
  }

  .commentContentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    .commentUserName {
      color: var(--gray-7, #444);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
    .commentContent {
      color: var(--gray-7, #444);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    .commentInfoWrapper {
      display: flex;
      align-items: flex-start;
      gap: 6px;

      .mod_date {
        color: var(--gray-6, #808080);

        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
      }

      button {
        border: 0;
        background-color: transparent;
        padding: 0;

        color: var(--gray-6, #808080);

        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
      }
    }
  }
`;
const ChildCmt = styled.li`
  list-style: none;
  display: flex;
  width: 358px;
  align-items: flex-start;
  gap: 8px;
  color: red;

  padding-left: 38px;

  img {
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;

    width: 30px;
    height: 30px;
  }

  .commentContentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    .commentUserName {
      color: var(--gray-7, #444);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
    .commentContent {
      color: var(--gray-7, #444);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    .commentInfoWrapper {
      display: flex;
      align-items: flex-start;
      gap: 6px;

      .mod_date {
        color: var(--gray-6, #808080);

        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
      }

      button {
        border: 0;
        background-color: transparent;
        padding: 0;

        color: var(--gray-6, #808080);

        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
      }
    }
  }
`;

// const CommentDisplay: FC<CommentDisplayProps> = ({isParent}) => {
//   let CmtComponent;
//   if (isParent) {
//     // 부모 댓글
//     CmtComponent =
//   } else {
//     // 자식 댓글
//   }

//   return <div></div>;
// };
