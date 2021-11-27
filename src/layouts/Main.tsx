import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const MainLayout: React.FC = ({ children }) => {
  const HorizPadding = () => (
    <div className="laptop:w-1/2 tablet:w-1/5 w-1/6" />
  );
  return (
    <div className="flex">
      <HorizPadding />
      <div className="w-full min-h-screen">
        <Header />
        <main className="tablet:py-12 min-h-screen py-8">{children}</main>
        <Footer />
      </div>
      <HorizPadding />
    </div>
  );
};
