# openapi.api.MapApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMapMarkers**](MapApi.md#getmapmarkers) | **GET** /map/markers | 
[**reverseGeocode**](MapApi.md#reversegeocode) | **GET** /map/reverse-geocode | 


# **getMapMarkers**
> List<MapMarkerResponseDto> getMapMarkers(fileCreatedAfter, fileCreatedBefore, isArchived, isFavorite, withPartners, withSharedAlbums)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure API key authorization: cookie
//defaultApiClient.getAuthentication<ApiKeyAuth>('cookie').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('cookie').apiKeyPrefix = 'Bearer';
// TODO Configure API key authorization: api_key
//defaultApiClient.getAuthentication<ApiKeyAuth>('api_key').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('api_key').apiKeyPrefix = 'Bearer';
// TODO Configure HTTP Bearer authorization: bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MapApi();
final fileCreatedAfter = 2013-10-20T19:20:30+01:00; // DateTime | 
final fileCreatedBefore = 2013-10-20T19:20:30+01:00; // DateTime | 
final isArchived = true; // bool | 
final isFavorite = true; // bool | 
final withPartners = true; // bool | 
final withSharedAlbums = true; // bool | 

try {
    final result = api_instance.getMapMarkers(fileCreatedAfter, fileCreatedBefore, isArchived, isFavorite, withPartners, withSharedAlbums);
    print(result);
} catch (e) {
    print('Exception when calling MapApi->getMapMarkers: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileCreatedAfter** | **DateTime**|  | [optional] 
 **fileCreatedBefore** | **DateTime**|  | [optional] 
 **isArchived** | **bool**|  | [optional] 
 **isFavorite** | **bool**|  | [optional] 
 **withPartners** | **bool**|  | [optional] 
 **withSharedAlbums** | **bool**|  | [optional] 

### Return type

[**List<MapMarkerResponseDto>**](MapMarkerResponseDto.md)

### Authorization

[cookie](../README.md#cookie), [api_key](../README.md#api_key), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reverseGeocode**
> List<MapReverseGeocodeResponseDto> reverseGeocode(lat, lon)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure API key authorization: cookie
//defaultApiClient.getAuthentication<ApiKeyAuth>('cookie').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('cookie').apiKeyPrefix = 'Bearer';
// TODO Configure API key authorization: api_key
//defaultApiClient.getAuthentication<ApiKeyAuth>('api_key').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('api_key').apiKeyPrefix = 'Bearer';
// TODO Configure HTTP Bearer authorization: bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MapApi();
final lat = 1.2; // double | 
final lon = 1.2; // double | 

try {
    final result = api_instance.reverseGeocode(lat, lon);
    print(result);
} catch (e) {
    print('Exception when calling MapApi->reverseGeocode: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **double**|  | 
 **lon** | **double**|  | 

### Return type

[**List<MapReverseGeocodeResponseDto>**](MapReverseGeocodeResponseDto.md)

### Authorization

[cookie](../README.md#cookie), [api_key](../README.md#api_key), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

