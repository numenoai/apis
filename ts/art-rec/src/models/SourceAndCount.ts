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
 * The URL of a Source of Articles paired with the number of Articles seen from that Source in the requested date range.
 * @export
 * @interface SourceAndCount
 */
export interface SourceAndCount {
  /**
   * The URL of the Source, without a schema, optionally including a path if it is required to uniquely identify that Source. The domain must always be lowercase.
   * @type {string}
   * @memberof SourceAndCount
   */
  url: string
  /**
   * The number of Articles this Source has contributed during the given interval of time.
   * @type {number}
   * @memberof SourceAndCount
   */
  count: number
}

/**
 * Check if a given object implements the SourceAndCount interface.
 */
export function instanceOfSourceAndCount(
  value: object,
): value is SourceAndCount {
  if (!('url' in value) || value['url'] === undefined) return false
  if (!('count' in value) || value['count'] === undefined) return false
  return true
}

export function SourceAndCountFromJSON(json: any): SourceAndCount {
  return SourceAndCountFromJSONTyped(json, false)
}

export function SourceAndCountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SourceAndCount {
  if (json == null) {
    return json
  }
  return {
    url: json['url'],
    count: json['count'],
  }
}

export function SourceAndCountToJSON(json: any): SourceAndCount {
  return SourceAndCountToJSONTyped(json, false)
}

export function SourceAndCountToJSONTyped(
  value?: SourceAndCount | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    url: value['url'],
    count: value['count'],
  }
}
