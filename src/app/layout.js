import localFont from "next/font/local";

const monaSanzFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "fallback",
});

export const metadata = {
  title: "Tienda de zapatos",
  description: "Tiendas de zapatos online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monaSanzFont.className}>{children}</body>
    </html>
  );
}
