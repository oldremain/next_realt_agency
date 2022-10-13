import MainLayout from "@components/layouts/MainLayout";
import Head from "next/head";

const Home = () => {
  return (
    <Head>
      <title>Гарант успеха</title>
      <meta name="description" content="Агенство недвижимости" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
