import { MainLayout } from "layout/main";

import { HeroCarousel, ProductCategorySlide, SectionBanner1 } from "./components";
import { HomeProps } from "./types";

import * as Styles from "./styles";

export function HomeLayout(props: HomeProps) {
  const {
    emphasis,
    hero_banners,
  } = props;

  return (
    <MainLayout>
      <Styles.Container>
        <HeroCarousel data={hero_banners || []} />

        <ProductCategorySlide
          title="Destaques"
          data={emphasis}
        />
        {/* <ProductCategorySlide
          title={product_carousel.heading}
          data={product_carousel.products}
        /> */}
        {/* <HeroCarousel data={hero.data || []} />
        <ProductCategorySlide
          title={langerieCarousel?.title}
          data={langerieCarousel?.products?.data}
        />
        <SectionBanner1 data={sectionBanner1?.data} />
        <ProductCategorySlide title={lubrificantes?.title} data={lubrificantes?.products?.data} />
        */}
      </Styles.Container>
    </MainLayout>
  );
}
