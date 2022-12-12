import { groq } from "next-sanity";
import { sanityClient } from ".";
import { GetHomeQueryResponse } from "./types/home-query";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...,
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
