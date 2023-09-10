import {FattailSectionLayout} from '@/components/Layout/FattailSection';
import React, {HTMLAttributes} from 'react';
interface IProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string;
  additionalText: string;
  link: string;
}
export const QnA: React.FC<IProps> = ({headerText, additionalText, link}) => {
  return (
    <FattailSectionLayout
      headerText={headerText}
      additionalText={additionalText}
      link={link}
    ></FattailSectionLayout>
  );
};
