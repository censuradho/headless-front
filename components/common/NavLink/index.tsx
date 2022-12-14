import { Typography } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "./types";

export function NavLink(props: NavLinkProps) {
  const { children, ...otherProps } = props;

  const router = useRouter();

  return (
    <Link {...otherProps}>
      <Typography
        className={router.pathname === otherProps.href ? "active" : ""}
      >
        {children}
      </Typography>
    </Link>
  );
}
