import {Outlet, useLocation} from "react-router";
import Footer from "./Footer";
import HeaderHome from "./Header";
import NavBar from "./NavBar";
import style from "./public.style.module.css";
const PublicLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={style.general}>
      <NavBar />
      <div className={style.body}>

        {location.pathname === "/" && (
          <HeaderHome />
        )}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;