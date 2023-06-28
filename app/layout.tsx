import SidebarComponent from "components/Sidebar";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import LoginForm from "./user/login/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My-Business",
  description: "Your Business in your hands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLogged = true;

  return (
    <html lang="pt-BR" className="container dark md:h-screen">
      <body className="h-full"
        suppressHydrationWarning={true}
      >
          {isLogged ? (
            <div >
              <SidebarComponent /> {children}
            </div>
          ) : (
            <LoginForm/>
          )}
      </body>
    </html>
  );
}
