import {useEffect, useState} from 'react';

const getFileExtensionFromSrc = (src: string) => {
  if (src.startsWith('data:image/')) {
    const format = src.split(';')[0].split('/')[1];
    return format;
  }
  const fileExtension = src.split('.').pop() || 'png';
  return fileExtension.split('?')[0].split('#')[0];
};

const srcToFile = async (src: string, fileName: string) => {
  const reponse = await fetch(src);
  const data = await reponse.arrayBuffer();
  const fileExtension = getFileExtensionFromSrc(src);
  return new File([data], fileName, {type: `image/${fileExtension}`});
};

const combineIndexInImages = async (editorContent: string) => {
  const imageObjs = [];
  const regex = /<img\s+src="(.*?)"/g;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = regex.exec(editorContent)) !== null) {
    const fileExtension = getFileExtensionFromSrc(match[1]);
    const file = await srcToFile(match[1], `image_${index}.${fileExtension}`);
    imageObjs.push({
      imageIndex: index,
      file,
    });
    ++index;
  }
  return imageObjs;
};

export const useImageProcessing = (editorContent: string) => {
  const [images, setImages] = useState<File[]>([]);
  useEffect(() => {
    combineIndexInImages(editorContent).then((result) => {
      const imageFileList = result.map(({file}) => file);
      setImages(imageFileList);
    });
  }, [editorContent]);
  return images;
};
