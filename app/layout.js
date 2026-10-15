import "./globals.css";
export const metadata = { title: "kawaewanko — Developer Portfolio", description: "A little corner of the internet by kawaewanko. Building thoughtful things for the web.", openGraph: { title: "kawaewanko — Developer Portfolio", description: "Building thoughtful things for the web.", type: "website" } };
export const viewport = { themeColor: "#fffaf3", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }) { return <html lang="ja"><body>{children}</body></html> }