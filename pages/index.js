import Head from "next/head";

import MainLayout from "@components/layouts/MainLayout";
import Breadcrumbs from "@components/modules/Breadcrumbs";

const Home = () => {
  return (
    <>
      <Head>
        <title>Гарант успеха</title>
        <meta name="description" content="Агенство недвижимости" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs />
    </>
  );
};

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
