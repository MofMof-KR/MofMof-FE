import React, {Dispatch, SetStateAction, useEffect} from 'react';
import * as S from './QuillEditor.style';

const modules = {
  toolbar: '#toolbar',
};

interface QuillEditorProps {
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

export const QuillEditor = React.forwardRef<HTMLInputElement, QuillEditorProps>(
  ({value, changeValue}, ref) => {
    return (
      <S.Wrapper>
        <S.StyledReactQuill
          value={value}
          onChange={changeValue}
          forwardedRef={ref}
          theme={null}
          placeholder="본문에 #을 이용해 태그를 입력해보세요. (최대 10개)"
          modules={modules}
        />
      </S.Wrapper>
    );
  },
);

QuillEditor.displayName = 'QuillEditor';
