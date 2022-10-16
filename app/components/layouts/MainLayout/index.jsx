import Header from "@components/modules/Header";
import HeaderNavigation from "@components/modules/HeaderNavigation";
import Footer from "@components/modules/Footer";
import Copyright from "@components/elements/Copyright";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderNavigation />
      {children}
      <Footer />
      <Copyright />
    </>
  );
};

export default MainLayout;
