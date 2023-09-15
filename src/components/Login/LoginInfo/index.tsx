import Image from 'next/image';
import * as S from './LoginInfo.style';
interface LoginInfoProps {
  info: string;
}
export const LoginInfo = ({info}: LoginInfoProps) => {
  return <S.P>{info}</S.P>;
};
