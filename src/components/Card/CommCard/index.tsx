import Image from 'next/image';
import React, {ReactNode} from 'react';
import * as S from './CommCard.style';

interface IMofObject {
  name: string;
  ko: string;
  width: number;
  height: number;
}
const buttonVariants = {
  rest: {scale: 1},
  hover: {scale: 1.1},
  pressed: {scale: 0.95},
};

interface ICardProps {
  mofobj: IMofObject;
}

interface CommBodyProps {
  children: ReactNode;
  mofobj: IMofObject;
}

interface CommTitleProps {
  mofobj: IMofObject;
}

interface CommImageProps {
  mofobj: IMofObject;
}

export const CommCard = ({...restProps}: ICardProps) => {
  return (
    <S.Card>
      <CommCard.CommBody {...restProps}>
        <CommCard.CommImage {...restProps} />
      </CommCard.CommBody>
      <CommCard.CommTitle {...restProps} />
    </S.Card>
  );
};

const CommBody = ({children, ...restProps}: CommBodyProps) => {
  return (
    <S.Button
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      {...restProps}
    >
      {children}
    </S.Button>
  );
};

const CommMofImage = ({...restProps}: CommImageProps) => {
  const {name, width, height} = restProps.mofobj;
  return (
    <Image
      src={`/images/home/${name}x2.png`}
      width={width}
      height={height}
      alt={`Link to ${name} community`}
    />
  );
};

const CommTitle = ({...restProps}: CommTitleProps) => {
  return <h3>{restProps?.mofobj?.ko}</h3>;
};

CommCard.CommBody = CommBody;
CommCard.CommImage = CommMofImage;
CommCard.CommTitle = CommTitle;
