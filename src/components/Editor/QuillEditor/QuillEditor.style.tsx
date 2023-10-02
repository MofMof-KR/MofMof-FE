import styled from 'styled-components';
import dynamic from 'next/dynamic';
import {PropsWithRef} from 'react';

interface ReactQuillProps {
  forwardedRef: PropsWithRef<any>;
  [key: string]: any;
}

export const ReactQuill = dynamic<ReactQuillProps>(
  async () => {
    const {default: RQ} = await import('react-quill');
    return function comp({forwardedRef, ...props}) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  {ssr: false},
);

export const Wrapper = styled.div`
  flex: 1 1 auto;
  padding: 0 1rem;
  > .quill > .ql-container > .ql-editor.ql-blank::before {
    line-height: 1.5rem;
    font-style: normal;
    color: var(--gray-5);
    line-height: 1.5rem;
  }
`;

export const StyledReactQuill = styled(ReactQuill)`
  height: 100%;
  width: 100%;
  > .ql-container {
    border: none;
  }
`;

export const WebEditorWrapper = styled.div`
  border: none;
  padding: 0 1rem;
`;
