import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CustomRoutes from "../routes/CustomRoutes";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <main>
        <CustomRoutes></CustomRoutes>
      </main>
      <Footer></Footer>
    </>
  );
}
