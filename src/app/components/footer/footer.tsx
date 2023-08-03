'use client'
import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image'

interface props{
  src: 'string'
}



const footer = () => {
  return (
    <>
      <div className={styles.container}>
        @2023 Amrit Bastakoti. All rights reserved.
        </div>
      <div>
        <image src= '1.jpg' fill:boolean= {true} 
        width={'20px'} 
        alt= 'amrit'></image>
      </div>
    </>
  );
}

export default footer