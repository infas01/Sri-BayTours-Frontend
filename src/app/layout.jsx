import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Sri'BayTours | Taxi Service & Tours in Sri Lanka",
  description:
    'Book affordable taxi rides, airport transfers, and tours in Arugam Bay, Ella, and Sigiriya. Trusted driver in Sri Lanka.',
  keywords: [
    'Sri Lanka tours',
    'taxi service',
    'travel Sri Lanka',
    'Arugam Bay',
    'tourist destinations',
    'Sribaytours',
  ],

  openGraph: {
    title: "Sri'BayTours | Taxi Service & Tours in Sri Lanka",
    description: 'Book affordable taxi rides and tours in Arugam Bay.',
    url: 'https://www.sribaytours.lk',
    siteName: "Sri'BayTours",
    images: [
      {
        url: '/images/carousel-1.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
