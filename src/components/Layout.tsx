import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto bg-gray-900 text-white flex flex-col items-center justify-center py-12 rounded">
      {children}
    </div>
  );
};

export default Layout;
