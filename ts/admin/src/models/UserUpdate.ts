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
 * Information needed to update a user
 * @export
 * @interface UserUpdate
 */
export interface UserUpdate {
  /**
   * The user id on our website
   * @type {string}
   * @memberof UserUpdate
   */
  webId?: string
  /**
   * The tier of the user
   * @type {string}
   * @memberof UserUpdate
   */
  tier?: string
}

/**
 * Check if a given object implements the UserUpdate interface.
 */
export function instanceOfUserUpdate(value: object): value is UserUpdate {
  return true
}

export function UserUpdateFromJSON(json: any): UserUpdate {
  return UserUpdateFromJSONTyped(json, false)
}

export function UserUpdateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserUpdate {
  if (json == null) {
    return json
  }
  return {
    webId: json['webId'] == null ? undefined : json['webId'],
    tier: json['tier'] == null ? undefined : json['tier'],
  }
}

export function UserUpdateToJSON(json: any): UserUpdate {
  return UserUpdateToJSONTyped(json, false)
}

export function UserUpdateToJSONTyped(
  value?: UserUpdate | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    webId: value['webId'],
    tier: value['tier'],
  }
}
