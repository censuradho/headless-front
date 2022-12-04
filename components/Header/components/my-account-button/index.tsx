import { ComponentProps } from "react";

import { Button } from "components";

import { DropDownMenu } from "components/common";

type DropDownMenuItems = ComponentProps<typeof DropDownMenu>["items"]

export function MyAccountButton() {
  const renderTrigger = () => (
    <Button
      variant="letter"
      icon={{ name: "outlineUser" }}
    >
      Minha conta
    </Button>
  );

  const dropDownOptionsGroup: DropDownMenuItems = [
    {
      options: [
        {
          label: "Meus pedidos",
        },
      ],
    },
    {
      options: [
        {
          label: "Sair",
        },
      ],
    },
  ];

  return (
    <DropDownMenu
      trigger={renderTrigger()}
      items={dropDownOptionsGroup}
    />

  );
}
