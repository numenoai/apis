# Numeno public APIs

This repo contains contains for accessing Numeno public APIs in different languages.

- [Typescript APIs](./ts/README.md)

PHP wrappers for the APIs are in separate GitHub repositories:
- [Persona API](https://github.com/numenoai/apis-php-persona)
- [Article Recommender API](https://github.com/numenoai/apis-php-art-rec)
- [Admin API](https://github.com/numenoai/apis-php-admin)

## Developement documentation

Use the following commands:

- `make deps`: Installs all dependencies in all languages
- `make build`: Builds all the APIs in all languages
- `make publish`: This should only be run by a GitHub action

To generate a new public version of the APIs see this [private documentation](https://github.com/waverlyai/numeno-apis/blob/main/docs/public.md).
