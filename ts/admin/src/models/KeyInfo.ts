/* tslint:disable */
/* eslint-disable */
/**
 * Numeno Article Recommender API
 * ### Admin API  These are the admin APIs, not meant to be used by anyone but Numeno administration tools or the backend of the Numeno dashboard.
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
 * Information about an API key
 * @export
 * @interface KeyInfo
 */
export interface KeyInfo {
  /**
   * The key that can be used to authenticate a request
   * @type {string}
   * @memberof KeyInfo
   */
  key: string
  /**
   * The user id that the key belongs to
   * @type {string}
   * @memberof KeyInfo
   */
  userId: string
  /**
   * The date the key was created in ISO 8601 datetime
   * @type {Date}
   * @memberof KeyInfo
   */
  createdAt?: Date
  /**
   * The date the key was last modified in ISO 8601 datetime
   * @type {Date}
   * @memberof KeyInfo
   */
  modifiedAt?: Date
}

/**
 * Check if a given object implements the KeyInfo interface.
 */
export function instanceOfKeyInfo(value: object): value is KeyInfo {
  if (!('key' in value) || value['key'] === undefined) return false
  if (!('userId' in value) || value['userId'] === undefined) return false
  return true
}

export function KeyInfoFromJSON(json: any): KeyInfo {
  return KeyInfoFromJSONTyped(json, false)
}

export function KeyInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeyInfo {
  if (json == null) {
    return json
  }
  return {
    key: json['key'],
    userId: json['userId'],
    createdAt:
      json['createdAt'] == null ? undefined : new Date(json['createdAt']),
    modifiedAt:
      json['modifiedAt'] == null ? undefined : new Date(json['modifiedAt']),
  }
}

export function KeyInfoToJSON(json: any): KeyInfo {
  return KeyInfoToJSONTyped(json, false)
}

export function KeyInfoToJSONTyped(
  value?: KeyInfo | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    key: value['key'],
    userId: value['userId'],
    createdAt:
      value['createdAt'] == null ? undefined : value['createdAt'].toISOString(),
    modifiedAt:
      value['modifiedAt'] == null
        ? undefined
        : value['modifiedAt'].toISOString(),
  }
}
