import Header from '@/components/common/header';
import './globals.css'
import {Outfit} from 'next/font/google';
import Footer from '@/components/common/footer';
import { ClerkProvider } from '@clerk/nextjs';

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang='en'>
      <body className={`${outfit.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
