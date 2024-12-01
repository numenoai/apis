/* tslint:disable */
/* eslint-disable */
/**
 * Numeno Article Recommender API
 * ### Admin API  These are the admin APIs, not meant to be used by anyone but Numeno administration tools.
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
 * @interface UserInfoKeys
 */
export interface UserInfoKeys {
  /**
   * Number of active keys for this user
   * @type {number}
   * @memberof UserInfoKeys
   */
  active?: number
  /**
   * Number of inactive keys for this user
   * @type {number}
   * @memberof UserInfoKeys
   */
  inactive?: number
}

/**
 * Check if a given object implements the UserInfoKeys interface.
 */
export function instanceOfUserInfoKeys(value: object): value is UserInfoKeys {
  return true
}

export function UserInfoKeysFromJSON(json: any): UserInfoKeys {
  return UserInfoKeysFromJSONTyped(json, false)
}

export function UserInfoKeysFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserInfoKeys {
  if (json == null) {
    return json
  }
  return {
    active: json['active'] == null ? undefined : json['active'],
    inactive: json['inactive'] == null ? undefined : json['inactive'],
  }
}

export function UserInfoKeysToJSON(json: any): UserInfoKeys {
  return UserInfoKeysToJSONTyped(json, false)
}

export function UserInfoKeysToJSONTyped(
  value?: UserInfoKeys | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    active: value['active'],
    inactive: value['inactive'],
  }
}
