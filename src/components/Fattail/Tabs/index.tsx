import React, {HTMLAttributes} from 'react';
import * as S from './Tabs.style';

interface IProps extends HTMLAttributes<HTMLUListElement> {
  tabItems: {id: number; name: string}[];
  pickedTabIndex: number;
}
export const Tabs: React.FC<IProps> = ({tabItems, pickedTabIndex}) => {
  return (
    <S.Ul>
      {tabItems.map(({id, name}: {id: number; name: string}, index) => (
        <S.Li $active={pickedTabIndex === index} key={id}>
          {name}
        </S.Li>
      ))}
    </S.Ul>
  );
};
