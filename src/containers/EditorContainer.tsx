import {QuillEditor, TitleInput, Toolbar} from '@/components/Editor';
import {useImageProcessing} from '@/hooks';
import {ChangeEvent, useRef, useState} from 'react';
import styled from 'styled-components';

const EditorContainer = () => {
  // TODO: find ref type of quill
  const editorRef = useRef<any>(null);
  const [value, setValue] = useState('');
  const images = useImageProcessing(value);

  const pickImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const quillEditor = editorRef.current.getEditor();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64URL = reader.result;
      const range = quillEditor.getSelection();
      quillEditor.insertEmbed(
        range === null ? 0 : range.index,
        'image',
        base64URL,
      );
    };
  };

  const save = () => {
    const formData = new FormData();
    formData.append('content', value);
    if (images) {
      images.forEach((image) => {
        formData.append('images', image);
      });
    }
  };

  return (
    <FlexWrapper>
      <TitleInput />
      <QuillEditor value={value} changeValue={setValue} ref={editorRef} />
      <Toolbar pickImage={pickImage} save={save} />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export default EditorContainer;
