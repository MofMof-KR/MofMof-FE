import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import cammeraIcon from 'public/svgs/cameraIcon1.svg';
import {API_BASE_URL} from '@/constants/constants';

interface CommentInputProps {
  // 대댓글인지 일반 댓글인지 확인하는 인자
  // 대댓글이면 true
  isAdditonalComment: boolean;
  prtCmtNo?: number;
  brdNo: number;
}

interface postCommentType {
  brdNo: number;
  cmt_ctxt: string;
  prt_cmt_no: number;
}

const CommentInput: React.FC<CommentInputProps> = ({
  isAdditonalComment,
  prtCmtNo = -1,
  brdNo,
}) => {
  const [inputText, setInputText] = useState<string>('');
  const [userToken, setUserToken] = useState<string>('');
  const [postComment, setPostComment] = useState<postCommentType>({
    brdNo: brdNo,
    cmt_ctxt: '',
    prt_cmt_no: prtCmtNo,
  });

  async function handleSubmit() {
    // 아래 if문에 로그인 조건 추가해야함
    if (inputText.length > 0) {
      try {
        const response = await fetch(API_BASE_URL + 'cmt/cmtinsert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify(postComment),
        });

        // 데이터 전송 후 수신 양호시
        response.json().then((data) => {
          console.log(data);
        });

        if (response.ok) {
          console.log('댓글 작성완료');
        } else {
          console.error('댓글 작성 오류 발생');
        }
      } catch (error) {
        console.error('댓글 작성 Error:', error);
      }
    } else {
      console.error('입력된 댓글이 없습니다!');
    }
  }

  return (
    <CommentInputWrapper>
      <CommentInputInner>
        <Image src={cammeraIcon} alt="카메라 아이콘" width="32" height="32" />
        <CommentInputMain
          type="text"
          placeholder="댓글을 입력해주세요."
          onChange={(e) => {
            setInputText(e.target.value);
            setPostComment({
              brdNo: brdNo,
              cmt_ctxt: e.target.value,
              prt_cmt_no: prtCmtNo,
            });
            console.log('inputText', inputText);
            console.log('postComment', postComment);
          }}
        ></CommentInputMain>
        <SubmitButton type="button" onClick={handleSubmit}>
          등록
        </SubmitButton>
      </CommentInputInner>
    </CommentInputWrapper>
  );
};

export default CommentInput;

const CommentInputWrapper = styled.div`
  display: flex;
  width: 390px;
  padding: 0px 16px 0px 14px;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--white, #fff);
`;

const CommentInputInner = styled.div`
  display: flex;
  width: 360px;
  padding: 24px 0px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-top: 1px solid var(--gray-3, #f0f0f0);
`;

const CommentInputMain = styled.input`
  display: flex;
  width: 265px;
  height: 34px;
  padding: 2px 8px 2px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 999px;
  border: 1px solid var(--gray-5, #bebebe);
  background: var(--white, #fff);

  ::placeholder {
    color: var(--gray-5, #bebebe);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
`;

const SubmitButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;

  display: flex;
  height: 34px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--primary, #f50);
  color: var(--white, var(--white, #fff));
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  cursor: pointer;
`;
