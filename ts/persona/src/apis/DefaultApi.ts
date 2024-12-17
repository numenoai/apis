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

import * as runtime from '../runtime'
import type {
  ErrorResponse,
  HealthCheck,
  Persona,
  PersonaList,
  PersonaNew,
  PersonaUpdate,
  Scopes,
} from '../models/index'
import {
  ErrorResponseFromJSON,
  ErrorResponseToJSON,
  HealthCheckFromJSON,
  HealthCheckToJSON,
  PersonaFromJSON,
  PersonaToJSON,
  PersonaListFromJSON,
  PersonaListToJSON,
  PersonaNewFromJSON,
  PersonaNewToJSON,
  PersonaUpdateFromJSON,
  PersonaUpdateToJSON,
  ScopesFromJSON,
  ScopesToJSON,
} from '../models/index'

export interface CreatePersonaRequest {
  personaNew: PersonaNew
}

export interface DeletePersonaRequest {
  id: string
}

export interface GetPersonaByIdRequest {
  id: string
}

export interface GetPersonasRequest {
  cursor?: string
  limit?: number
}

export interface UpdatePersonaRequest {
  id: string
  personaUpdate: PersonaUpdate
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * Create a new Persona
   */
  async createPersonaRaw(
    requestParameters: CreatePersonaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Persona>> {
    if (requestParameters['personaNew'] == null) {
      throw new runtime.RequiredError(
        'personaNew',
        'Required parameter "personaNew" was null or undefined when calling createPersona().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Numeno-Key'] =
        await this.configuration.apiKey('X-Numeno-Key') // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/v1/personas`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: PersonaNewToJSON(requestParameters['personaNew']),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PersonaFromJSON(jsonValue),
    )
  }

  /**
   * Create a new Persona
   */
  async createPersona(
    requestParameters: CreatePersonaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Persona> {
    const response = await this.createPersonaRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Delete a Persona by ID
   */
  async deletePersonaRaw(
    requestParameters: DeletePersonaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['id'] == null) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter "id" was null or undefined when calling deletePersona().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Numeno-Key'] =
        await this.configuration.apiKey('X-Numeno-Key') // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/v1/personas/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters['id'])),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * Delete a Persona by ID
   */
  async deletePersona(
    requestParameters: DeletePersonaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.deletePersonaRaw(requestParameters, initOverrides)
  }

  /**
   * Get a specific Persona by ID
   */
  async getPersonaByIdRaw(
    requestParameters: GetPersonaByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Persona>> {
    if (requestParameters['id'] == null) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter "id" was null or undefined when calling getPersonaById().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Numeno-Key'] =
        await this.configuration.apiKey('X-Numeno-Key') // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/v1/personas/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters['id'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PersonaFromJSON(jsonValue),
    )
  }

  /**
   * Get a specific Persona by ID
   */
  async getPersonaById(
    requestParameters: GetPersonaByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Persona> {
    const response = await this.getPersonaByIdRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Get a list of all Personas
   */
  async getPersonasRaw(
    requestParameters: GetPersonasRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PersonaList>> {
    const queryParameters: any = {}

    if (requestParameters['cursor'] != null) {
      queryParameters['cursor'] = requestParameters['cursor']
    }

    if (requestParameters['limit'] != null) {
      queryParameters['limit'] = requestParameters['limit']
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Numeno-Key'] =
        await this.configuration.apiKey('X-Numeno-Key') // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/v1/personas`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PersonaListFromJSON(jsonValue),
    )
  }

  /**
   * Get a list of all Personas
   */
  async getPersonas(
    requestParameters: GetPersonasRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PersonaList> {
    const response = await this.getPersonasRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get a list of all the Scopes supported by the Numeno Persona API. Scopes are used to let API Keys access only certain parts of the API.  Scopes are expressed as a string of the form `api:resource:action`: - `persona:personas:read` - can read any Persona (eg. `GET` `/personas`, `/personas/:id`, etc.) - `persona:personas:write` - can write (and read) any Persona - `persona:personas:*` - can perform any action on Personas - `persona:*:read` - can read any resource on `persona` - `*:*:*` - can do everything
   * Get the Scopes for this API
   */
  async getScopesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Scopes>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/v1/scopes`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ScopesFromJSON(jsonValue),
    )
  }

  /**
   * Get a list of all the Scopes supported by the Numeno Persona API. Scopes are used to let API Keys access only certain parts of the API.  Scopes are expressed as a string of the form `api:resource:action`: - `persona:personas:read` - can read any Persona (eg. `GET` `/personas`, `/personas/:id`, etc.) - `persona:personas:write` - can write (and read) any Persona - `persona:personas:*` - can perform any action on Personas - `persona:*:read` - can read any resource on `persona` - `*:*:*` - can do everything
   * Get the Scopes for this API
   */
  async getScopes(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Scopes> {
    const response = await this.getScopesRaw(initOverrides)
    return await response.value()
  }

  /**
   * A health check endpoint. Returns a code indicating the health of the Persona service.
   * Check the health of the API
   */
  async healthCheckRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<HealthCheck>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/health`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      HealthCheckFromJSON(jsonValue),
    )
  }

  /**
   * A health check endpoint. Returns a code indicating the health of the Persona service.
   * Check the health of the API
   */
  async healthCheck(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<HealthCheck> {
    const response = await this.healthCheckRaw(initOverrides)
    return await response.value()
  }

  /**
   * Update a Persona by ID
   */
  async updatePersonaRaw(
    requestParameters: UpdatePersonaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Persona>> {
    if (requestParameters['id'] == null) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter "id" was null or undefined when calling updatePersona().',
      )
    }

    if (requestParameters['personaUpdate'] == null) {
      throw new runtime.RequiredError(
        'personaUpdate',
        'Required parameter "personaUpdate" was null or undefined when calling updatePersona().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-Numeno-Key'] =
        await this.configuration.apiKey('X-Numeno-Key') // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/v1/personas/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters['id'])),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: PersonaUpdateToJSON(requestParameters['personaUpdate']),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PersonaFromJSON(jsonValue),
    )
  }

  /**
   * Update a Persona by ID
   */
  async updatePersona(
    requestParameters: UpdatePersonaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Persona> {
    const response = await this.updatePersonaRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }
}
