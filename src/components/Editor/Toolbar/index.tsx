import React, {ChangeEvent, useId} from 'react';
import * as S from './Toolbar.style';
import Image from 'next/image';
import {A11yHidden} from '@/components/A11yHidden';

interface ToolbarProps {
  pickImage: (e: ChangeEvent<HTMLInputElement>) => void;
  save: () => void;
}

export const Toolbar = ({pickImage, save}: ToolbarProps) => {
  const inputId = useId();
  return (
    <S.Wrapper>
      <S.StyledToolbar id="toolbar">
        <S.QuillButtons>
          <S.ImageLabel htmlFor={inputId}>
            <Image
              src={'/images/editor/tabler_camera.svg'}
              width={32}
              height={32}
              alt="image button"
            />
          </S.ImageLabel>
          <A11yHidden
            as="input"
            id={inputId}
            type="file"
            accept="image/*"
            onChange={pickImage}
          />
          <S.BoldButton type="button" className="ql-bold">
            <Image
              src={'/images/editor/tabler_text-recognition.svg'}
              width={32}
              height={32}
              alt="image button"
            />
          </S.BoldButton>
          <S.SmileButton type="button" className="">
            <Image
              src={'/images/editor/tabler_mood-smile.svg'}
              width={32}
              height={32}
              alt="image button"
            />
          </S.SmileButton>
          <S.AlignLeftButton type="button" className="ql-bold">
            <Image
              src={'/images/editor/tabler_align-left.svg'}
              width={32}
              height={32}
              alt="image button"
            />
          </S.AlignLeftButton>
          <S.DotsButton type="button" className="ql-bold">
            <Image
              src={'/images/editor/tabler_dots.svg'}
              width={32}
              height={32}
              alt="image button"
            />
          </S.DotsButton>
        </S.QuillButtons>
        <S.SaveButton type="submit" onClick={save}>
          저장
        </S.SaveButton>
      </S.StyledToolbar>
    </S.Wrapper>
  );
};
