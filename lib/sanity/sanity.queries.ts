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
        ...,
      default_variant->{
        ...,
        sizes[]->{...},
        images[]{
          ...,
          asset->{url}
        }
      },
      variants[]->{
        ...,
        images[]{
          ...,
          asset->{url},
          metadata->{...},
        }
      }
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
  *[_type == 'product' && _id == "${params._id}" && slug.current == "${params.slug}"][0]{
      ...,
    default_variant->{
      ...,
      sizes[]->{...},
      images[]{
        ...,
        asset->{url}
      }
    },
    variants[]->{
      ...,
      images[]{
        ...,
        asset->{url},
        metadata->{...},
      }
    }
  }
`;

  return sanityClient.fetch<Product>(productQuery);
}
