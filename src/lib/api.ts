// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
// docs: https://www.contentful.com/blog/integrate-contentful-next-js-app-router/

import { PRICING_GRAPHQL_FIELDS } from "./queries";

async function fetchGraphQL(query: any, preview = false) {
  // TODO: replace hardcoded spaceId with env
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/v81jp54pv6r1`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!!
            : "1p4FBsIGJgNAqVvAakRRBFgHo5dpHnRXOoFmIBaHuzE"
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      // next: { tags: ["pricingCard"] },
    },
  ).then((response) => response.json());
}

// console.log(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!!);

function extractArticleEntries(fetchResponse: any) {
  return fetchResponse?.data?.pricingCardCollection?.items;
}

function extractPricingCardEntries(fetchResponse: any) {
  return fetchResponse?.data?.pricingCardCollection?.items;
}

export async function getPricingCards(isDraftMode = false) {
  const pricingCards = await fetchGraphQL(
    `query {
        pricingCardCollection{
           items {
            ${PRICING_GRAPHQL_FIELDS}
          }
        }
        }
      `,
    (isDraftMode = false),
  );

  console.log("pricingCards", pricingCards);
  return extractPricingCardEntries(pricingCards);
}
