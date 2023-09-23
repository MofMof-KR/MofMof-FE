import * as S from './ProgressBar.style';
interface ProgressBarProps {
  bgColor: string;
  isNeedCompleted: boolean;
  completed: number;
}

export const ProgressBar = ({
  bgColor,
  isNeedCompleted,
  completed,
}: ProgressBarProps) => {
  return (
    <S.ProgressBarContainer>
      <S.Filler bgcolor={bgColor} completed={completed}>
        {isNeedCompleted && <S.Label>{`${completed}%`}</S.Label>}
      </S.Filler>
    </S.ProgressBarContainer>
  );
};
