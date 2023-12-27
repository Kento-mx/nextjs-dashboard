import { monstserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className} antialiased`}>
        {children}
        <footer className='py=10 flex justify-center items-center mt-2'>
          Hecho por mi corazoncito ❤️ y mis pelotas 🥝🍆🥝
        </footer>
      </body>
    </html>
  );
}
