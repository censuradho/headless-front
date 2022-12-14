import dynamic from "next/dynamic";
import Link from "next/link";

import { Box, HiddenView, ButtonIcon } from "components";

import { useBooleanToggle } from "hooks";
import { routePaths } from "constants/routes";

import * as Styles from "./styles";

import { CartButton, MyAccountButton, Navigation } from "./components";

const Logo = dynamic(() => import("public/icons/logo.svg"));

export function Header() {
  const [isOpen, toggleIsOpen] = useBooleanToggle();

  const renderCartButton = () => <CartButton />;

  return (
    <Styles.Container>
      <Styles.TopBar>
        <HiddenView breakpoint="laptops-min">
          <ButtonIcon
            onClick={toggleIsOpen}
            icon={{
              name: "menu",
              size: 30,
            }}
          />
        </HiddenView>
        <Link href={routePaths.home.link}>
          <Logo />
        </Link>
        <HiddenView breakpoint="laptops-min">{renderCartButton()}</HiddenView>
        <HiddenView breakpoint="laptops-max">
          <Box alignItems="center" gap={2.375}>
            <MyAccountButton />
            {renderCartButton()}
          </Box>
        </HiddenView>
      </Styles.TopBar>
      {/* <Navigation
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      /> */}
    </Styles.Container>
  );
}
