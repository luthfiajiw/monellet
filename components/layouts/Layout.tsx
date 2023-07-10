import { ReactNode } from "react";
import Sidebar from "../sidebars/Sidebar";

export const Layout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <section className="container mx-auto h-full w-full overflow-x-hidden">
      <section className="grid grid-cols-1 lg:grid-cols-5 lg:h-screen">
        <div className="fixed top-0 shadow-md shadow-neutral-200 bg-neutral-100">
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
      py-4
      lg:col-start-2
      lg:col-span-2
      flex flex-col gap-5
      bg-neutral-100
    ">
      {children}
    </div>
  )
}

export const RightLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="
      lg:col-span-2
      lg:pr-4
      flex flex-col
      gap-5
      pb-4 lg:py-4
      bg-neutral-100
    ">
      {children}
    </div>
  )
}