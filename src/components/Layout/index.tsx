import {HTMLAttributes} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';
import {StyledBaseLayout, StyledMain} from './style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const BaseLayout: React.FC<IProps> = ({
  className = '',
  children,
  ...restProps
}) => {
  return (
    <StyledBaseLayout className={className} {...restProps}>
      <Header />
      <StyledMain>
        <Container>{children}</Container>
      </StyledMain>
      <Footer />
    </StyledBaseLayout>
  );
};

export default BaseLayout;
