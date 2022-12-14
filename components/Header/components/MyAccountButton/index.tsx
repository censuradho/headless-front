import { ComponentProps } from "react";

import { Box, Icon, Typography } from "components";

import { DropDownMenu } from "components/common";
import Link from "next/link";
import { paths } from "constants/routes";
import { useAuth } from "context";

type DropDownMenuItems = ComponentProps<typeof DropDownMenu>["items"];

export function MyAccountButton() {
  const auth = useAuth();

  const dropDownOptionsGroup: DropDownMenuItems = [
    {
      options: [
        {
          label: <Link href={paths.myAccount}>Minha conta</Link>,
        },
      ],
    },
    {
      options: [
        {
          label: "Sair",
          onSelect: auth.signOut,
        },
      ],
    },
  ];

  const renderMyAccountContext = () => {
    if (!auth.isSigned) {
      return (
        <Link href={paths.auth}>
          <Typography as="a">
            <Typography>Entre ou</Typography>
            <br />
            <Typography>cadastre-se</Typography>
          </Typography>
        </Link>
      );
    }

    return (
      <DropDownMenu
        trigger={
          <button type="button">
            <Box alignItems="center" gap={0.5}>
              <Icon name="outlineUser" />
              <Typography>Minha conta</Typography>
            </Box>
          </button>
        }
        items={dropDownOptionsGroup}
      />
    );
  };

  return renderMyAccountContext();
}
