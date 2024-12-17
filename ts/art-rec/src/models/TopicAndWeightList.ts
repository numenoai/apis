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
import type { TopicAndWeight } from './TopicAndWeight'
import {
  TopicAndWeightFromJSON,
  TopicAndWeightFromJSONTyped,
  TopicAndWeightToJSON,
  TopicAndWeightToJSONTyped,
} from './TopicAndWeight'

/**
 *
 * @export
 * @interface TopicAndWeightList
 */
export interface TopicAndWeightList {
  /**
   * A list of Topics and their weights observed in the requested date range.  This weight is a rough indication of how many documents are related to that Topic and how important this Topic was in these documents. For example, a weight of 1.0 could mean that one document was found with this Topic as the main one.
   * @type {Array<TopicAndWeight>}
   * @memberof TopicAndWeightList
   */
  topics: Array<TopicAndWeight>
  /**
   *
   * @type {string}
   * @memberof TopicAndWeightList
   */
  cursor?: string
}

/**
 * Check if a given object implements the TopicAndWeightList interface.
 */
export function instanceOfTopicAndWeightList(
  value: object,
): value is TopicAndWeightList {
  if (!('topics' in value) || value['topics'] === undefined) return false
  return true
}

export function TopicAndWeightListFromJSON(json: any): TopicAndWeightList {
  return TopicAndWeightListFromJSONTyped(json, false)
}

export function TopicAndWeightListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TopicAndWeightList {
  if (json == null) {
    return json
  }
  return {
    topics: (json['topics'] as Array<any>).map(TopicAndWeightFromJSON),
    cursor: json['cursor'] == null ? undefined : json['cursor'],
  }
}

export function TopicAndWeightListToJSON(json: any): TopicAndWeightList {
  return TopicAndWeightListToJSONTyped(json, false)
}

export function TopicAndWeightListToJSONTyped(
  value?: TopicAndWeightList | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    topics: (value['topics'] as Array<any>).map(TopicAndWeightToJSON),
    cursor: value['cursor'],
  }
}
