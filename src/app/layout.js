import RootMenu from "@/components/RootMenu";
import "./globals.css";


export const metadata = {
  title: "Cooperadora ISP 20 San Justo | Sistema de Gestión",
  description: "Creado por alumnos de Practicas Profesionalizantes 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootMenu />
        <div className="layout-wrapper">                           {children}
        </div>
            </body>
    </html>
  );
}
