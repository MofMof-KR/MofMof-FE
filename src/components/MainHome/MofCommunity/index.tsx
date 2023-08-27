import React, {HTMLAttributes} from 'react';
import * as S from './MofCommunity.style';
import Image from 'next/image';
import {CommCard} from '@/components/Card';

const buttonVariants = {
  rest: {scale: 1},
  hover: {scale: 1.1},
  pressed: {scale: 0.95},
};

interface IMofObject {
  name: string;
  ko: string;
  width: number;
  height: number;
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  mofObjs: IMofObject[];
}

export const MofCommunity: React.FC<IProps> = ({mofObjs}) => {
  return (
    <S.Section>
      <S.LinkH2 href={'#'}>
        <h2>🦎 도마뱀 커뮤니티</h2>
        <Image
          src={'/images/home/iconamoon_arrow-up-2.svg'}
          width={24}
          height={24}
          alt={'mof calculator'}
        />
      </S.LinkH2>
      <S.MofsWrapper>
        {mofObjs?.map((mofobj: IMofObject) => (
          <CommCard mofobj={mofobj} key={mofobj?.name} />
        ))}
        <S.MofCard>
          <S.MofButton
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
          >
            <S.ETCImageWrapper>
              <S.EtcImage
                src={`/images/home/iconamoon_arrow-up-2.svg`}
                width={24}
                height={24}
                alt={'mof etc'}
              />
            </S.ETCImageWrapper>
          </S.MofButton>
          <h3>{'더보기'}</h3>
        </S.MofCard>
      </S.MofsWrapper>
    </S.Section>
  );
};
