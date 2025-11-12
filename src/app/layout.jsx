import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

export const metadata = {
  title: "Sri'BayTours - Explore the Pearl of the Indian Ocean",
  description:
    "Discover the beauty of Sri Lanka with Sri'BayTours. Premium taxi services and guided tours to explore the most beautiful destinations in Sri Lanka.",
  keywords:
    'Sri Lanka tours, taxi service, travel Sri Lanka, Pottuvil, tourist destinations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
