import {HTMLAttributes} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './Footer.style';

type IProps = HTMLAttributes<HTMLDivElement>;

const socialObjs = [
  {name: 'youtube', link: '#'},
  {name: 'facebook', link: '#'},
  {name: 'twitter', link: '#'},
  {name: 'instagram', link: '#'},
  {name: 'linkedin', link: '#'},
];

const Footer: React.FC<IProps> = ({...restProps}) => {
  const year = new Date().getFullYear();
  return (
    <S.Footer {...restProps}>
      <p>{`MofMof @ ${year}. All rights reserved.`}</p>
      <S.SocialLinks>
        {socialObjs?.map(({name, link}) => (
          <Link href={link} key={name}>
            <Image
              src={`/images/nav/${name}.svg`}
              width={23}
              height={23}
              alt={name}
            />
          </Link>
        ))}
      </S.SocialLinks>
    </S.Footer>
  );
};

export default Footer;
