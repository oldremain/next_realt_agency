import Header from "@components/modules/Header";
import HeaderNavigation from "@components/modules/HeaderNavigation";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderNavigation />
      {children}
    </>
  );
};

export default MainLayout;
