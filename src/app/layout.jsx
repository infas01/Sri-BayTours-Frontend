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
    "Sri'BayTours",
    "Sri'Bay Tours",
    'Sri Bay Tours',
    'Sri Bay taxi',
    'Sri Lanka taxi',
    'Sri Lanka taxi driver',
    'private driver Sri Lanka',
    'chauffeur service Sri Lanka',
    'airport transfer Sri Lanka',
    'Sri Lanka airport taxi',
    'tour driver Sri Lanka',
    'Sri Lanka day tours',
    'Sri Lanka travel guide',
    'Sri Lanka itinerary',
    'Arugam Bay taxi',
    'Ella taxi',
    'Sigiriya taxi',
  ],

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
