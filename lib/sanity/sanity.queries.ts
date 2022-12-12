import { groq } from "next-sanity";
import { sanityClient } from ".";
import { DocumentResults } from "./types/helpers";
import { GetHomeQueryResponse } from "./types/home-query";
import { GetProductQueryRequest, Product } from "./types/product";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...,
    hero_banners[]{
      ...,
        image{
          ...,
          asset->{url}
        }
    },
    emphasis[]->{
      ...,
      images[]{
        ...,
        asset->{url},
        metadata->{...},
      },
    }
  }
`;

export const getHomePage = async () => sanityClient.fetch<GetHomeQueryResponse>(homePageQuery);

export function getProductsIdentifier() {
  const productsIdentifierQuery = groq`
  *[_type == 'product']{
    _id,
    slug,
  }
`;

  return sanityClient.fetch<Product[]>(productsIdentifierQuery);
}

export function getProduct(params: GetProductQueryRequest) {
  const productQuery = groq`
  *[_type == 'product' && _id == "${params._id}"][0]{
    ...,
    images[]{
      ...,
      asset->{url},
      metadata->{...},
    },
    sizes[]{
      ...,
      size->{...}
    }
  }
`;

  return sanityClient.fetch<Product>(productQuery);
}
