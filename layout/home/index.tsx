import { MainLayout } from "layout/main";

import {
  HeroCarousel,
  ProductCategorySlide,
  SectionBanner1,
} from "./components";
import { HomeProps } from "./types";

import * as Styles from "./styles";

export function HomeLayout(props: HomeProps) {
  const {
    data: {
      attributes: { hero, sectionBanner1, section1 },
    },
  } = props || {};

  return (
    <MainLayout>
      <Styles.Container>
        <HeroCarousel data={hero.data || []} />
        <ProductCategorySlide
          title={section1?.title}
          data={section1?.products?.data}
        />
        <SectionBanner1 data={sectionBanner1?.data} />
      </Styles.Container>
    </MainLayout>
  );
}
