import { ReactNode } from "react";
import Sidebar from "../sidebars/Sidebar";

export const Layout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <section className="container mx-auto max-w-7xl h-full">
      <section className="grid grid-cols-1 lg:grid-cols-5 lg:h-screen">
        <div className="fixed top-0">
          <Sidebar />
        </div>
        {children}
      </section>
    </section>
  );
};

export const CenterLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="
      lg:col-start-2
      lg:col-span-2
    ">
      {children}
    </div>
  )
}

export const RightLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-4">
      {children}
    </div>
  )
}