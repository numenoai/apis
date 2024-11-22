# NumenoAdmin\DefaultApi

All URIs are relative to https://api.numeno.ai/admin, except if the operation defines another base path.

| Method                                             | HTTP request                     | Description                         |
| -------------------------------------------------- | -------------------------------- | ----------------------------------- |
| [**createUser()**](DefaultApi.md#createUser)       | **POST** /v1/users               | Create a new user                   |
| [**createUserKey()**](DefaultApi.md#createUserKey) | **POST** /v1/keys                | Create a new key for a user         |
| [**deleteUser()**](DefaultApi.md#deleteUser)       | **DELETE** /v1/users/{idOrWebId} | Delete a user                       |
| [**deleteUserKey()**](DefaultApi.md#deleteUserKey) | **DELETE** /v1/keys/{key}        | Delete a key                        |
| [**getKey()**](DefaultApi.md#getKey)               | **GET** /v1/keys/{key}           | Get information about a key         |
| [**getKeys()**](DefaultApi.md#getKeys)             | **GET** /v1/keys                 | Get all keys, optionally for a user |
| [**getUser()**](DefaultApi.md#getUser)             | **GET** /v1/users/{idOrWebId}    | Get information about a user        |
| [**getUsers()**](DefaultApi.md#getUsers)           | **GET** /v1/users                | Get all users                       |
| [**healthCheck()**](DefaultApi.md#healthCheck)     | **GET** /health                  | Check the health of the API         |
| [**updateUser()**](DefaultApi.md#updateUser)       | **PUT** /v1/users/{idOrWebId}    | Update a user                       |
| [**updateUserKey()**](DefaultApi.md#updateUserKey) | **PUT** /v1/keys/{key}           | Update a key                        |

## `createUser()`

```php
createUser($user_new): \NumenoAdmin\Model\UserInfo
```

Create a new user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_new = new \NumenoAdmin\Model\UserNew(); // \NumenoAdmin\Model\UserNew

try {
    $result = $apiInstance->createUser($user_new);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->createUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name         | Type                                                  | Description | Notes |
| ------------ | ----------------------------------------------------- | ----------- | ----- |
| **user_new** | [**\NumenoAdmin\Model\UserNew**](../Model/UserNew.md) |             |       |

### Return type

[**\NumenoAdmin\Model\UserInfo**](../Model/UserInfo.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createUserKey()`

```php
createUserKey($user_id, $key_new): \NumenoAdmin\Model\KeyInfoFull
```

Create a new key for a user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 'user_id_example'; // string | The user id
$key_new = new \NumenoAdmin\Model\KeyNew(); // \NumenoAdmin\Model\KeyNew

try {
    $result = $apiInstance->createUserKey($user_id, $key_new);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->createUserKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name        | Type                                                | Description | Notes      |
| ----------- | --------------------------------------------------- | ----------- | ---------- |
| **user_id** | **string**                                          | The user id |            |
| **key_new** | [**\NumenoAdmin\Model\KeyNew**](../Model/KeyNew.md) |             | [optional] |

### Return type

[**\NumenoAdmin\Model\KeyInfoFull**](../Model/KeyInfoFull.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteUser()`

```php
deleteUser($id_or_web_id)
```

Delete a user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id_or_web_id = 'id_or_web_id_example'; // string | The user id or the user web id

try {
    $apiInstance->deleteUser($id_or_web_id);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->deleteUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name             | Type       | Description                    | Notes |
| ---------------- | ---------- | ------------------------------ | ----- |
| **id_or_web_id** | **string** | The user id or the user web id |       |

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

## `deleteUserKey()`

```php
deleteUserKey($key)
```

Delete a key

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$key = 'key_example'; // string

try {
    $apiInstance->deleteUserKey($key);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->deleteUserKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name    | Type       | Description | Notes |
| ------- | ---------- | ----------- | ----- |
| **key** | **string** |             |       |

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

## `getKey()`

```php
getKey($key): \NumenoAdmin\Model\KeyInfoFull
```

Get information about a key

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$key = 'key_example'; // string

try {
    $result = $apiInstance->getKey($key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name    | Type       | Description | Notes |
| ------- | ---------- | ----------- | ----- |
| **key** | **string** |             |       |

### Return type

[**\NumenoAdmin\Model\KeyInfoFull**](../Model/KeyInfoFull.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getKeys()`

```php
getKeys($user_id, $cursor, $limit): \NumenoAdmin\Model\Keys
```

Get all keys, optionally for a user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 'user_id_example'; // string | The user id
$cursor = 'cursor_example'; // string | Cursor for paginating results, obtained from the previous response. Omit or pass an empty string to start from the beginning.
$limit = 100; // int | Number of users to return per page

try {
    $result = $apiInstance->getKeys($user_id, $cursor, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getKeys: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name        | Type       | Description                                                                                                                   | Notes                       |
| ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **user_id** | **string** | The user id                                                                                                                   | [optional]                  |
| **cursor**  | **string** | Cursor for paginating results, obtained from the previous response. Omit or pass an empty string to start from the beginning. | [optional]                  |
| **limit**   | **int**    | Number of users to return per page                                                                                            | [optional] [default to 100] |

### Return type

[**\NumenoAdmin\Model\Keys**](../Model/Keys.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUser()`

```php
getUser($id_or_web_id): \NumenoAdmin\Model\UserInfo
```

Get information about a user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id_or_web_id = 'id_or_web_id_example'; // string | The user id or the user web id

try {
    $result = $apiInstance->getUser($id_or_web_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name             | Type       | Description                    | Notes |
| ---------------- | ---------- | ------------------------------ | ----- |
| **id_or_web_id** | **string** | The user id or the user web id |       |

### Return type

[**\NumenoAdmin\Model\UserInfo**](../Model/UserInfo.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUsers()`

```php
getUsers($cursor, $limit): \NumenoAdmin\Model\Users
```

Get all users

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$cursor = 'cursor_example'; // string | Cursor for paginating results, obtained from the previous response. Omit or pass an empty string to start from the beginning.
$limit = 100; // int | Number of users to return per page

try {
    $result = $apiInstance->getUsers($cursor, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->getUsers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name       | Type       | Description                                                                                                                   | Notes                       |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **cursor** | **string** | Cursor for paginating results, obtained from the previous response. Omit or pass an empty string to start from the beginning. | [optional]                  |
| **limit**  | **int**    | Number of users to return per page                                                                                            | [optional] [default to 100] |

### Return type

[**\NumenoAdmin\Model\Users**](../Model/Users.md)

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
healthCheck(): \NumenoAdmin\Model\HealthCheck
```

Check the health of the API

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new NumenoAdmin\Api\DefaultApi(
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

[**\NumenoAdmin\Model\HealthCheck**](../Model/HealthCheck.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateUser()`

```php
updateUser($id_or_web_id, $user_update): \NumenoAdmin\Model\UserInfo
```

Update a user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id_or_web_id = 'id_or_web_id_example'; // string | The user id or the user web id
$user_update = new \NumenoAdmin\Model\UserUpdate(); // \NumenoAdmin\Model\UserUpdate

try {
    $result = $apiInstance->updateUser($id_or_web_id, $user_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->updateUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name             | Type                                                        | Description                    | Notes |
| ---------------- | ----------------------------------------------------------- | ------------------------------ | ----- |
| **id_or_web_id** | **string**                                                  | The user id or the user web id |       |
| **user_update**  | [**\NumenoAdmin\Model\UserUpdate**](../Model/UserUpdate.md) |                                |       |

### Return type

[**\NumenoAdmin\Model\UserInfo**](../Model/UserInfo.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateUserKey()`

```php
updateUserKey($key, $key_update): \NumenoAdmin\Model\KeyInfoFull
```

Update a key

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKey('X-Numeno-Admin-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = NumenoAdmin\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Numeno-Admin-Key', 'Bearer');


$apiInstance = new NumenoAdmin\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$key = 'key_example'; // string
$key_update = new \NumenoAdmin\Model\KeyUpdate(); // \NumenoAdmin\Model\KeyUpdate

try {
    $result = $apiInstance->updateUserKey($key, $key_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->updateUserKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name           | Type                                                      | Description | Notes |
| -------------- | --------------------------------------------------------- | ----------- | ----- |
| **key**        | **string**                                                |             |       |
| **key_update** | [**\NumenoAdmin\Model\KeyUpdate**](../Model/KeyUpdate.md) |             |       |

### Return type

[**\NumenoAdmin\Model\KeyInfoFull**](../Model/KeyInfoFull.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
