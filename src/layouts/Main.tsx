import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="desktop:px-96 laptop:px-48 tablet:px-36 w-full min-h-screen px-8">
      <Header />
      <main className="tablet:py-12 min-h-screen py-8">{children}</main>
      <Footer />
    </div>
  );
};
