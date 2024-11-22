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
 * Information needed to update or create a persona.
 * @export
 * @interface PersonaUpdate
 */
export interface PersonaUpdate {
  /**
   * The name of the Persona for easy reference
   * @type {string}
   * @memberof PersonaUpdate
   */
  name?: string
  /**
   * The natural-language body of the Persona
   * @type {string}
   * @memberof PersonaUpdate
   */
  body?: string
}

/**
 * Check if a given object implements the PersonaUpdate interface.
 */
export function instanceOfPersonaUpdate(value: object): value is PersonaUpdate {
  return true
}

export function PersonaUpdateFromJSON(json: any): PersonaUpdate {
  return PersonaUpdateFromJSONTyped(json, false)
}

export function PersonaUpdateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PersonaUpdate {
  if (json == null) {
    return json
  }
  return {
    name: json['name'] == null ? undefined : json['name'],
    body: json['body'] == null ? undefined : json['body'],
  }
}

export function PersonaUpdateToJSON(json: any): PersonaUpdate {
  return PersonaUpdateToJSONTyped(json, false)
}

export function PersonaUpdateToJSONTyped(
  value?: PersonaUpdate | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    name: value['name'],
    body: value['body'],
  }
}
