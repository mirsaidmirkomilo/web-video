import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  return {
    props: { api: data },
  };
};

const Get = ({ api }) => {
  return (
    <div>
      <Head>
        <title>get Dat</title>
      </Head>

      <div className="otaa">
        {api?.map((el) => {
          return (
            <div className="cart" key={el?.id}>
              <img src={el?.image} alt="" />
              <h1>{el?.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Get;
