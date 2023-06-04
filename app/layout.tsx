import SidebarComponent from "components/Sidebar";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Login from "./user/login/page";

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
    <html lang="pt-BR">
      <body
        suppressHydrationWarning={true}
        className={"dark flex  items-center justify-center"}
      >
        <div className="w-[350px]">
          {isLogged ? (
            <>
              <SidebarComponent /> {children}
            </>
          ) : (
            <Login />
          )}
        </div>
      </body>
    </html>
  );
}
