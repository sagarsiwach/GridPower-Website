import { groq } from "next-sanity";

// Example queries - customize based on your schema

export const HOMEPAGE_QUERY = groq`*[_type == "page" && slug.current == "home"][0]{
  _id,
  title,
  sections[]{
    _type,
    _key,
    ...
  }
}`;

export const PRODUCTS_QUERY = groq`*[_type == "product"] | order(order asc){
  _id,
  name,
  slug,
  description,
  category,
  specifications,
  "image": image.asset->url
}`;

export const PRODUCT_BY_SLUG_QUERY = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  description,
  category,
  specifications,
  features,
  "image": image.asset->url,
  "gallery": gallery[].asset->url
}`;
