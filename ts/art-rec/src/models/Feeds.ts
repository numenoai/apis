/* tslint:disable */
/* eslint-disable */
/**
 * Numeno Article Recommender API
 * ### Introduction  Use the Numeno Article Recommender API to get personalized article recommendations in three easy steps:  1. Define a Persona: Simply provide a description of your interests, vibe, and target audience.  2. Associate the Persona with a Feed.  3. Pull from the Feed to receive a curated selection of articles from across the web.  ### Cross-Origin Resource Sharing This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/), allowing cross-domain communication from the browser. All responses have a wildcard same-origin policy which makes them accessible from any code on any site.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@numeno.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime'
import type { Feed } from './Feed'
import {
  FeedFromJSON,
  FeedFromJSONTyped,
  FeedToJSON,
  FeedToJSONTyped,
} from './Feed'

/**
 *
 * @export
 * @interface Feeds
 */
export interface Feeds {
  /**
   *
   * @type {Array<Feed>}
   * @memberof Feeds
   */
  feeds: Array<Feed>
  /**
   *
   * @type {string}
   * @memberof Feeds
   */
  cursor?: string
}

/**
 * Check if a given object implements the Feeds interface.
 */
export function instanceOfFeeds(value: object): value is Feeds {
  if (!('feeds' in value) || value['feeds'] === undefined) return false
  return true
}

export function FeedsFromJSON(json: any): Feeds {
  return FeedsFromJSONTyped(json, false)
}

export function FeedsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Feeds {
  if (json == null) {
    return json
  }
  return {
    feeds: (json['feeds'] as Array<any>).map(FeedFromJSON),
    cursor: json['cursor'] == null ? undefined : json['cursor'],
  }
}

export function FeedsToJSON(json: any): Feeds {
  return FeedsToJSONTyped(json, false)
}

export function FeedsToJSONTyped(
  value?: Feeds | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    feeds: (value['feeds'] as Array<any>).map(FeedToJSON),
    cursor: value['cursor'],
  }
}
