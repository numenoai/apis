# NumenoPersona\DefaultApi

All URIs are relative to https://api.numeno.ai/persona, except if the operation defines another base path.

| Method                                               | HTTP request                        | Description                  |
| ---------------------------------------------------- | ----------------------------------- | ---------------------------- |
| [**createPersona()**](DefaultApi.md#createPersona)   | **POST** /v1/personas               | Create a new persona         |
| [**deletePersona()**](DefaultApi.md#deletePersona)   | **DELETE** /v1/personas/{personaId} | Delete a persona by ID       |
| [**getPersonaById()**](DefaultApi.md#getPersonaById) | **GET** /v1/personas/{personaId}    | Get a specific persona by ID |
| [**getPersonas()**](DefaultApi.md#getPersonas)       | **GET** /v1/personas                | Get a list of all personas   |
| [**healthCheck()**](DefaultApi.md#healthCheck)       | **GET** /health                     | Check the health of the API  |
| [**updatePersona()**](DefaultApi.md#updatePersona)   | **PUT** /v1/personas/{personaId}    | Update a persona by ID       |

## `createPersona()`

```php
createPersona($persona_update): \NumenoPersona\Model\Persona
```

Create a new persona

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Key', 'Bearer');


$apiInstance = new NumenoPersona\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$persona_update = new \NumenoPersona\Model\PersonaUpdate(); // \NumenoPersona\Model\PersonaUpdate

try {
    $result = $apiInstance->createPersona($persona_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->createPersona: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name               | Type                                                                | Description | Notes |
| ------------------ | ------------------------------------------------------------------- | ----------- | ----- |
| **persona_update** | [**\NumenoPersona\Model\PersonaUpdate**](../Model/PersonaUpdate.md) |             |       |

### Return type

[**\NumenoPersona\Model\Persona**](../Model/Persona.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deletePersona()`

```php
deletePersona($persona_id)
```

Delete a persona by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Key', 'Bearer');


$apiInstance = new NumenoPersona\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$persona_id = 'persona_id_example'; // string

try {
    $apiInstance->deletePersona($persona_id);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->deletePersona: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **persona_id** | **string** |             |       |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPersonaById()`

```php
getPersonaById($persona_id): \NumenoPersona\Model\Persona
```

Get a specific persona by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Key', 'Bearer');


$apiInstance = new NumenoPersona\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$persona_id = 'persona_id_example'; // string

try {
    $result = $apiInstance->getPersonaById($persona_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getPersonaById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **persona_id** | **string** |             |       |

### Return type

[**\NumenoPersona\Model\Persona**](../Model/Persona.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPersonas()`

```php
getPersonas($cursor, $limit): \NumenoPersona\Model\Personas
```

Get a list of all personas

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Key', 'Bearer');


$apiInstance = new NumenoPersona\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$cursor = 'cursor_example'; // string | Cursor for paginating results, obtained from the previous response. Omit or pass an empty string to start from the beginning.
$limit = 10; // int | Number of personas to return per page

try {
    $result = $apiInstance->getPersonas($cursor, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getPersonas: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name       | Type       | Description                                                                                                                   | Notes                      |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **cursor** | **string** | Cursor for paginating results, obtained from the previous response. Omit or pass an empty string to start from the beginning. | [optional]                 |
| **limit**  | **int**    | Number of personas to return per page                                                                                         | [optional] [default to 10] |

### Return type

[**\NumenoPersona\Model\Personas**](../Model/Personas.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `healthCheck()`

```php
healthCheck(): \NumenoPersona\Model\HealthCheck
```

Check the health of the API

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new NumenoPersona\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->healthCheck();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->healthCheck: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\NumenoPersona\Model\HealthCheck**](../Model/HealthCheck.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updatePersona()`

```php
updatePersona($persona_id, $persona_update): \NumenoPersona\Model\Persona
```

Update a persona by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoPersona\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Key', 'Bearer');


$apiInstance = new NumenoPersona\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$persona_id = 'persona_id_example'; // string
$persona_update = new \NumenoPersona\Model\PersonaUpdate(); // \NumenoPersona\Model\PersonaUpdate

try {
    $result = $apiInstance->updatePersona($persona_id, $persona_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->updatePersona: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name               | Type                                                                | Description | Notes |
| ------------------ | ------------------------------------------------------------------- | ----------- | ----- |
| **persona_id**     | **string**                                                          |             |       |
| **persona_update** | [**\NumenoPersona\Model\PersonaUpdate**](../Model/PersonaUpdate.md) |             |       |

### Return type

[**\NumenoPersona\Model\Persona**](../Model/Persona.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
