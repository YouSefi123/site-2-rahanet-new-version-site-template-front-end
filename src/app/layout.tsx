import HeaderBanner from "./components/Header-banner";
import Headers from "./components/Headers";
import RouteLoading from "./components/RouteLoading";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <RouteLoading/>
        <HeaderBanner/>
        <Headers/>
        {children}</body>
    </html>
  );
}
