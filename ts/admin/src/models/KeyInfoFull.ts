/* tslint:disable */
/* eslint-disable */
/**
 * Numeno Admin API
 * ## Introduction  Use the Numeno Administration API to create API Keys and set their permissions (which we call Scopes). This API is meant to be used by administrators of your organization.  ## Scopes  Scopes are used to let API Keys access only certain parts of the API.  Scopes are expressed as a string of the form `api:resource:action`.  For example, from the Numeno Article Recommender API (`art-rec`):   - `art-rec:feeds:read` - can read any Feed (eg. `GET` `/feeds`, `/feeds/:id`, `/feeds/:id/streams`, etc.)   - `art-rec:feeds:write` - can write (and read) any Feed   - `art-rec:feeds:*` - can perform any action on Feeds   - `art-rec:*:read` - can read any resource on `art-rec`   - `*:*:*` - can do everything
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
 * Information about an API Key, including the Scopes it has access to.
 * @export
 * @interface KeyInfoFull
 */
export interface KeyInfoFull {
  /**
   * The Key that can be used to authenticate a request.
   * @type {string}
   * @memberof KeyInfoFull
   */
  key: string
  /**
   * The date the Key was created in ISO 8601 UTC datetime.
   * @type {Date}
   * @memberof KeyInfoFull
   */
  createdAt?: Date
  /**
   * The date the Key was last updated in ISO 8601 UTC datetime.
   * @type {Date}
   * @memberof KeyInfoFull
   */
  updatedAt?: Date
  /**
   * The Scopes that the Key has access to.
   * @type {Array<string>}
   * @memberof KeyInfoFull
   */
  scopes?: Array<string>
}

/**
 * Check if a given object implements the KeyInfoFull interface.
 */
export function instanceOfKeyInfoFull(value: object): value is KeyInfoFull {
  if (!('key' in value) || value['key'] === undefined) return false
  return true
}

export function KeyInfoFullFromJSON(json: any): KeyInfoFull {
  return KeyInfoFullFromJSONTyped(json, false)
}

export function KeyInfoFullFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeyInfoFull {
  if (json == null) {
    return json
  }
  return {
    key: json['key'],
    createdAt:
      json['createdAt'] == null ? undefined : new Date(json['createdAt']),
    updatedAt:
      json['updatedAt'] == null ? undefined : new Date(json['updatedAt']),
    scopes: json['scopes'] == null ? undefined : json['scopes'],
  }
}

export function KeyInfoFullToJSON(json: any): KeyInfoFull {
  return KeyInfoFullToJSONTyped(json, false)
}

export function KeyInfoFullToJSONTyped(
  value?: KeyInfoFull | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    key: value['key'],
    createdAt:
      value['createdAt'] == null ? undefined : value['createdAt'].toISOString(),
    updatedAt:
      value['updatedAt'] == null ? undefined : value['updatedAt'].toISOString(),
    scopes: value['scopes'],
  }
}
