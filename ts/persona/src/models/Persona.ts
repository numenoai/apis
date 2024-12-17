/* tslint:disable */
/* eslint-disable */
/**
 * Numeno Persona API
 * ### Introduction  Use the Numeno Persona API to create and manage **Personas**.  Evolving a Persona over time is dead-simple: [create a Persona](create-persona), then send natural-language descriptions of your users’ in-app activities to the Persona API. Under the hood, we create a rich set of models of the system that evolve over time.  Then, ask Numeno to personalize some part of your experience using the Persona.  Numeno will use our models to tailor your software to each user’s unique preferences and habits, allowing you to dynamically adjust your offerings.  For example, connect a Persona to the **[Numeno Article Recommender API](https://numeno.ai/wp-content/uploads/docs/artrec/numeno-article-recommender-api)** to generate **Article Feeds** that evolve over time as your Persona evloves with user interaction.  Personas are not limited to modelling users. Posts in a social environment, articles or topics on a content platform, a screen or widget in your UI, a product in your inventory - groups of any of these things – Personas can evolve models of anything in your system!  Get creative!
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
 * A block of natural-language text used to configure an aspect of Numeno. In the case of the Article Recommender API, the Persona describes your interests, vibe and target audience, so that the API can produce a curated selection of Articles from across the web. To create a new Feed, simply create a new Persona.
 *
 * @export
 * @interface Persona
 */
export interface Persona {
  /**
   * The unique ID of the Persona.
   * @type {string}
   * @memberof Persona
   */
  id: string
  /**
   * The name of the Persona for easy reference.
   * @type {string}
   * @memberof Persona
   */
  name: string
  /**
   * The natural-language body of the Persona.
   * @type {string}
   * @memberof Persona
   */
  body: string
  /**
   * The date the key was created in ISO 8601 UTC datetime.
   * @type {Date}
   * @memberof Persona
   */
  createdAt?: Date
  /**
   * The date the key was last updated in ISO 8601 UTC datetime.
   * @type {Date}
   * @memberof Persona
   */
  updatedAt?: Date
}

/**
 * Check if a given object implements the Persona interface.
 */
export function instanceOfPersona(value: object): value is Persona {
  if (!('id' in value) || value['id'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('body' in value) || value['body'] === undefined) return false
  return true
}

export function PersonaFromJSON(json: any): Persona {
  return PersonaFromJSONTyped(json, false)
}

export function PersonaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Persona {
  if (json == null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
    body: json['body'],
    createdAt:
      json['createdAt'] == null ? undefined : new Date(json['createdAt']),
    updatedAt:
      json['updatedAt'] == null ? undefined : new Date(json['updatedAt']),
  }
}

export function PersonaToJSON(json: any): Persona {
  return PersonaToJSONTyped(json, false)
}

export function PersonaToJSONTyped(
  value?: Persona | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    id: value['id'],
    name: value['name'],
    body: value['body'],
    createdAt:
      value['createdAt'] == null ? undefined : value['createdAt'].toISOString(),
    updatedAt:
      value['updatedAt'] == null ? undefined : value['updatedAt'].toISOString(),
  }
}
