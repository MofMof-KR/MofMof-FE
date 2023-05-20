import * as M from '@/styles/Header/DoubleDropdownStyle';

export const DoubleDropdown = ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <M.DoubleDropWrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <M.DoubleDropUl>
        <M.DoubleDropLi>자유 게시판</M.DoubleDropLi>
        <M.DoubleDropLi>질문 게시판</M.DoubleDropLi>
      </M.DoubleDropUl>
    </M.DoubleDropWrapper>
  );
};
