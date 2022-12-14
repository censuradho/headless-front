import { memo } from "react";
import Link from "next/link";

import { routePaths } from "constants/routes";

import { HiddenView } from "components/HiddenView";
import { useScrollDirection } from "hooks";
import { uuid } from "utils";

import { NavigationProps } from "./types";
import * as Styles from "./styles";
import { MyAccountButton } from "../my-account-button";

function BaseNavigation(props: NavigationProps) {
  const { isOpen, toggleIsOpen } = props;
  const scrollDirection = useScrollDirection();

  const scrollDown = scrollDirection === "down";

  const renderList = Object.entries(routePaths).map(([, value]) => (
    <Styles.Item key={uuid()}>
      <Link href={value.link}>{value.label}</Link>
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
          <MyAccountButton />
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
