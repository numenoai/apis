/* tslint:disable */
/* eslint-disable */
/**
 * Numeno Article Recommender API
 * ## Introduction  Use the Numeno Article Recommender API to receive a curated selection of articles from across the web.  See below for the steps to creating a Feed, as well as an introduction to the top-level concepts making up the Article Recommender API.  ## Steps to creating a Feed  1. Create a Feed - [`/feeds`](create-feed) 2. Create a number of Stream queries associated with the Feed - [`/feeds/:feedId/streams`](create-stream) 3. Pull from the Feed as the Feed refreshes - [`/feeds/:feedId/articles`](get-articles-in-feed) 4. Use those Article IDs to look up metadata for the Articles -[`/articles/:id`](get-article-by-id) 5. Visit the Article links and render to your server DB or client app.  ## Sources, Articles and Topics  A **Source** is a place where Articles come from, typically a website, a blog, or a knowledgebase endpoint. Sources can be queried for activity via the [`/sources`](get-sources) endpoint.  Beyond the Sources Numeno regaularly indexes, additional Sources can be associated with Stream queries, and Sources can be `allowlist`/`denylist`\'d.  **Articles** are the documents produced by Sources, typically pages from a blogpost or website, articles from a news source, or posts from a social platform or company intranet.  See the [`/articles`](search-articles) endpoint.  **Topics**  - Numeno has millions of Topics that it associates with Articles when they are sourced.  Topics are used in Stream queries, which themselves are composed to create Feeds.  Get topics via the [`/topics`](get-topics) endpoint.  ## Feeds  **A Feed is a collection of Streams.** Feeds are configured to refresh on a regular schedule.  No new Articles are published to a Feed except when it\'s refreshed.  Feeds can be refreshed manually if the API Key Scopes allow.  You can ask for Articles chronologically or by decreasing score.  You can also limit Articles to a date-range, meaning that you can produce Feeds from historical content.  Interact with Feeds via the [`/feeds`](create-feed) endpoint.  ## Streams  Think of a **Stream** as a search query with a \"volume control knob\".  It\'s a collection of Topics that you\'re interested and a collection of Sources you\'d explicitly like to include or exclude. Streams are associated with a Feed, and a collection of Streams produce the sequence of Articles that appear when a Feed is refreshed.  The \"volume control knob\" on a Stream is a way to decide how many of the search results from the Stream query are included in the Feed. Our searches are \"soft\", and with a such a rich `Article x Topic` space to draw on, the \"volume control\" allows you to put a cuttoff on what you\'d like included.  Streams are a nested resource of `/feeds` - get started by explorting [`/feeds/:feedId/streams`](create-stream).
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@numeno.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime'
/**
 * An Article appearing in a Feed.
 * @export
 * @interface FeedArticle
 */
export interface FeedArticle {
  /**
   * The unique identifier of the Article.
   * @type {string}
   * @memberof FeedArticle
   */
  id: string
  /**
   * The title of the Article.
   * @type {string}
   * @memberof FeedArticle
   */
  title?: string
  /**
   * The URL of the publisher of the Article.
   * @type {string}
   * @memberof FeedArticle
   */
  source?: string
  /**
   * The date the Article was published in ISO 8601 UTC datetime.
   * @type {Date}
   * @memberof FeedArticle
   */
  publishDate?: Date
  /**
   * The name of the author(s) of the Article.
   * @type {Array<string>}
   * @memberof FeedArticle
   */
  authors?: Array<string>
  /**
   * Source URL of the Article.
   * @type {string}
   * @memberof FeedArticle
   */
  href?: string
  /**
   * URL of the Article's thumbnail image.
   * @type {string}
   * @memberof FeedArticle
   */
  thumbnail?: string
  /**
   * A brief summary of the Article.
   * @type {string}
   * @memberof FeedArticle
   */
  summary?: string
  /**
   * The name of the Source of the Article.
   * @type {string}
   * @memberof FeedArticle
   */
  sourceName?: string
  /**
   * URL of the Source's favicon.
   * @type {string}
   * @memberof FeedArticle
   */
  favicon?: string
  /**
   * The date the Article was stored in our database in ISO 8601 UTC datetime.
   * @type {Date}
   * @memberof FeedArticle
   */
  storedAt?: Date
  /**
   * The language of the Article in ISO 639-2 format.
   * @type {string}
   * @memberof FeedArticle
   */
  language?: string
  /**
   * Content of the Article.
   * @type {string}
   * @memberof FeedArticle
   */
  content?: string
  /**
   * A score indicating the relevancy of the Article in the context of this Feed.
   * @type {number}
   * @memberof FeedArticle
   */
  score?: number
  /**
   * A boolean indicating whether the article is masked from the Feed.
   * @type {boolean}
   * @memberof FeedArticle
   */
  masked?: boolean
  /**
   * The date the Article was added to the Feed in ISO 8601 UTC datetime.
   * @type {Date}
   * @memberof FeedArticle
   */
  addedAt?: Date
}

/**
 * Check if a given object implements the FeedArticle interface.
 */
export function instanceOfFeedArticle(value: object): value is FeedArticle {
  if (!('id' in value) || value['id'] === undefined) return false
  return true
}

export function FeedArticleFromJSON(json: any): FeedArticle {
  return FeedArticleFromJSONTyped(json, false)
}

export function FeedArticleFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FeedArticle {
  if (json == null) {
    return json
  }
  return {
    id: json['id'],
    title: json['title'] == null ? undefined : json['title'],
    source: json['source'] == null ? undefined : json['source'],
    publishDate:
      json['publishDate'] == null ? undefined : new Date(json['publishDate']),
    authors: json['authors'] == null ? undefined : json['authors'],
    href: json['href'] == null ? undefined : json['href'],
    thumbnail: json['thumbnail'] == null ? undefined : json['thumbnail'],
    summary: json['summary'] == null ? undefined : json['summary'],
    sourceName: json['sourceName'] == null ? undefined : json['sourceName'],
    favicon: json['favicon'] == null ? undefined : json['favicon'],
    storedAt: json['storedAt'] == null ? undefined : new Date(json['storedAt']),
    language: json['language'] == null ? undefined : json['language'],
    content: json['content'] == null ? undefined : json['content'],
    score: json['score'] == null ? undefined : json['score'],
    masked: json['masked'] == null ? undefined : json['masked'],
    addedAt: json['addedAt'] == null ? undefined : new Date(json['addedAt']),
  }
}

export function FeedArticleToJSON(json: any): FeedArticle {
  return FeedArticleToJSONTyped(json, false)
}

export function FeedArticleToJSONTyped(
  value?: FeedArticle | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    id: value['id'],
    title: value['title'],
    source: value['source'],
    publishDate:
      value['publishDate'] == null
        ? undefined
        : value['publishDate'].toISOString(),
    authors: value['authors'],
    href: value['href'],
    thumbnail: value['thumbnail'],
    summary: value['summary'],
    sourceName: value['sourceName'],
    favicon: value['favicon'],
    storedAt:
      value['storedAt'] == null ? undefined : value['storedAt'].toISOString(),
    language: value['language'],
    content: value['content'],
    score: value['score'],
    masked: value['masked'],
    addedAt:
      value['addedAt'] == null ? undefined : value['addedAt'].toISOString(),
  }
}
