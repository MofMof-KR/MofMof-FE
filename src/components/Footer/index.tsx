import {HTMLAttributes} from 'react';
import {StyledFooter} from './style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const Footer: React.FC<IProps> = ({className = '', ...restProps}) => {
  return (
    <StyledFooter className={className} {...restProps}>
      COPYRIGHT ALL RESERVED. 2023 © MofMof-KR
    </StyledFooter>
  );
};

export default Footer;
