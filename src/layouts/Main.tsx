import { Toast } from '@components/Toast';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="laptop:grid-cols-5 tablet:grid-cols-7 tablet:grid">
      <div />
      <div className="laptop:col-span-3 tablet:col-span-5 w-full min-h-screen col-span-7 px-4">
        <Header />
        <Toast />
        <main className="tablet:py-12 min-h-screen py-8">{children}</main>
        <Footer />
      </div>
      <div />
    </div>
  );
};
