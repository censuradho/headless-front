import { Header } from "components";
import { MainLayoutProps } from "./types";

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
