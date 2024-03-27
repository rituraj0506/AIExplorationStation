//for not using this repeating thing <main> <Header />  </main>  <main> </Header> </main> in appjs
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
