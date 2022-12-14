import { ReactNode } from "react";
import { LinkProps } from "next/link";

export interface NavLinkProps extends LinkProps {
  children: ReactNode;
}
