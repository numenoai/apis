# Persona Typescript API

Use the Numeno Persona API to create and manage Numeno Personas.

Evolving a Persona over time is dead-simple: create a Persona, then send natural-language descriptions of your users’ in-app activities to the Persona API. Under the hood, we create a rich set of models of the system that evolve over time. Then, ask Numeno to personalize some part of your experience using the Persona. Numeno will use our models to tailor your software to each user’s unique preferences and habits, allowing you to dynamically adjust your offerings.

For example, connect a Persona to the Numeno Article Recommender API to generate Article Feeds that evolve over time as your Persona evloves with user interaction.

Personas are not limited to modelling users. Posts in a social environment, articles or topics on a content platform, a screen or widget in your UI, a product in your inventory - groups of any of these things – Personas can evolve models of anything in your system! Get creative!

For more information, please visit [https://numeno.ai/](https://numeno.ai/).

## Installation

Requires [Node.js](https://nodejs.org/en/download/) version 18.0 or above:

- When installing Node.js, you are recommended to check all checkboxes related to dependencies.

Add to your package with:

```sh
npm add @numeno/api-persona
```

## Usage

```typescript
import * as NumenoPersona from '@numeno/api-persona'

// Create an interface to the Numeno Persona API.
const config = new NumenoPersona.Configuration({
  apiKey: 'YOUR_API_KEY',
})

const api = new NumenoPersona.DefaultApi(config)

// Create a new Persona.
const createPersonaCall = api.createPersona({
  personaUpdate: {
    name: 'FriendlyNameOfPersona',
    body: 'Initial block of natural-language Persona text goes here.',
  },
})

createPersonaCall
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log('Error while calling createPersona:')
    console.log(error)
  })
```
