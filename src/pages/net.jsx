import Head from 'next/head';
import React from 'react';

export const getStaticProps = async () => {
  const ress = await fetch('https://api.x-net.uz/products/');
  const dara = await ress.json();

  return {
    props: { api: dara },
  };
};

const Net = ({ api }) => {
  return (
    <div>
      <Head>
        <title>X-Net</title>
      </Head>

      <div className="otaa">
        {api?.map((el) => {
          return (
            <div className="cart" key={el?.id}>
              <img src={el?.image} alt="" />
              <h1>{el?.name}</h1>
              <p>{el?.description}</p>
              <p>{el?.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Net;
