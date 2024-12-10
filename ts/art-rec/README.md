# Article Recommender Typescript API

Use the Numeno Article Recommender API to get personalized article recommendations.

See below for the steps to creating a Feed, as well as an introduction to the top-level concepts making up the Article Recommender API.

### Steps to creating a Feed

1. Create a Feed
2. Create a number of Stream queries associated with the Feed
3. Pull from the Feed as the Feed refreshes
4. Use those Article IDs to look up metadata for the Articles
5. Visit the Article links and render to your server DB or client app.

### Sources, Articles and Topics

A **Source** is a place where Articles come from, typically a website, a blog, or a knowledgebase endpoint. Beyond the Sources Numeno regaularly indexes, additional Sources can be associated with Stream queries, and Sources can be `allowlist`/`denylist`'d.

**Articles** are the documents produced by Sources, typically pages from a blogpost or website, articles from a news source, or posts from a social platform or company intranet.

**Topics** - Numeno has millions of Topics that it associates with Articles when they are sourced. Topics are used in Stream queries, which themselves are composed to create Feeds.

### Feeds

**A Feed is a collection of Streams.** Feeds are configured to refresh on a regular schedule. No new Articles are published to a Feed except when it's refreshed. Feeds can be refreshed manually if the API key entitlements allow.

### Streams

Think of a **Stream** as a search query with a "volume control knob". It's a collection of Topics that you're interested and a collection of Sources you'd explicitly like to include or exclude. Streams are associated with a Feed, and a collection of Streams produce the sequence of Articles that appear when a Feed is refreshed.

For more information, please visit [https://numeno.ai/](https://numeno.ai/).

## Installation

Requires [Node.js](https://nodejs.org/en/download/) version 18.0 or above:

- When installing Node.js, you are recommended to check all checkboxes related to dependencies.

Add to your package with:

```sh
npm add @numeno/api-art-rec
```

## Usage

```typescript
import * as NumenoArtRec from '@numeno/api-art-rec'

// Create an interface to the Numeno Article Recommender API.
const config = new NumenoArtRec.Configuration({
  apiKey: 'YOUR_API_KEY',
})

const api = new NumenoArtRec.DefaultApi(config)

// Create a new Feed.
const createFeedCall = api.createFeed({
  feedNew: { name: 'FriendlyNameOfFeed' },
})

createFeedCall
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log('Error while calling createFeed:')
    console.log(error)
  })
```
