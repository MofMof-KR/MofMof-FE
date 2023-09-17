import {FattailSectionLayout} from '@/components/Layout/FattailSection';
import {motion} from 'framer-motion';
import Image from 'next/image';
import React, {HTMLAttributes} from 'react';
import * as S from './MofPedia.style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string;
  additionalText: string;
  link: string;
  mofPediaObjs: {
    id: number;
    name: string;
    ko: string;
    width: number;
    height: number;
  }[];
}
const buttonVariants = {
  rest: {scale: 1},
  hover: {scale: 1.1},
  pressed: {scale: 0.95},
};
export const MofPedia: React.FC<IProps> = ({
  headerText,
  additionalText,
  link,
  mofPediaObjs,
}) => {
  return (
    <FattailSectionLayout
      headerText={headerText}
      additionalText={additionalText}
      link={link}
    >
      <S.Ul>
        {mofPediaObjs?.map(({id, name, ko, width, height}) => (
          <S.MofButton
            key={id}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
          >
            <S.ImageWrapper>
              <Image
                src={`/images/fattail/${name}x2.png`}
                width={width}
                height={height}
                alt={`${name} image`}
              />
              <S.HeartIcon
                src={`/images/fattail/tabler_heart.png`}
                width={24}
                height={24}
                alt={`heart icon`}
              />
            </S.ImageWrapper>
            <S.MofInfo>
              <S.Ko>{ko}</S.Ko>
              <S.Eng>{name}</S.Eng>
            </S.MofInfo>
          </S.MofButton>
        ))}
      </S.Ul>
    </FattailSectionLayout>
  );
};
