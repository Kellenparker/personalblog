// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt){
    _id, 
    title, 
    slug, 
    mainImage, 
    publishedAt, 
    series[]->{
      title,
      slug
    }
  }`;

// Get all posts by series
export const postsBySeriesQuery = groq`*[_type == "post" && defined(slug.current) && $slug in series[]->slug.current] | order(publishedAt){
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    series[]->{
      title,
      slug
    }
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title,
    body,
    mainImage,
    publishedAt,
    series[]->{
      title,
      slug
    }
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get series by slug
export const seriesQuery = groq`*[_type == "series" && slug.current == $slug][0]{
    title,
    slug,
    description,
  }`;
