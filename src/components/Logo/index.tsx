import React, {AnchorHTMLAttributes} from 'react';
import Link from 'next/link';
import Image from 'next/image';

type IProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Logo: React.FC<IProps> = ({...restProps}) => {
  return (
    <Link href={'/'}>
      <Image
        src={'/images/mofmof.svg'}
        width={150}
        height={29}
        alt={'mofmof logo'}
      />
    </Link>
  );
};

export default Logo;
