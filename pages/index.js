import Head from "next/head";

import MainLayout from "@components/layouts/MainLayout";
import Breadcrumbs from "@components/modules/Breadcrumbs";
import MainForm from "@components/modules/MainForm";
import Cards from "@components/modules/Cards";
import Banner from "@components/modules/Banner";
import Pagination from "@components/modules/Pagination";

const Home = () => {
  return (
    <>
      <Head>
        <title>Гарант успеха</title>
        <meta name="description" content="Агенство недвижимости" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs />
      <main>
        <MainForm />
        <Cards />
        <Banner />
        <Pagination />
      </main>
    </>
  );
};

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
