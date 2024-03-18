import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="root">
        {/* sidebar */}
        <Sidebar />
        <MobileNav />
        <div className="root-container">
          <div className="wrapper">{children}</div>
        </div>
        {/* <h2 className="">hh</h2> */}
      </main>
    </>
  );
};

export default Layout;
