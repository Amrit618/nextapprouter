'use client';
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

interface FooterProps {
  src: string;
}

 interface images{
name: string;
surname: string;
phonenumber: number;
email: string;
}

const Footer: React.FC<FooterProps> = ({ src }) => {
  return (
    <>
      <div className={styles.container}>
        @2023 Amrit Bastakoti. All rights reserved.
      </div>
      <div>
        <Image src={src} 
        fill={true} 
        width={20} 
        alt="amrit" />
      </div>
    </>
  );
};

export default Footer;
