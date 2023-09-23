import {SignUpSection} from '@/components/Layout/SignUpSection';
import * as S from './SignUpPickMof.style';

const buttonVariants = {
  rest: {scale: 1},
  hover: {scale: 1.1},
  pressed: {scale: 0.95},
};

interface SignUpSectionProps {
  completed: number;
  mofObjs: {name: string; ko: string}[];
  likeGaeko: string;
  pickLikeGaeko: (gaeko: string) => void;
}
export const SignUpPickMof = ({
  completed,
  mofObjs,
  likeGaeko,
  pickLikeGaeko,
}: SignUpSectionProps) => {
  return (
    <SignUpSection
      headerText={'관심있는 도마뱀을\n한 가지 선택해주세요!'}
      isNeedAddition
      addtionText={'1가지 선택'}
      completed={completed}
      isValidated={!!likeGaeko}
      isNeedProgressBar
    >
      <S.Ul>
        {mofObjs.map(({name, ko}) => (
          <S.Li key={name}>
            <S.MofButton
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
              onClick={() => pickLikeGaeko(name)}
              $picked={name === likeGaeko}
            >
              <S.MofImage
                src={`/images/mof_sort/${name}.png`}
                height={80}
                width={80}
                alt={`${name} image`}
                $picked={name === likeGaeko}
              />
            </S.MofButton>
            <S.Name>{ko}</S.Name>
          </S.Li>
        ))}
      </S.Ul>
    </SignUpSection>
  );
};
