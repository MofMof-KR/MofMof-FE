import React, {HTMLAttributes} from 'react';
import Image from 'next/image';
import * as S from './FattailSectionLayout.style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string;
  additionalText: string;
  link: string;
}
export const FattailSectionLayout: React.FC<IProps> = ({
  headerText,
  additionalText,
  link,
  children,
}) => {
  return (
    <S.Section>
      <S.LinkH2 href={link}>
        <S.Heading>
          <p>{additionalText}</p>
          <h2>{headerText}</h2>
        </S.Heading>
        <S.Etc>
          더보기
          <Image
            src={'/images/home/iconamoon_arrow-up-2.svg'}
            width={24}
            height={24}
            style={{
              filter:
                'invert(34%) sepia(100%) saturate(1981%) hue-rotate(1deg) brightness(102%) contrast(106%)',
            }}
            alt={'mof calculator'}
          />
        </S.Etc>
      </S.LinkH2>
      <article>{children}</article>
    </S.Section>
  );
};
