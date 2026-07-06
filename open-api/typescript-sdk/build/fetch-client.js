/**
 * Immich
 * 1.125.6
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
import * as QS from "@oazapfts/runtime/query";
export const defaults = {
    headers: {},
    baseUrl: "/api",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "/api"
};
export function getActivities({ albumId, assetId, level, $type, userId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/activities${QS.query(QS.explode({
        albumId,
        assetId,
        level,
        "type": $type,
        userId
    }))}`, {
        ...opts
    }));
}
export function createActivity({ activityCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/activities", oazapfts.json({
        ...opts,
        method: "POST",
        body: activityCreateDto
    })));
}
export function getActivityStatistics({ albumId, assetId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/activities/statistics${QS.query(QS.explode({
        albumId,
        assetId
    }))}`, {
        ...opts
    }));
}
export function deleteActivity({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/activities/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function searchUsersAdmin({ withDeleted }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/admin/users${QS.query(QS.explode({
        withDeleted
    }))}`, {
        ...opts
    }));
}
export function createUserAdmin({ userAdminCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/admin/users", oazapfts.json({
        ...opts,
        method: "POST",
        body: userAdminCreateDto
    })));
}
export function deleteUserAdmin({ id, userAdminDeleteDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/admin/users/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: userAdminDeleteDto
    })));
}
export function getUserAdmin({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/admin/users/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateUserAdmin({ id, userAdminUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/admin/users/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: userAdminUpdateDto
    })));
}
export function getUserPreferencesAdmin({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/admin/users/${encodeURIComponent(id)}/preferences`, {
        ...opts
    }));
}
export function updateUserPreferencesAdmin({ id, userPreferencesUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/admin/users/${encodeURIComponent(id)}/preferences`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: userPreferencesUpdateDto
    })));
}
export function restoreUserAdmin({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/admin/users/${encodeURIComponent(id)}/restore`, {
        ...opts,
        method: "POST"
    }));
}
export function getAllAlbums({ assetId, shared }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/albums${QS.query(QS.explode({
        assetId,
        shared
    }))}`, {
        ...opts
    }));
}
export function createAlbum({ createAlbumDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/albums", oazapfts.json({
        ...opts,
        method: "POST",
        body: createAlbumDto
    })));
}
export function getAlbumStatistics(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/albums/statistics", {
        ...opts
    }));
}
export function deleteAlbum({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/albums/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getAlbumInfo({ id, key, withoutAssets }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/albums/${encodeURIComponent(id)}${QS.query(QS.explode({
        key,
        withoutAssets
    }))}`, {
        ...opts
    }));
}
export function updateAlbumInfo({ id, updateAlbumDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/albums/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: updateAlbumDto
    })));
}
export function removeAssetFromAlbum({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/albums/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: bulkIdsDto
    })));
}
export function addAssetsToAlbum({ id, key, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/albums/${encodeURIComponent(id)}/assets${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bulkIdsDto
    })));
}
export function removeUserFromAlbum({ id, userId }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/albums/${encodeURIComponent(id)}/user/${encodeURIComponent(userId)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function updateAlbumUser({ id, userId, updateAlbumUserDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/albums/${encodeURIComponent(id)}/user/${encodeURIComponent(userId)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateAlbumUserDto
    })));
}
export function addUsersToAlbum({ id, addUsersDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/albums/${encodeURIComponent(id)}/users`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: addUsersDto
    })));
}
export function getApiKeys(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api-keys", {
        ...opts
    }));
}
export function createApiKey({ apiKeyCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api-keys", oazapfts.json({
        ...opts,
        method: "POST",
        body: apiKeyCreateDto
    })));
}
export function deleteApiKey({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/api-keys/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getApiKey({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api-keys/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateApiKey({ id, apiKeyUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api-keys/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: apiKeyUpdateDto
    })));
}
export function deleteAssets({ assetBulkDeleteDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/assets", oazapfts.json({
        ...opts,
        method: "DELETE",
        body: assetBulkDeleteDto
    })));
}
export function uploadAsset({ key, xImmichChecksum, assetMediaCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets${QS.query(QS.explode({
        key
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: assetMediaCreateDto,
        headers: oazapfts.mergeHeaders(opts?.headers, {
            "x-immich-checksum": xImmichChecksum
        })
    })));
}
export function updateAssets({ assetBulkUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/assets", oazapfts.json({
        ...opts,
        method: "PUT",
        body: assetBulkUpdateDto
    })));
}
/**
 * Checks if assets exist by checksums
 */
export function checkBulkUpload({ assetBulkUploadCheckDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/assets/bulk-upload-check", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetBulkUploadCheckDto
    })));
}
/**
 * Get all asset of a device that are in the database, ID only.
 */
export function getAllUserAssetsByDeviceId({ deviceId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets/device/${encodeURIComponent(deviceId)}`, {
        ...opts
    }));
}
/**
 * Checks if multiple assets exist on the server and returns all existing - used by background backup
 */
export function checkExistingAssets({ checkExistingAssetsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/assets/exist", oazapfts.json({
        ...opts,
        method: "POST",
        body: checkExistingAssetsDto
    })));
}
export function runAssetJobs({ assetJobsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/assets/jobs", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetJobsDto
    })));
}
export function getMemoryLane({ day, month }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets/memory-lane${QS.query(QS.explode({
        day,
        month
    }))}`, {
        ...opts
    }));
}
/**
 * This property was deprecated in v1.116.0
 */
export function getRandom({ count }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets/random${QS.query(QS.explode({
        count
    }))}`, {
        ...opts
    }));
}
export function getAssetStatistics({ isArchived, isFavorite, isTrashed }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets/statistics${QS.query(QS.explode({
        isArchived,
        isFavorite,
        isTrashed
    }))}`, {
        ...opts
    }));
}
export function getAssetInfo({ id, key }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets/${encodeURIComponent(id)}${QS.query(QS.explode({
        key
    }))}`, {
        ...opts
    }));
}
export function updateAsset({ id, updateAssetDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateAssetDto
    })));
}
export function downloadAsset({ id, key }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/assets/${encodeURIComponent(id)}/original${QS.query(QS.explode({
        key
    }))}`, {
        ...opts
    }));
}
/**
 * Replace the asset with new file, without changing its id
 */
export function replaceAsset({ id, key, assetMediaReplaceDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/assets/${encodeURIComponent(id)}/original${QS.query(QS.explode({
        key
    }))}`, oazapfts.multipart({
        ...opts,
        method: "PUT",
        body: assetMediaReplaceDto
    })));
}
export function viewAsset({ id, key, size }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/assets/${encodeURIComponent(id)}/thumbnail${QS.query(QS.explode({
        key,
        size
    }))}`, {
        ...opts
    }));
}
export function playAssetVideo({ id, key }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/assets/${encodeURIComponent(id)}/video/playback${QS.query(QS.explode({
        key
    }))}`, {
        ...opts
    }));
}
export function getAuditDeletes({ after, entityType, userId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/audit/deletes${QS.query(QS.explode({
        after,
        entityType,
        userId
    }))}`, {
        ...opts
    }));
}
export function signUpAdmin({ signUpDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/admin-sign-up", oazapfts.json({
        ...opts,
        method: "POST",
        body: signUpDto
    })));
}
export function changePassword({ changePasswordDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/change-password", oazapfts.json({
        ...opts,
        method: "POST",
        body: changePasswordDto
    })));
}
export function login({ loginCredentialDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/login", oazapfts.json({
        ...opts,
        method: "POST",
        body: loginCredentialDto
    })));
}
export function logout(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/logout", {
        ...opts,
        method: "POST"
    }));
}
export function validateAccessToken(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/validateToken", {
        ...opts,
        method: "POST"
    }));
}
export function downloadArchive({ key, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/download/archive${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: assetIdsDto
    })));
}
export function getDownloadInfo({ key, downloadInfoDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/download/info${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: downloadInfoDto
    })));
}
export function getAssetDuplicates(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/duplicates", {
        ...opts
    }));
}
export function getFaces({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/faces${QS.query(QS.explode({
        id
    }))}`, {
        ...opts
    }));
}
export function reassignFacesById({ id, faceDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/faces/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: faceDto
    })));
}
export function getAllJobsStatus(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/jobs", {
        ...opts
    }));
}
export function createJob({ jobCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/jobs", oazapfts.json({
        ...opts,
        method: "POST",
        body: jobCreateDto
    })));
}
export function sendJobCommand({ id, jobCommandDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/jobs/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: jobCommandDto
    })));
}
export function getAllLibraries(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/libraries", {
        ...opts
    }));
}
export function createLibrary({ createLibraryDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/libraries", oazapfts.json({
        ...opts,
        method: "POST",
        body: createLibraryDto
    })));
}
export function deleteLibrary({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/libraries/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getLibrary({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/libraries/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateLibrary({ id, updateLibraryDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/libraries/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateLibraryDto
    })));
}
export function scanLibrary({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/libraries/${encodeURIComponent(id)}/scan`, {
        ...opts,
        method: "POST"
    }));
}
export function getLibraryStatistics({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/libraries/${encodeURIComponent(id)}/statistics`, {
        ...opts
    }));
}
export function validate({ id, validateLibraryDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/libraries/${encodeURIComponent(id)}/validate`, oazapfts.json({
        ...opts,
        method: "POST",
        body: validateLibraryDto
    })));
}
export function getMapMarkers({ fileCreatedAfter, fileCreatedBefore, isArchived, isFavorite, withPartners, withSharedAlbums }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/map/markers${QS.query(QS.explode({
        fileCreatedAfter,
        fileCreatedBefore,
        isArchived,
        isFavorite,
        withPartners,
        withSharedAlbums
    }))}`, {
        ...opts
    }));
}
export function reverseGeocode({ lat, lon }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/map/reverse-geocode${QS.query(QS.explode({
        lat,
        lon
    }))}`, {
        ...opts
    }));
}
export function searchMemories(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/memories", {
        ...opts
    }));
}
export function createMemory({ memoryCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/memories", oazapfts.json({
        ...opts,
        method: "POST",
        body: memoryCreateDto
    })));
}
export function deleteMemory({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/memories/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getMemory({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateMemory({ id, memoryUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: memoryUpdateDto
    })));
}
export function removeMemoryAssets({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: bulkIdsDto
    })));
}
export function addMemoryAssets({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bulkIdsDto
    })));
}
export function getNotificationTemplate({ name, templateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/notifications/templates/${encodeURIComponent(name)}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: templateDto
    })));
}
export function sendTestEmail({ systemConfigSmtpDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/notifications/test-email", oazapfts.json({
        ...opts,
        method: "POST",
        body: systemConfigSmtpDto
    })));
}
export function startOAuth({ oAuthConfigDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/authorize", oazapfts.json({
        ...opts,
        method: "POST",
        body: oAuthConfigDto
    })));
}
export function finishOAuth({ oAuthCallbackDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/callback", oazapfts.json({
        ...opts,
        method: "POST",
        body: oAuthCallbackDto
    })));
}
export function linkOAuthAccount({ oAuthCallbackDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/link", oazapfts.json({
        ...opts,
        method: "POST",
        body: oAuthCallbackDto
    })));
}
export function redirectOAuthToMobile(opts) {
    return oazapfts.ok(oazapfts.fetchText("/oauth/mobile-redirect", {
        ...opts
    }));
}
export function unlinkOAuthAccount(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/unlink", {
        ...opts,
        method: "POST"
    }));
}
export function getPartners({ direction }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/partners${QS.query(QS.explode({
        direction
    }))}`, {
        ...opts
    }));
}
export function removePartner({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/partners/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function createPartner({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/partners/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST"
    }));
}
export function updatePartner({ id, updatePartnerDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/partners/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updatePartnerDto
    })));
}
export function getAllPeople({ closestAssetId, closestPersonId, page, size, withHidden }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/people${QS.query(QS.explode({
        closestAssetId,
        closestPersonId,
        page,
        size,
        withHidden
    }))}`, {
        ...opts
    }));
}
export function createPerson({ personCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/people", oazapfts.json({
        ...opts,
        method: "POST",
        body: personCreateDto
    })));
}
export function updatePeople({ peopleUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/people", oazapfts.json({
        ...opts,
        method: "PUT",
        body: peopleUpdateDto
    })));
}
export function getPerson({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/people/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updatePerson({ id, personUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/people/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: personUpdateDto
    })));
}
export function mergePerson({ id, mergePersonDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/people/${encodeURIComponent(id)}/merge`, oazapfts.json({
        ...opts,
        method: "POST",
        body: mergePersonDto
    })));
}
export function reassignFaces({ id, assetFaceUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/people/${encodeURIComponent(id)}/reassign`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: assetFaceUpdateDto
    })));
}
export function getPersonStatistics({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/people/${encodeURIComponent(id)}/statistics`, {
        ...opts
    }));
}
export function getPersonThumbnail({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/people/${encodeURIComponent(id)}/thumbnail`, {
        ...opts
    }));
}
export function getAuditFiles(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/reports", {
        ...opts
    }));
}
export function getFileChecksums({ fileChecksumDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/reports/checksum", oazapfts.json({
        ...opts,
        method: "POST",
        body: fileChecksumDto
    })));
}
export function fixAuditFiles({ fileReportFixDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/reports/fix", oazapfts.json({
        ...opts,
        method: "POST",
        body: fileReportFixDto
    })));
}
export function getAssetsByCity(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/cities", {
        ...opts
    }));
}
export function getExploreData(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/explore", {
        ...opts
    }));
}
export function searchAssets({ metadataSearchDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/metadata", oazapfts.json({
        ...opts,
        method: "POST",
        body: metadataSearchDto
    })));
}
export function searchPerson({ name, withHidden }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/search/person${QS.query(QS.explode({
        name,
        withHidden
    }))}`, {
        ...opts
    }));
}
export function searchPlaces({ name }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/search/places${QS.query(QS.explode({
        name
    }))}`, {
        ...opts
    }));
}
export function searchRandom({ randomSearchDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/random", oazapfts.json({
        ...opts,
        method: "POST",
        body: randomSearchDto
    })));
}
export function searchSmart({ smartSearchDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/smart", oazapfts.json({
        ...opts,
        method: "POST",
        body: smartSearchDto
    })));
}
export function getSearchSuggestions({ country, includeNull, make, model, state, $type }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/search/suggestions${QS.query(QS.explode({
        country,
        includeNull,
        make,
        model,
        state,
        "type": $type
    }))}`, {
        ...opts
    }));
}
export function getAboutInfo(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/about", {
        ...opts
    }));
}
export function getServerConfig(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/config", {
        ...opts
    }));
}
export function getServerFeatures(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/features", {
        ...opts
    }));
}
export function deleteServerLicense(opts) {
    return oazapfts.ok(oazapfts.fetchText("/server/license", {
        ...opts,
        method: "DELETE"
    }));
}
export function getServerLicense(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/license", {
        ...opts
    }));
}
export function setServerLicense({ licenseKeyDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/license", oazapfts.json({
        ...opts,
        method: "PUT",
        body: licenseKeyDto
    })));
}
export function getSupportedMediaTypes(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/media-types", {
        ...opts
    }));
}
export function pingServer(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/ping", {
        ...opts
    }));
}
export function getServerStatistics(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/statistics", {
        ...opts
    }));
}
export function getStorage(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/storage", {
        ...opts
    }));
}
export function getTheme(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/theme", {
        ...opts
    }));
}
export function getServerVersion(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/version", {
        ...opts
    }));
}
export function getVersionHistory(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server/version-history", {
        ...opts
    }));
}
export function deleteAllSessions(opts) {
    return oazapfts.ok(oazapfts.fetchText("/sessions", {
        ...opts,
        method: "DELETE"
    }));
}
export function getSessions(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/sessions", {
        ...opts
    }));
}
export function deleteSession({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/sessions/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getAllSharedLinks(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/shared-links", {
        ...opts
    }));
}
export function createSharedLink({ sharedLinkCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/shared-links", oazapfts.json({
        ...opts,
        method: "POST",
        body: sharedLinkCreateDto
    })));
}
export function getMySharedLink({ key, password, token }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-links/me${QS.query(QS.explode({
        key,
        password,
        token
    }))}`, {
        ...opts
    }));
}
export function removeSharedLink({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/shared-links/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getSharedLinkById({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-links/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateSharedLink({ id, sharedLinkEditDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-links/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: sharedLinkEditDto
    })));
}
export function removeSharedLinkAssets({ id, key, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-links/${encodeURIComponent(id)}/assets${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: assetIdsDto
    })));
}
export function addSharedLinkAssets({ id, key, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-links/${encodeURIComponent(id)}/assets${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: assetIdsDto
    })));
}
export function deleteStacks({ bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/stacks", oazapfts.json({
        ...opts,
        method: "DELETE",
        body: bulkIdsDto
    })));
}
export function searchStacks({ primaryAssetId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/stacks${QS.query(QS.explode({
        primaryAssetId
    }))}`, {
        ...opts
    }));
}
export function createStack({ stackCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/stacks", oazapfts.json({
        ...opts,
        method: "POST",
        body: stackCreateDto
    })));
}
export function deleteStack({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/stacks/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getStack({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/stacks/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateStack({ id, stackUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/stacks/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: stackUpdateDto
    })));
}
export function getDeltaSync({ assetDeltaSyncDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/sync/delta-sync", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetDeltaSyncDto
    })));
}
export function getFullSyncForUser({ assetFullSyncDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/sync/full-sync", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetFullSyncDto
    })));
}
export function getConfig(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config", {
        ...opts
    }));
}
export function updateConfig({ systemConfigDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config", oazapfts.json({
        ...opts,
        method: "PUT",
        body: systemConfigDto
    })));
}
export function getConfigDefaults(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config/defaults", {
        ...opts
    }));
}
export function getStorageTemplateOptions(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config/storage-template-options", {
        ...opts
    }));
}
export function getAdminOnboarding(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-metadata/admin-onboarding", {
        ...opts
    }));
}
export function updateAdminOnboarding({ adminOnboardingUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/system-metadata/admin-onboarding", oazapfts.json({
        ...opts,
        method: "POST",
        body: adminOnboardingUpdateDto
    })));
}
export function getReverseGeocodingState(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-metadata/reverse-geocoding-state", {
        ...opts
    }));
}
export function getAllTags(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/tags", {
        ...opts
    }));
}
export function createTag({ tagCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/tags", oazapfts.json({
        ...opts,
        method: "POST",
        body: tagCreateDto
    })));
}
export function upsertTags({ tagUpsertDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/tags", oazapfts.json({
        ...opts,
        method: "PUT",
        body: tagUpsertDto
    })));
}
export function bulkTagAssets({ tagBulkAssetsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/tags/assets", oazapfts.json({
        ...opts,
        method: "PUT",
        body: tagBulkAssetsDto
    })));
}
export function deleteTag({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/tags/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getTagById({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tags/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateTag({ id, tagUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tags/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: tagUpdateDto
    })));
}
export function untagAssets({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tags/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: bulkIdsDto
    })));
}
export function tagAssets({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tags/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bulkIdsDto
    })));
}
export function getTimeBucket({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, tagId, timeBucket, userId, withPartners, withStacked }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/timeline/bucket${QS.query(QS.explode({
        albumId,
        isArchived,
        isFavorite,
        isTrashed,
        key,
        order,
        personId,
        size,
        tagId,
        timeBucket,
        userId,
        withPartners,
        withStacked
    }))}`, {
        ...opts
    }));
}
export function getTimeBuckets({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, tagId, userId, withPartners, withStacked }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/timeline/buckets${QS.query(QS.explode({
        albumId,
        isArchived,
        isFavorite,
        isTrashed,
        key,
        order,
        personId,
        size,
        tagId,
        userId,
        withPartners,
        withStacked
    }))}`, {
        ...opts
    }));
}
export function emptyTrash(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/trash/empty", {
        ...opts,
        method: "POST"
    }));
}
export function restoreTrash(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/trash/restore", {
        ...opts,
        method: "POST"
    }));
}
export function restoreAssets({ bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/trash/restore/assets", oazapfts.json({
        ...opts,
        method: "POST",
        body: bulkIdsDto
    })));
}
export function searchUsers(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users", {
        ...opts
    }));
}
export function getMyUser(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users/me", {
        ...opts
    }));
}
export function updateMyUser({ userUpdateMeDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users/me", oazapfts.json({
        ...opts,
        method: "PUT",
        body: userUpdateMeDto
    })));
}
export function deleteUserLicense(opts) {
    return oazapfts.ok(oazapfts.fetchText("/users/me/license", {
        ...opts,
        method: "DELETE"
    }));
}
export function getUserLicense(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users/me/license", {
        ...opts
    }));
}
export function setUserLicense({ licenseKeyDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users/me/license", oazapfts.json({
        ...opts,
        method: "PUT",
        body: licenseKeyDto
    })));
}
export function getMyPreferences(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users/me/preferences", {
        ...opts
    }));
}
export function updateMyPreferences({ userPreferencesUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users/me/preferences", oazapfts.json({
        ...opts,
        method: "PUT",
        body: userPreferencesUpdateDto
    })));
}
export function deleteProfileImage(opts) {
    return oazapfts.ok(oazapfts.fetchText("/users/profile-image", {
        ...opts,
        method: "DELETE"
    }));
}
export function createProfileImage({ createProfileImageDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/users/profile-image", oazapfts.multipart({
        ...opts,
        method: "POST",
        body: createProfileImageDto
    })));
}
export function getUser({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/users/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function getProfileImage({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/users/${encodeURIComponent(id)}/profile-image`, {
        ...opts
    }));
}
export function getAssetsByOriginalPath({ path }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/view/folder${QS.query(QS.explode({
        path
    }))}`, {
        ...opts
    }));
}
export function getUniqueOriginalPaths(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/view/folder/unique-paths", {
        ...opts
    }));
}
export var ReactionLevel;
(function (ReactionLevel) {
    ReactionLevel["Album"] = "album";
    ReactionLevel["Asset"] = "asset";
})(ReactionLevel || (ReactionLevel = {}));
export var ReactionType;
(function (ReactionType) {
    ReactionType["Comment"] = "comment";
    ReactionType["Like"] = "like";
})(ReactionType || (ReactionType = {}));
export var UserAvatarColor;
(function (UserAvatarColor) {
    UserAvatarColor["Primary"] = "primary";
    UserAvatarColor["Pink"] = "pink";
    UserAvatarColor["Red"] = "red";
    UserAvatarColor["Yellow"] = "yellow";
    UserAvatarColor["Blue"] = "blue";
    UserAvatarColor["Green"] = "green";
    UserAvatarColor["Purple"] = "purple";
    UserAvatarColor["Orange"] = "orange";
    UserAvatarColor["Gray"] = "gray";
    UserAvatarColor["Amber"] = "amber";
})(UserAvatarColor || (UserAvatarColor = {}));
export var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "active";
    UserStatus["Removing"] = "removing";
    UserStatus["Deleted"] = "deleted";
})(UserStatus || (UserStatus = {}));
export var AlbumUserRole;
(function (AlbumUserRole) {
    AlbumUserRole["Editor"] = "editor";
    AlbumUserRole["Viewer"] = "viewer";
})(AlbumUserRole || (AlbumUserRole = {}));
export var SourceType;
(function (SourceType) {
    SourceType["MachineLearning"] = "machine-learning";
    SourceType["Exif"] = "exif";
})(SourceType || (SourceType = {}));
export var AssetTypeEnum;
(function (AssetTypeEnum) {
    AssetTypeEnum["Image"] = "IMAGE";
    AssetTypeEnum["Video"] = "VIDEO";
    AssetTypeEnum["Audio"] = "AUDIO";
    AssetTypeEnum["Other"] = "OTHER";
})(AssetTypeEnum || (AssetTypeEnum = {}));
export var AssetOrder;
(function (AssetOrder) {
    AssetOrder["Asc"] = "asc";
    AssetOrder["Desc"] = "desc";
})(AssetOrder || (AssetOrder = {}));
export var Error;
(function (Error) {
    Error["Duplicate"] = "duplicate";
    Error["NoPermission"] = "no_permission";
    Error["NotFound"] = "not_found";
    Error["Unknown"] = "unknown";
})(Error || (Error = {}));
export var Permission;
(function (Permission) {
    Permission["All"] = "all";
    Permission["ActivityCreate"] = "activity.create";
    Permission["ActivityRead"] = "activity.read";
    Permission["ActivityUpdate"] = "activity.update";
    Permission["ActivityDelete"] = "activity.delete";
    Permission["ActivityStatistics"] = "activity.statistics";
    Permission["ApiKeyCreate"] = "apiKey.create";
    Permission["ApiKeyRead"] = "apiKey.read";
    Permission["ApiKeyUpdate"] = "apiKey.update";
    Permission["ApiKeyDelete"] = "apiKey.delete";
    Permission["AssetRead"] = "asset.read";
    Permission["AssetUpdate"] = "asset.update";
    Permission["AssetDelete"] = "asset.delete";
    Permission["AssetShare"] = "asset.share";
    Permission["AssetView"] = "asset.view";
    Permission["AssetDownload"] = "asset.download";
    Permission["AssetUpload"] = "asset.upload";
    Permission["AlbumCreate"] = "album.create";
    Permission["AlbumRead"] = "album.read";
    Permission["AlbumUpdate"] = "album.update";
    Permission["AlbumDelete"] = "album.delete";
    Permission["AlbumStatistics"] = "album.statistics";
    Permission["AlbumAddAsset"] = "album.addAsset";
    Permission["AlbumRemoveAsset"] = "album.removeAsset";
    Permission["AlbumShare"] = "album.share";
    Permission["AlbumDownload"] = "album.download";
    Permission["AuthDeviceDelete"] = "authDevice.delete";
    Permission["ArchiveRead"] = "archive.read";
    Permission["FaceCreate"] = "face.create";
    Permission["FaceRead"] = "face.read";
    Permission["FaceUpdate"] = "face.update";
    Permission["FaceDelete"] = "face.delete";
    Permission["LibraryCreate"] = "library.create";
    Permission["LibraryRead"] = "library.read";
    Permission["LibraryUpdate"] = "library.update";
    Permission["LibraryDelete"] = "library.delete";
    Permission["LibraryStatistics"] = "library.statistics";
    Permission["TimelineRead"] = "timeline.read";
    Permission["TimelineDownload"] = "timeline.download";
    Permission["MemoryCreate"] = "memory.create";
    Permission["MemoryRead"] = "memory.read";
    Permission["MemoryUpdate"] = "memory.update";
    Permission["MemoryDelete"] = "memory.delete";
    Permission["PartnerCreate"] = "partner.create";
    Permission["PartnerRead"] = "partner.read";
    Permission["PartnerUpdate"] = "partner.update";
    Permission["PartnerDelete"] = "partner.delete";
    Permission["PersonCreate"] = "person.create";
    Permission["PersonRead"] = "person.read";
    Permission["PersonUpdate"] = "person.update";
    Permission["PersonDelete"] = "person.delete";
    Permission["PersonStatistics"] = "person.statistics";
    Permission["PersonMerge"] = "person.merge";
    Permission["PersonReassign"] = "person.reassign";
    Permission["SessionRead"] = "session.read";
    Permission["SessionUpdate"] = "session.update";
    Permission["SessionDelete"] = "session.delete";
    Permission["SharedLinkCreate"] = "sharedLink.create";
    Permission["SharedLinkRead"] = "sharedLink.read";
    Permission["SharedLinkUpdate"] = "sharedLink.update";
    Permission["SharedLinkDelete"] = "sharedLink.delete";
    Permission["StackCreate"] = "stack.create";
    Permission["StackRead"] = "stack.read";
    Permission["StackUpdate"] = "stack.update";
    Permission["StackDelete"] = "stack.delete";
    Permission["SystemConfigRead"] = "systemConfig.read";
    Permission["SystemConfigUpdate"] = "systemConfig.update";
    Permission["SystemMetadataRead"] = "systemMetadata.read";
    Permission["SystemMetadataUpdate"] = "systemMetadata.update";
    Permission["TagCreate"] = "tag.create";
    Permission["TagRead"] = "tag.read";
    Permission["TagUpdate"] = "tag.update";
    Permission["TagDelete"] = "tag.delete";
    Permission["TagAsset"] = "tag.asset";
    Permission["AdminUserCreate"] = "admin.user.create";
    Permission["AdminUserRead"] = "admin.user.read";
    Permission["AdminUserUpdate"] = "admin.user.update";
    Permission["AdminUserDelete"] = "admin.user.delete";
})(Permission || (Permission = {}));
export var AssetMediaStatus;
(function (AssetMediaStatus) {
    AssetMediaStatus["Created"] = "created";
    AssetMediaStatus["Replaced"] = "replaced";
    AssetMediaStatus["Duplicate"] = "duplicate";
})(AssetMediaStatus || (AssetMediaStatus = {}));
export var Action;
(function (Action) {
    Action["Accept"] = "accept";
    Action["Reject"] = "reject";
})(Action || (Action = {}));
export var Reason;
(function (Reason) {
    Reason["Duplicate"] = "duplicate";
    Reason["UnsupportedFormat"] = "unsupported-format";
})(Reason || (Reason = {}));
export var AssetJobName;
(function (AssetJobName) {
    AssetJobName["RefreshFaces"] = "refresh-faces";
    AssetJobName["RefreshMetadata"] = "refresh-metadata";
    AssetJobName["RegenerateThumbnail"] = "regenerate-thumbnail";
    AssetJobName["TranscodeVideo"] = "transcode-video";
})(AssetJobName || (AssetJobName = {}));
export var AssetMediaSize;
(function (AssetMediaSize) {
    AssetMediaSize["Preview"] = "preview";
    AssetMediaSize["Thumbnail"] = "thumbnail";
})(AssetMediaSize || (AssetMediaSize = {}));
export var EntityType;
(function (EntityType) {
    EntityType["Asset"] = "ASSET";
    EntityType["Album"] = "ALBUM";
})(EntityType || (EntityType = {}));
export var ManualJobName;
(function (ManualJobName) {
    ManualJobName["PersonCleanup"] = "person-cleanup";
    ManualJobName["TagCleanup"] = "tag-cleanup";
    ManualJobName["UserCleanup"] = "user-cleanup";
})(ManualJobName || (ManualJobName = {}));
export var JobName;
(function (JobName) {
    JobName["ThumbnailGeneration"] = "thumbnailGeneration";
    JobName["MetadataExtraction"] = "metadataExtraction";
    JobName["VideoConversion"] = "videoConversion";
    JobName["FaceDetection"] = "faceDetection";
    JobName["FacialRecognition"] = "facialRecognition";
    JobName["SmartSearch"] = "smartSearch";
    JobName["DuplicateDetection"] = "duplicateDetection";
    JobName["BackgroundTask"] = "backgroundTask";
    JobName["StorageTemplateMigration"] = "storageTemplateMigration";
    JobName["Migration"] = "migration";
    JobName["Search"] = "search";
    JobName["Sidecar"] = "sidecar";
    JobName["Library"] = "library";
    JobName["Notifications"] = "notifications";
    JobName["BackupDatabase"] = "backupDatabase";
})(JobName || (JobName = {}));
export var JobCommand;
(function (JobCommand) {
    JobCommand["Start"] = "start";
    JobCommand["Pause"] = "pause";
    JobCommand["Resume"] = "resume";
    JobCommand["Empty"] = "empty";
    JobCommand["ClearFailed"] = "clear-failed";
})(JobCommand || (JobCommand = {}));
export var MemoryType;
(function (MemoryType) {
    MemoryType["OnThisDay"] = "on_this_day";
})(MemoryType || (MemoryType = {}));
export var PartnerDirection;
(function (PartnerDirection) {
    PartnerDirection["SharedBy"] = "shared-by";
    PartnerDirection["SharedWith"] = "shared-with";
})(PartnerDirection || (PartnerDirection = {}));
export var PathEntityType;
(function (PathEntityType) {
    PathEntityType["Asset"] = "asset";
    PathEntityType["Person"] = "person";
    PathEntityType["User"] = "user";
})(PathEntityType || (PathEntityType = {}));
export var PathType;
(function (PathType) {
    PathType["Original"] = "original";
    PathType["Preview"] = "preview";
    PathType["Thumbnail"] = "thumbnail";
    PathType["EncodedVideo"] = "encoded_video";
    PathType["Sidecar"] = "sidecar";
    PathType["Face"] = "face";
    PathType["Profile"] = "profile";
})(PathType || (PathType = {}));
export var SearchSuggestionType;
(function (SearchSuggestionType) {
    SearchSuggestionType["Country"] = "country";
    SearchSuggestionType["State"] = "state";
    SearchSuggestionType["City"] = "city";
    SearchSuggestionType["CameraMake"] = "camera-make";
    SearchSuggestionType["CameraModel"] = "camera-model";
})(SearchSuggestionType || (SearchSuggestionType = {}));
export var SharedLinkType;
(function (SharedLinkType) {
    SharedLinkType["Album"] = "ALBUM";
    SharedLinkType["Individual"] = "INDIVIDUAL";
})(SharedLinkType || (SharedLinkType = {}));
export var Error2;
(function (Error2) {
    Error2["Duplicate"] = "duplicate";
    Error2["NoPermission"] = "no_permission";
    Error2["NotFound"] = "not_found";
})(Error2 || (Error2 = {}));
export var TranscodeHWAccel;
(function (TranscodeHWAccel) {
    TranscodeHWAccel["Nvenc"] = "nvenc";
    TranscodeHWAccel["Qsv"] = "qsv";
    TranscodeHWAccel["Vaapi"] = "vaapi";
    TranscodeHWAccel["Rkmpp"] = "rkmpp";
    TranscodeHWAccel["Disabled"] = "disabled";
})(TranscodeHWAccel || (TranscodeHWAccel = {}));
export var AudioCodec;
(function (AudioCodec) {
    AudioCodec["Mp3"] = "mp3";
    AudioCodec["Aac"] = "aac";
    AudioCodec["Libopus"] = "libopus";
    AudioCodec["PcmS16Le"] = "pcm_s16le";
})(AudioCodec || (AudioCodec = {}));
export var VideoContainer;
(function (VideoContainer) {
    VideoContainer["Mov"] = "mov";
    VideoContainer["Mp4"] = "mp4";
    VideoContainer["Ogg"] = "ogg";
    VideoContainer["Webm"] = "webm";
})(VideoContainer || (VideoContainer = {}));
export var VideoCodec;
(function (VideoCodec) {
    VideoCodec["H264"] = "h264";
    VideoCodec["Hevc"] = "hevc";
    VideoCodec["Vp9"] = "vp9";
    VideoCodec["Av1"] = "av1";
})(VideoCodec || (VideoCodec = {}));
export var CQMode;
(function (CQMode) {
    CQMode["Auto"] = "auto";
    CQMode["Cqp"] = "cqp";
    CQMode["Icq"] = "icq";
})(CQMode || (CQMode = {}));
export var ToneMapping;
(function (ToneMapping) {
    ToneMapping["Hable"] = "hable";
    ToneMapping["Mobius"] = "mobius";
    ToneMapping["Reinhard"] = "reinhard";
    ToneMapping["Disabled"] = "disabled";
})(ToneMapping || (ToneMapping = {}));
export var TranscodePolicy;
(function (TranscodePolicy) {
    TranscodePolicy["All"] = "all";
    TranscodePolicy["Optimal"] = "optimal";
    TranscodePolicy["Bitrate"] = "bitrate";
    TranscodePolicy["Required"] = "required";
    TranscodePolicy["Disabled"] = "disabled";
})(TranscodePolicy || (TranscodePolicy = {}));
export var Colorspace;
(function (Colorspace) {
    Colorspace["Srgb"] = "srgb";
    Colorspace["P3"] = "p3";
})(Colorspace || (Colorspace = {}));
export var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Jpeg"] = "jpeg";
    ImageFormat["Webp"] = "webp";
})(ImageFormat || (ImageFormat = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["Verbose"] = "verbose";
    LogLevel["Debug"] = "debug";
    LogLevel["Log"] = "log";
    LogLevel["Warn"] = "warn";
    LogLevel["Error"] = "error";
    LogLevel["Fatal"] = "fatal";
})(LogLevel || (LogLevel = {}));
export var TimeBucketSize;
(function (TimeBucketSize) {
    TimeBucketSize["Day"] = "DAY";
    TimeBucketSize["Month"] = "MONTH";
})(TimeBucketSize || (TimeBucketSize = {}));
