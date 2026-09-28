//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

import 'package:openapi/api.dart';
import 'package:test/test.dart';


/// tests for AssetsApi
void main() {
  // final instance = AssetsApi();

  group('tests for AssetsApi', () {
    // Checks if assets exist by checksums
    //
    //Future<AssetBulkUploadCheckResponseDto> checkBulkUpload(AssetBulkUploadCheckDto assetBulkUploadCheckDto) async
    test('test checkBulkUpload', () async {
      // TODO
    });

    // Checks if multiple assets exist on the server and returns all existing - used by background backup
    //
    //Future<CheckExistingAssetsResponseDto> checkExistingAssets(CheckExistingAssetsDto checkExistingAssetsDto) async
    test('test checkExistingAssets', () async {
      // TODO
    });

    //Future deleteAssets(AssetBulkDeleteDto assetBulkDeleteDto) async
    test('test deleteAssets', () async {
      // TODO
    });

    //Future<MultipartFile> downloadAsset(String id, { String key }) async
    test('test downloadAsset', () async {
      // TODO
    });

    // Get all asset of a device that are in the database, ID only.
    //
    //Future<List<String>> getAllUserAssetsByDeviceId(String deviceId) async
    test('test getAllUserAssetsByDeviceId', () async {
      // TODO
    });

    //Future<AssetResponseDto> getAssetInfo(String id, { String key }) async
    test('test getAssetInfo', () async {
      // TODO
    });

    //Future<AssetStatsResponseDto> getAssetStatistics({ bool isArchived, bool isFavorite, bool isTrashed }) async
    test('test getAssetStatistics', () async {
      // TODO
    });

    //Future<List<MemoryLaneResponseDto>> getMemoryLane(int day, int month) async
    test('test getMemoryLane', () async {
      // TODO
    });

    // This property was deprecated in v1.116.0
    //
    //Future<List<AssetResponseDto>> getRandom({ num count }) async
    test('test getRandom', () async {
      // TODO
    });

    //Future<MultipartFile> playAssetVideo(String id, { String key }) async
    test('test playAssetVideo', () async {
      // TODO
    });

    // Replace the asset with new file, without changing its id
    //
    //Future<AssetMediaResponseDto> replaceAsset(String id, MultipartFile assetData, String deviceAssetId, String deviceId, DateTime fileCreatedAt, DateTime fileModifiedAt, { String key, String duration }) async
    test('test replaceAsset', () async {
      // TODO
    });

    //Future runAssetJobs(AssetJobsDto assetJobsDto) async
    test('test runAssetJobs', () async {
      // TODO
    });

    //Future<AssetResponseDto> updateAsset(String id, UpdateAssetDto updateAssetDto) async
    test('test updateAsset', () async {
      // TODO
    });

    //Future updateAssets(AssetBulkUpdateDto assetBulkUpdateDto) async
    test('test updateAssets', () async {
      // TODO
    });

    //Future<AssetMediaResponseDto> uploadAsset(MultipartFile assetData, String deviceAssetId, String deviceId, DateTime fileCreatedAt, DateTime fileModifiedAt, { String key, String xImmichChecksum, String duration, bool isArchived, bool isFavorite, bool isVisible, String livePhotoVideoId, MultipartFile sidecarData }) async
    test('test uploadAsset', () async {
      // TODO
    });

    //Future<MultipartFile> viewAsset(String id, { String key, AssetMediaSize size }) async
    test('test viewAsset', () async {
      // TODO
    });

  });
}
