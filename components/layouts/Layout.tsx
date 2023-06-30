import { ReactNode } from "react";
import Sidebar from "../sidebars/Sidebar";

const Layout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <section className="container mx-auto max-w-7xl h-full">
      <section className="grid grid-cols-1 lg:grid-cols-5 lg:h-screen">
        <div className="fixed top-0">
          <Sidebar />
        </div>
        <div className="
          lg:col-start-2
          lg:col-span-2
        ">
          {children}
        </div>
        <div className="lg:col-span-2">
        </div>
      </section>
    </section>
  );
};

export default Layout;
