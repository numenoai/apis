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
 * Information about the health of a service.
 * @export
 * @interface HealthCheck
 */
export interface HealthCheck {
  /**
   * The status of the API.
   * @type {string}
   * @memberof HealthCheck
   */
  status: HealthCheckStatusEnum
  /**
   * The name of the service.
   * @type {string}
   * @memberof HealthCheck
   */
  service?: string
  /**
   * The version of the API.
   * @type {string}
   * @memberof HealthCheck
   */
  version?: string
  /**
   * The cluster the API is running on.
   * @type {string}
   * @memberof HealthCheck
   */
  cluster?: string
  /**
   * Whether debug mode is enabled or not.
   * @type {boolean}
   * @memberof HealthCheck
   */
  debugMode?: boolean
}

/**
 * @export
 */
export const HealthCheckStatusEnum = {
  Ok: 'ok',
  Degraded: 'degraded',
  Down: 'down',
} as const
export type HealthCheckStatusEnum =
  (typeof HealthCheckStatusEnum)[keyof typeof HealthCheckStatusEnum]

/**
 * Check if a given object implements the HealthCheck interface.
 */
export function instanceOfHealthCheck(value: object): value is HealthCheck {
  if (!('status' in value) || value['status'] === undefined) return false
  return true
}

export function HealthCheckFromJSON(json: any): HealthCheck {
  return HealthCheckFromJSONTyped(json, false)
}

export function HealthCheckFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): HealthCheck {
  if (json == null) {
    return json
  }
  return {
    status: json['status'],
    service: json['service'] == null ? undefined : json['service'],
    version: json['version'] == null ? undefined : json['version'],
    cluster: json['cluster'] == null ? undefined : json['cluster'],
    debugMode: json['debugMode'] == null ? undefined : json['debugMode'],
  }
}

export function HealthCheckToJSON(json: any): HealthCheck {
  return HealthCheckToJSONTyped(json, false)
}

export function HealthCheckToJSONTyped(
  value?: HealthCheck | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    status: value['status'],
    service: value['service'],
    version: value['version'],
    cluster: value['cluster'],
    debugMode: value['debugMode'],
  }
}
