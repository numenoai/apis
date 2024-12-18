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
 *
 * @export
 * @interface KeyNew
 */
export interface KeyNew {
  /**
   * The Scopes to give the new Key access to.
   * @type {Array<string>}
   * @memberof KeyNew
   */
  scopes?: Array<string>
}

/**
 * Check if a given object implements the KeyNew interface.
 */
export function instanceOfKeyNew(value: object): value is KeyNew {
  return true
}

export function KeyNewFromJSON(json: any): KeyNew {
  return KeyNewFromJSONTyped(json, false)
}

export function KeyNewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KeyNew {
  if (json == null) {
    return json
  }
  return {
    scopes: json['scopes'] == null ? undefined : json['scopes'],
  }
}

export function KeyNewToJSON(json: any): KeyNew {
  return KeyNewToJSONTyped(json, false)
}

export function KeyNewToJSONTyped(
  value?: KeyNew | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    scopes: value['scopes'],
  }
}
