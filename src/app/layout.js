import localFont from "next/font/local";
import Header from "../components/Header/Header";

const monaSanzFont = localFont({
  src: "../../public/assets/Mona-Sans.woff2",
  display: "fallback",
});

export const metadata = {
  title: "Tienda de zapatos",
  description: "Tiendas de zapatos online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monaSanzFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
