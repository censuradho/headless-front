import { Image } from "components";
import * as Styles from "./styles";

import { SectionBanner1Props } from "./types";

export function SectionBanner1(props?: SectionBanner1Props) {
  const { data } = props || {};

  if (!data?.id) return null;

  const { attributes } = data;

  return (
    <Styles.Container>
      <Image
        width={attributes?.width}
        height={attributes?.height}
        src={attributes?.formats?.large?.url}
        layout="responsive"
        alt={attributes?.alternativeText}
        objectFit="fill"
      />
    </Styles.Container>
  );
}
