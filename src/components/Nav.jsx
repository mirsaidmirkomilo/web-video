import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="ota">
        <Link href={'/'}>HOME</Link>
        <Link href={'/get'}>GET</Link>
        <Link href={'/net'}>X-Net</Link>
        <Link href={'/video'}>Video</Link>
      </div>
    </nav>
  );
};

export default Nav;
