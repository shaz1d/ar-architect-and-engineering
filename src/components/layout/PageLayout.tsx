import Footer from "../Footer";
import Navbar from "../Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
