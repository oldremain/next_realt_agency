import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "app/store";

import MainLayout from "@components/layouts/MainLayout";
import Breadcrumbs from "@components/modules/Breadcrumbs";
import MainForm from "@components/modules/MainForm";
import Cards from "@components/modules/Cards";
import Banner from "@components/modules/Banner";
import Pagination from "@components/modules/Pagination";
import Decor from "@components/modules/Decor";
import GoogleMap from "@components/modules/GoogleMap";

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
        <Decor />
        <GoogleMap />
      </main>
    </>
  );
};

Home.getLayout = function (page) {
  return (
    <Provider store={store}>
      <MainLayout>{page}</MainLayout>
    </Provider>
  );
};

export default Home;
