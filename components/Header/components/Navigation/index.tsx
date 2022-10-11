import { memo } from "react";
import Link from "next/link";

import { routePaths } from "constants/routes";

import { Button } from "components/button";
import { HiddenView } from "components/hidden-view";
import { useScrollDirection } from "hooks";
import { uuid } from "utils";

import { NavigationProps } from "./types";
import * as Styles from "./styles";

function BaseNavigation(props: NavigationProps) {
  const { isOpen, toggleIsOpen } = props;
  const scrollDirection = useScrollDirection();

  const scrollDown = scrollDirection === "down";

  const renderList = Object.entries(routePaths).map(([, value]) => (
    <Styles.Item key={uuid()}>
      <Link href={value.link}>
        <a>{value.label}</a>
      </Link>
    </Styles.Item>
  ));

  return (
    <Styles.Container
      open={{
        "@laptops-max": isOpen,
        "@laptops-min": undefined,
      }}
      onClick={toggleIsOpen}
      scrollDown={{
        "@laptops-min": scrollDown,
      }}
    >
      <Styles.Navigation
        open={{
          "@laptops-max": isOpen,
          "@laptops-min": undefined,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <Styles.MyAccount>
          <Button
            variant="letter"
            icon={{ name: "outlineUser" }}
          >
            Minha conta
          </Button>
        </Styles.MyAccount>
        <Styles.List>{renderList}</Styles.List>
        <HiddenView breakpoint="laptops-min">
          <Styles.SoftwareVersion>V1.0.0</Styles.SoftwareVersion>
        </HiddenView>
      </Styles.Navigation>

    </Styles.Container>
  );
}

export const Navigation = memo(BaseNavigation);
