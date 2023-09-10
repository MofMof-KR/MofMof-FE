import {FattailSectionLayout} from '@/components/Layout/FattailSection';
import React, {HTMLAttributes} from 'react';
import * as S from './PhotoRoom.style';
interface IProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string;
  additionalText: string;
  link: string;
  photoRoomObjs: {
    id: number;
    title: string;
    writer: string;
    mof: string;
  }[];
}
export const PhotoRoom: React.FC<IProps> = ({
  headerText,
  additionalText,
  link,
  photoRoomObjs,
}) => {
  return (
    <FattailSectionLayout
      headerText={headerText}
      additionalText={additionalText}
      link={link}
    >
      <S.Ul>
        {photoRoomObjs?.map(({id, title, writer, mof}) => (
          <S.Li key={id}>
            <S.MofImage
              src={`/images/fattail/${mof}x2.png`}
              width={124}
              height={218}
              alt={`${mof} picture`}
            />
            <S.WriterImage
              src={`/images/fattail/${writer}x2.png`}
              width={40}
              height={40}
              alt={'picture'}
            />
            <S.H3>{title}</S.H3>
          </S.Li>
        ))}
      </S.Ul>
    </FattailSectionLayout>
  );
};
