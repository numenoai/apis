/* tslint:disable */
/* eslint-disable */
/**
 * Numeno Persona API
 * ### Introduction  Use the Numeno Persona API to create new personas.
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
 * An article appearing in a feed.
 * @export
 * @interface Article
 */
export interface Article {
  /**
   * The title of the article
   * @type {string}
   * @memberof Article
   */
  title?: string
  /**
   * The name of the author(s) of the article
   * @type {Array<string>}
   * @memberof Article
   */
  author?: Array<string>
  /**
   * Source URL of the article
   * @type {string}
   * @memberof Article
   */
  href?: string
  /**
   * URL of the article's thumbnail image
   * @type {string}
   * @memberof Article
   */
  thumbnail?: string
  /**
   * The date the article was published in ISO 8601 datetime
   * @type {Date}
   * @memberof Article
   */
  publishDate?: Date
  /**
   * A brief summary of the article
   * @type {string}
   * @memberof Article
   */
  summary?: string
  /**
   * Content of the article
   * @type {string}
   * @memberof Article
   */
  content?: string
}

/**
 * Check if a given object implements the Article interface.
 */
export function instanceOfArticle(value: object): value is Article {
  return true
}

export function ArticleFromJSON(json: any): Article {
  return ArticleFromJSONTyped(json, false)
}

export function ArticleFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Article {
  if (json == null) {
    return json
  }
  return {
    title: json['title'] == null ? undefined : json['title'],
    author: json['author'] == null ? undefined : json['author'],
    href: json['href'] == null ? undefined : json['href'],
    thumbnail: json['thumbnail'] == null ? undefined : json['thumbnail'],
    publishDate:
      json['publishDate'] == null ? undefined : new Date(json['publishDate']),
    summary: json['summary'] == null ? undefined : json['summary'],
    content: json['content'] == null ? undefined : json['content'],
  }
}

export function ArticleToJSON(json: any): Article {
  return ArticleToJSONTyped(json, false)
}

export function ArticleToJSONTyped(
  value?: Article | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    title: value['title'],
    author: value['author'],
    href: value['href'],
    thumbnail: value['thumbnail'],
    publishDate:
      value['publishDate'] == null
        ? undefined
        : value['publishDate'].toISOString(),
    summary: value['summary'],
    content: value['content'],
  }
}
