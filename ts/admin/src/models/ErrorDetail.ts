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
 *
 * @export
 * @interface ErrorDetail
 */
export interface ErrorDetail {
  /**
   * Field where the error occurred (if applicable)
   * @type {string}
   * @memberof ErrorDetail
   */
  field?: string
  /**
   * Description of the error
   * @type {string}
   * @memberof ErrorDetail
   */
  message?: string
}

/**
 * Check if a given object implements the ErrorDetail interface.
 */
export function instanceOfErrorDetail(value: object): value is ErrorDetail {
  return true
}

export function ErrorDetailFromJSON(json: any): ErrorDetail {
  return ErrorDetailFromJSONTyped(json, false)
}

export function ErrorDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ErrorDetail {
  if (json == null) {
    return json
  }
  return {
    field: json['field'] == null ? undefined : json['field'],
    message: json['message'] == null ? undefined : json['message'],
  }
}

export function ErrorDetailToJSON(json: any): ErrorDetail {
  return ErrorDetailToJSONTyped(json, false)
}

export function ErrorDetailToJSONTyped(
  value?: ErrorDetail | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    field: value['field'],
    message: value['message'],
  }
}
