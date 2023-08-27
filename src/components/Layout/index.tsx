import {HTMLAttributes, ReactNode} from 'react';
import * as S from './Layout.style';
import {Nav} from '@/components/Nav';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  headerSide?: ReactNode;
  isNavShown: boolean;
  footerSide?: ReactNode;
}
const BaseLayout: React.FC<IProps> = ({
  headerSide,
  isNavShown,
  footerSide,
  children,
  ...restProps
}) => {
  return (
    <S.BaseLayout {...restProps}>
      {headerSide}
      <S.Main>{children}</S.Main>
      {footerSide}
      {isNavShown && <Nav />}
    </S.BaseLayout>
  );
};

export default BaseLayout;
