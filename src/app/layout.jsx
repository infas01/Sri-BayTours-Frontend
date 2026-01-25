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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sribaytours.lk',
  ),
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
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: "Sri'BayTours | Taxi Service & Tours in Sri Lanka",
    description: 'Book affordable taxi rides and tours in Arugam Bay.',
    url: 'https://www.sribaytours.lk',
    siteName: "Sri'BayTours",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552055568-f8c4fb8c6320?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sri'BayTours | Taxi Service & Tours in Sri Lanka",
    description: 'Book affordable taxi rides and tours in Arugam Bay.',
    images: [
      'https://images.unsplash.com/photo-1552055568-f8c4fb8c6320?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
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
