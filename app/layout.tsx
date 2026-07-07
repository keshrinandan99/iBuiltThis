import './globals.css'
import {Outfit} from 'next/font/google';

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${outfit.className} antialiased`}>
        <header>IBuiltThis</header>
        {children}
        <footer>IBuiltThis Inc. All rights reserved.</footer>
      </body>
    </html>
  );
}
