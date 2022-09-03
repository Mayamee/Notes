import { FunctionComponent } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      {/* app bar */}
      {/* side drawer */}

      <main>{children}</main>
    </div>
  );
};

export default Layout;
