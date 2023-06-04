import Link from 'next/link';
import styled from 'styled-components';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BaseLayout from '@/components/Layout';
import Slider from '@/components/Slider';
import MainHome from '@/pages/MainHome';

const StyledDiv = styled.div`
  background-color: #fff;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  color: #ff5500;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
`;

export default function Home() {
  return (
    <BaseLayout>
      <Slider />
      <MainHome />
      {/* <h1 style={{color: '#FF5500'}}>Welcome to MofMof Website!</h1>
      <Link href="/FattailGecko" legacyBehavior>
        <StyledLink>펫테일</StyledLink>
      </Link> */}
    </BaseLayout>
  );
}
