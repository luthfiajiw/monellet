import { ReactNode } from "react";
import Sidebar from "../sidebars/Sidebar";

const Layout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <section className="container mx-auto max-w-6xl h-full">
      <section className="grid grid-cols-1 lg:grid-cols-5 lg:h-screen">
        <Sidebar />
        <div className="
          lg:col-start-2
          lg:col-span-2
          lg:border-x-[2px]
          lg:border-zinc-100
        ">
          {children}
        </div>
        <div className="lg:col-span-2">
          <h1>Right</h1>
        </div>
      </section>
    </section>
  );
};

export default Layout;
