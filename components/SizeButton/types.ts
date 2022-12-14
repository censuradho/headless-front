import { ButtonHTMLAttributes } from "react";

type RootButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "disabled"
>;
export interface SizeButtonProps extends RootButtonProps {
  children: string;
  selected?: boolean;
}
