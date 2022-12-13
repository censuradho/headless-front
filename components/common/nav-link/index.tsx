import { Typography } from "components/typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "./types";

export function NavLink(props: NavLinkProps) {
  const { children, ...otherProps } = props;

  const router = useRouter();

  return (
    <Link {...otherProps}>
      <Typography
        as="a"
        className={router.pathname === otherProps.href ? "active" : ""}
      >
        {children}
      </Typography>
    </Link>
  );
}
