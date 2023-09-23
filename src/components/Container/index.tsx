import {HTMLAttributes} from 'react';
import * as S from './Container.style';

interface IProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Container: React.FC<IProps> = ({
  as: Component = 'div',
  className = '',
  children,
  ...restProps
}) => {
  return (
    <S.StyledContainer className={className} {...restProps}>
      {children}
    </S.StyledContainer>
  );
};

export default Container;
