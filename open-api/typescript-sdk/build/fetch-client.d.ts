/**
 * Immich
 * 1.125.6
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
export declare const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders>;
export declare const servers: {
    server1: string;
};
export type UserResponseDto = {
    avatarColor: UserAvatarColor;
    email: string;
    id: string;
    name: string;
    profileChangedAt: string;
    profileImagePath: string;
};
export type ActivityResponseDto = {
    assetId: string | null;
    comment?: string | null;
    createdAt: string;
    id: string;
    "type": ReactionType;
    user: UserResponseDto;
};
export type ActivityCreateDto = {
    albumId: string;
    assetId?: string;
    comment?: string;
    "type": ReactionType;
};
export type ActivityStatisticsResponseDto = {
    comments: number;
};
export type UserLicense = {
    activatedAt: string;
    activationKey: string;
    licenseKey: string;
};
export type UserAdminResponseDto = {
    avatarColor: UserAvatarColor;
    createdAt: string;
    deletedAt: string | null;
    email: string;
    id: string;
    isAdmin: boolean;
    license: (UserLicense) | null;
    name: string;
    oauthId: string;
    profileChangedAt: string;
    profileImagePath: string;
    quotaSizeInBytes: number | null;
    quotaUsageInBytes: number | null;
    shouldChangePassword: boolean;
    status: UserStatus;
    storageLabel: string | null;
    updatedAt: string;
};
export type UserAdminCreateDto = {
    email: string;
    name: string;
    notify?: boolean;
    password: string;
    quotaSizeInBytes?: number | null;
    shouldChangePassword?: boolean;
    storageLabel?: string | null;
};
export type UserAdminDeleteDto = {
    force?: boolean;
};
export type UserAdminUpdateDto = {
    email?: string;
    name?: string;
    password?: string;
    quotaSizeInBytes?: number | null;
    shouldChangePassword?: boolean;
    storageLabel?: string | null;
};
export type AvatarResponse = {
    color: UserAvatarColor;
};
export type DownloadResponse = {
    archiveSize: number;
    includeEmbeddedVideos: boolean;
};
export type EmailNotificationsResponse = {
    albumInvite: boolean;
    albumUpdate: boolean;
    enabled: boolean;
};
export type FoldersResponse = {
    enabled: boolean;
    sidebarWeb: boolean;
};
export type MemoriesResponse = {
    enabled: boolean;
};
export type PeopleResponse = {
    enabled: boolean;
    sidebarWeb: boolean;
};
export type PurchaseResponse = {
    hideBuyButtonUntil: string;
    showSupportBadge: boolean;
};
export type RatingsResponse = {
    enabled: boolean;
};
export type TagsResponse = {
    enabled: boolean;
    sidebarWeb: boolean;
};
export type UserPreferencesResponseDto = {
    avatar: AvatarResponse;
    download: DownloadResponse;
    emailNotifications: EmailNotificationsResponse;
    folders: FoldersResponse;
    memories: MemoriesResponse;
    people: PeopleResponse;
    purchase: PurchaseResponse;
    ratings: RatingsResponse;
    tags: TagsResponse;
};
export type AvatarUpdate = {
    color?: UserAvatarColor;
};
export type DownloadUpdate = {
    archiveSize?: number;
    includeEmbeddedVideos?: boolean;
};
export type EmailNotificationsUpdate = {
    albumInvite?: boolean;
    albumUpdate?: boolean;
    enabled?: boolean;
};
export type FoldersUpdate = {
    enabled?: boolean;
    sidebarWeb?: boolean;
};
export type MemoriesUpdate = {
    enabled?: boolean;
};
export type PeopleUpdate = {
    enabled?: boolean;
    sidebarWeb?: boolean;
};
export type PurchaseUpdate = {
    hideBuyButtonUntil?: string;
    showSupportBadge?: boolean;
};
export type RatingsUpdate = {
    enabled?: boolean;
};
export type TagsUpdate = {
    enabled?: boolean;
    sidebarWeb?: boolean;
};
export type UserPreferencesUpdateDto = {
    avatar?: AvatarUpdate;
    download?: DownloadUpdate;
    emailNotifications?: EmailNotificationsUpdate;
    folders?: FoldersUpdate;
    memories?: MemoriesUpdate;
    people?: PeopleUpdate;
    purchase?: PurchaseUpdate;
    ratings?: RatingsUpdate;
    tags?: TagsUpdate;
};
export type AlbumUserResponseDto = {
    role: AlbumUserRole;
    user: UserResponseDto;
};
export type ExifResponseDto = {
    city?: string | null;
    country?: string | null;
    dateTimeOriginal?: string | null;
    description?: string | null;
    exifImageHeight?: number | null;
    exifImageWidth?: number | null;
    exposureTime?: string | null;
    fNumber?: number | null;
    fileSizeInByte?: number | null;
    focalLength?: number | null;
    iso?: number | null;
    latitude?: number | null;
    lensModel?: string | null;
    longitude?: number | null;
    make?: string | null;
    model?: string | null;
    modifyDate?: string | null;
    orientation?: string | null;
    projectionType?: string | null;
    rating?: number | null;
    state?: string | null;
    timeZone?: string | null;
};
export type AssetFaceWithoutPersonResponseDto = {
    boundingBoxX1: number;
    boundingBoxX2: number;
    boundingBoxY1: number;
    boundingBoxY2: number;
    id: string;
    imageHeight: number;
    imageWidth: number;
    sourceType?: SourceType;
};
export type PersonWithFacesResponseDto = {
    birthDate: string | null;
    faces: AssetFaceWithoutPersonResponseDto[];
    id: string;
    isHidden: boolean;
    name: string;
    thumbnailPath: string;
    /** This property was added in v1.107.0 */
    updatedAt?: string;
};
export type AssetStackResponseDto = {
    assetCount: number;
    id: string;
    primaryAssetId: string;
};
export type TagResponseDto = {
    color?: string;
    createdAt: string;
    id: string;
    name: string;
    parentId?: string;
    updatedAt: string;
    value: string;
};
export type AssetResponseDto = {
    /** base64 encoded sha1 hash */
    checksum: string;
    deviceAssetId: string;
    deviceId: string;
    duplicateId?: string | null;
    duration: string;
    exifInfo?: ExifResponseDto;
    fileCreatedAt: string;
    fileModifiedAt: string;
    hasMetadata: boolean;
    id: string;
    isArchived: boolean;
    isFavorite: boolean;
    isOffline: boolean;
    isTrashed: boolean;
    /** This property was deprecated in v1.106.0 */
    libraryId?: string | null;
    livePhotoVideoId?: string | null;
    localDateTime: string;
    originalFileName: string;
    originalMimeType?: string;
    originalPath: string;
    owner?: UserResponseDto;
    ownerId: string;
    people?: PersonWithFacesResponseDto[];
    /** This property was deprecated in v1.113.0 */
    resized?: boolean;
    stack?: (AssetStackResponseDto) | null;
    tags?: TagResponseDto[];
    thumbhash: string | null;
    "type": AssetTypeEnum;
    unassignedFaces?: AssetFaceWithoutPersonResponseDto[];
    updatedAt: string;
};
export type AlbumResponseDto = {
    albumName: string;
    albumThumbnailAssetId: string | null;
    albumUsers: AlbumUserResponseDto[];
    assetCount: number;
    assets: AssetResponseDto[];
    createdAt: string;
    description: string;
    endDate?: string;
    hasSharedLink: boolean;
    id: string;
    isActivityEnabled: boolean;
    lastModifiedAssetTimestamp?: string;
    order?: AssetOrder;
    owner: UserResponseDto;
    ownerId: string;
    shared: boolean;
    startDate?: string;
    updatedAt: string;
};
export type AlbumUserCreateDto = {
    role: AlbumUserRole;
    userId: string;
};
export type CreateAlbumDto = {
    albumName: string;
    albumUsers?: AlbumUserCreateDto[];
    assetIds?: string[];
    description?: string;
};
export type AlbumStatisticsResponseDto = {
    notShared: number;
    owned: number;
    shared: number;
};
export type UpdateAlbumDto = {
    albumName?: string;
    albumThumbnailAssetId?: string;
    description?: string;
    isActivityEnabled?: boolean;
    order?: AssetOrder;
};
export type BulkIdsDto = {
    ids: string[];
};
export type BulkIdResponseDto = {
    error?: Error;
    id: string;
    success: boolean;
};
export type UpdateAlbumUserDto = {
    role: AlbumUserRole;
};
export type AlbumUserAddDto = {
    role?: AlbumUserRole;
    userId: string;
};
export type AddUsersDto = {
    albumUsers: AlbumUserAddDto[];
};
export type ApiKeyResponseDto = {
    createdAt: string;
    id: string;
    name: string;
    permissions: Permission[];
    updatedAt: string;
};
export type ApiKeyCreateDto = {
    name?: string;
    permissions: Permission[];
};
export type ApiKeyCreateResponseDto = {
    apiKey: ApiKeyResponseDto;
    secret: string;
};
export type ApiKeyUpdateDto = {
    name: string;
};
export type AssetBulkDeleteDto = {
    force?: boolean;
    ids: string[];
};
export type AssetMediaCreateDto = {
    assetData: Blob;
    deviceAssetId: string;
    deviceId: string;
    duration?: string;
    fileCreatedAt: string;
    fileModifiedAt: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    isVisible?: boolean;
    livePhotoVideoId?: string;
    sidecarData?: Blob;
};
export type AssetMediaResponseDto = {
    id: string;
    status: AssetMediaStatus;
};
export type AssetBulkUpdateDto = {
    dateTimeOriginal?: string;
    duplicateId?: string | null;
    ids: string[];
    isArchived?: boolean;
    isFavorite?: boolean;
    latitude?: number;
    longitude?: number;
    rating?: number;
};
export type AssetBulkUploadCheckItem = {
    /** base64 or hex encoded sha1 hash */
    checksum: string;
    id: string;
};
export type AssetBulkUploadCheckDto = {
    assets: AssetBulkUploadCheckItem[];
};
export type AssetBulkUploadCheckResult = {
    action: Action;
    assetId?: string;
    id: string;
    isTrashed?: boolean;
    reason?: Reason;
};
export type AssetBulkUploadCheckResponseDto = {
    results: AssetBulkUploadCheckResult[];
};
export type CheckExistingAssetsDto = {
    deviceAssetIds: string[];
    deviceId: string;
};
export type CheckExistingAssetsResponseDto = {
    existingIds: string[];
};
export type AssetJobsDto = {
    assetIds: string[];
    name: AssetJobName;
};
export type MemoryLaneResponseDto = {
    assets: AssetResponseDto[];
    yearsAgo: number;
};
export type AssetStatsResponseDto = {
    images: number;
    total: number;
    videos: number;
};
export type UpdateAssetDto = {
    dateTimeOriginal?: string;
    description?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    latitude?: number;
    livePhotoVideoId?: string | null;
    longitude?: number;
    rating?: number;
};
export type AssetMediaReplaceDto = {
    assetData: Blob;
    deviceAssetId: string;
    deviceId: string;
    duration?: string;
    fileCreatedAt: string;
    fileModifiedAt: string;
};
export type AuditDeletesResponseDto = {
    ids: string[];
    needsFullSync: boolean;
};
export type SignUpDto = {
    email: string;
    name: string;
    password: string;
};
export type ChangePasswordDto = {
    newPassword: string;
    password: string;
};
export type LoginCredentialDto = {
    email: string;
    password: string;
};
export type LoginResponseDto = {
    accessToken: string;
    isAdmin: boolean;
    name: string;
    profileImagePath: string;
    shouldChangePassword: boolean;
    userEmail: string;
    userId: string;
};
export type LogoutResponseDto = {
    redirectUri: string;
    successful: boolean;
};
export type ValidateAccessTokenResponseDto = {
    authStatus: boolean;
};
export type AssetIdsDto = {
    assetIds: string[];
};
export type DownloadInfoDto = {
    albumId?: string;
    archiveSize?: number;
    assetIds?: string[];
    userId?: string;
};
export type DownloadArchiveInfo = {
    assetIds: string[];
    size: number;
};
export type DownloadResponseDto = {
    archives: DownloadArchiveInfo[];
    totalSize: number;
};
export type DuplicateResponseDto = {
    assets: AssetResponseDto[];
    duplicateId: string;
};
export type PersonResponseDto = {
    birthDate: string | null;
    id: string;
    isHidden: boolean;
    name: string;
    thumbnailPath: string;
    /** This property was added in v1.107.0 */
    updatedAt?: string;
};
export type AssetFaceResponseDto = {
    boundingBoxX1: number;
    boundingBoxX2: number;
    boundingBoxY1: number;
    boundingBoxY2: number;
    id: string;
    imageHeight: number;
    imageWidth: number;
    person: (PersonResponseDto) | null;
    sourceType?: SourceType;
};
export type FaceDto = {
    id: string;
};
export type JobCountsDto = {
    active: number;
    completed: number;
    delayed: number;
    failed: number;
    paused: number;
    waiting: number;
};
export type QueueStatusDto = {
    isActive: boolean;
    isPaused: boolean;
};
export type JobStatusDto = {
    jobCounts: JobCountsDto;
    queueStatus: QueueStatusDto;
};
export type AllJobStatusResponseDto = {
    backgroundTask: JobStatusDto;
    backupDatabase: JobStatusDto;
    duplicateDetection: JobStatusDto;
    faceDetection: JobStatusDto;
    facialRecognition: JobStatusDto;
    library: JobStatusDto;
    metadataExtraction: JobStatusDto;
    migration: JobStatusDto;
    notifications: JobStatusDto;
    search: JobStatusDto;
    sidecar: JobStatusDto;
    smartSearch: JobStatusDto;
    storageTemplateMigration: JobStatusDto;
    thumbnailGeneration: JobStatusDto;
    videoConversion: JobStatusDto;
};
export type JobCreateDto = {
    name: ManualJobName;
};
export type JobCommandDto = {
    command: JobCommand;
    force?: boolean;
};
export type LibraryResponseDto = {
    assetCount: number;
    createdAt: string;
    exclusionPatterns: string[];
    id: string;
    importPaths: string[];
    name: string;
    ownerId: string;
    refreshedAt: string | null;
    updatedAt: string;
};
export type CreateLibraryDto = {
    exclusionPatterns?: string[];
    importPaths?: string[];
    name?: string;
    ownerId: string;
};
export type UpdateLibraryDto = {
    exclusionPatterns?: string[];
    importPaths?: string[];
    name?: string;
};
export type LibraryStatsResponseDto = {
    photos: number;
    total: number;
    usage: number;
    videos: number;
};
export type ValidateLibraryDto = {
    exclusionPatterns?: string[];
    importPaths?: string[];
};
export type ValidateLibraryImportPathResponseDto = {
    importPath: string;
    isValid: boolean;
    message?: string;
};
export type ValidateLibraryResponseDto = {
    importPaths?: ValidateLibraryImportPathResponseDto[];
};
export type MapMarkerResponseDto = {
    city: string | null;
    country: string | null;
    id: string;
    lat: number;
    lon: number;
    state: string | null;
};
export type MapReverseGeocodeResponseDto = {
    city: string | null;
    country: string | null;
    state: string | null;
};
export type OnThisDayDto = {
    year: number;
};
export type MemoryResponseDto = {
    assets: AssetResponseDto[];
    createdAt: string;
    data: OnThisDayDto;
    deletedAt?: string;
    id: string;
    isSaved: boolean;
    memoryAt: string;
    ownerId: string;
    seenAt?: string;
    "type": MemoryType;
    updatedAt: string;
};
export type MemoryCreateDto = {
    assetIds?: string[];
    data: OnThisDayDto;
    isSaved?: boolean;
    memoryAt: string;
    seenAt?: string;
    "type": MemoryType;
};
export type MemoryUpdateDto = {
    isSaved?: boolean;
    memoryAt?: string;
    seenAt?: string;
};
export type TemplateDto = {
    template: string;
};
export type TemplateResponseDto = {
    html: string;
    name: string;
};
export type SystemConfigSmtpTransportDto = {
    host: string;
    ignoreCert: boolean;
    password: string;
    port: number;
    username: string;
};
export type SystemConfigSmtpDto = {
    enabled: boolean;
    "from": string;
    replyTo: string;
    transport: SystemConfigSmtpTransportDto;
};
export type TestEmailResponseDto = {
    messageId: string;
};
export type OAuthConfigDto = {
    redirectUri: string;
};
export type OAuthAuthorizeResponseDto = {
    url: string;
};
export type OAuthCallbackDto = {
    url: string;
};
export type PartnerResponseDto = {
    avatarColor: UserAvatarColor;
    email: string;
    id: string;
    inTimeline?: boolean;
    name: string;
    profileChangedAt: string;
    profileImagePath: string;
};
export type UpdatePartnerDto = {
    inTimeline: boolean;
};
export type PeopleResponseDto = {
    /** This property was added in v1.110.0 */
    hasNextPage?: boolean;
    hidden: number;
    people: PersonResponseDto[];
    total: number;
};
export type PersonCreateDto = {
    /** Person date of birth.
    Note: the mobile app cannot currently set the birth date to null. */
    birthDate?: string | null;
    /** Person visibility */
    isHidden?: boolean;
    /** Person name. */
    name?: string;
};
export type PeopleUpdateItem = {
    /** Person date of birth.
    Note: the mobile app cannot currently set the birth date to null. */
    birthDate?: string | null;
    /** Asset is used to get the feature face thumbnail. */
    featureFaceAssetId?: string;
    /** Person id. */
    id: string;
    /** Person visibility */
    isHidden?: boolean;
    /** Person name. */
    name?: string;
};
export type PeopleUpdateDto = {
    people: PeopleUpdateItem[];
};
export type PersonUpdateDto = {
    /** Person date of birth.
    Note: the mobile app cannot currently set the birth date to null. */
    birthDate?: string | null;
    /** Asset is used to get the feature face thumbnail. */
    featureFaceAssetId?: string;
    /** Person visibility */
    isHidden?: boolean;
    /** Person name. */
    name?: string;
};
export type MergePersonDto = {
    ids: string[];
};
export type AssetFaceUpdateItem = {
    assetId: string;
    personId: string;
};
export type AssetFaceUpdateDto = {
    data: AssetFaceUpdateItem[];
};
export type PersonStatisticsResponseDto = {
    assets: number;
};
export type FileReportItemDto = {
    checksum?: string;
    entityId: string;
    entityType: PathEntityType;
    pathType: PathType;
    pathValue: string;
};
export type FileReportDto = {
    extras: string[];
    orphans: FileReportItemDto[];
};
export type FileChecksumDto = {
    filenames: string[];
};
export type FileChecksumResponseDto = {
    checksum: string;
    filename: string;
};
export type FileReportFixDto = {
    items: FileReportItemDto[];
};
export type SearchExploreItem = {
    data: AssetResponseDto;
    value: string;
};
export type SearchExploreResponseDto = {
    fieldName: string;
    items: SearchExploreItem[];
};
export type MetadataSearchDto = {
    checksum?: string;
    city?: string | null;
    country?: string | null;
    createdAfter?: string;
    createdBefore?: string;
    deviceAssetId?: string;
    deviceId?: string;
    encodedVideoPath?: string;
    id?: string;
    isArchived?: boolean;
    isEncoded?: boolean;
    isFavorite?: boolean;
    isMotion?: boolean;
    isNotInAlbum?: boolean;
    isOffline?: boolean;
    isVisible?: boolean;
    lensModel?: string | null;
    libraryId?: string | null;
    make?: string;
    model?: string | null;
    order?: AssetOrder;
    originalFileName?: string;
    originalPath?: string;
    page?: number;
    personIds?: string[];
    previewPath?: string;
    size?: number;
    state?: string | null;
    tagIds?: string[];
    takenAfter?: string;
    takenBefore?: string;
    thumbnailPath?: string;
    trashedAfter?: string;
    trashedBefore?: string;
    "type"?: AssetTypeEnum;
    updatedAfter?: string;
    updatedBefore?: string;
    withArchived?: boolean;
    withDeleted?: boolean;
    withExif?: boolean;
    withPeople?: boolean;
    withStacked?: boolean;
};
export type SearchFacetCountResponseDto = {
    count: number;
    value: string;
};
export type SearchFacetResponseDto = {
    counts: SearchFacetCountResponseDto[];
    fieldName: string;
};
export type SearchAlbumResponseDto = {
    count: number;
    facets: SearchFacetResponseDto[];
    items: AlbumResponseDto[];
    total: number;
};
export type SearchAssetResponseDto = {
    count: number;
    facets: SearchFacetResponseDto[];
    items: AssetResponseDto[];
    nextPage: string | null;
    total: number;
};
export type SearchResponseDto = {
    albums: SearchAlbumResponseDto;
    assets: SearchAssetResponseDto;
};
export type PlacesResponseDto = {
    admin1name?: string;
    admin2name?: string;
    latitude: number;
    longitude: number;
    name: string;
};
export type RandomSearchDto = {
    city?: string | null;
    country?: string | null;
    createdAfter?: string;
    createdBefore?: string;
    deviceId?: string;
    isArchived?: boolean;
    isEncoded?: boolean;
    isFavorite?: boolean;
    isMotion?: boolean;
    isNotInAlbum?: boolean;
    isOffline?: boolean;
    isVisible?: boolean;
    lensModel?: string | null;
    libraryId?: string | null;
    make?: string;
    model?: string | null;
    personIds?: string[];
    size?: number;
    state?: string | null;
    tagIds?: string[];
    takenAfter?: string;
    takenBefore?: string;
    trashedAfter?: string;
    trashedBefore?: string;
    "type"?: AssetTypeEnum;
    updatedAfter?: string;
    updatedBefore?: string;
    withArchived?: boolean;
    withDeleted?: boolean;
    withExif?: boolean;
    withPeople?: boolean;
    withStacked?: boolean;
};
export type SmartSearchDto = {
    city?: string | null;
    country?: string | null;
    createdAfter?: string;
    createdBefore?: string;
    deviceId?: string;
    isArchived?: boolean;
    isEncoded?: boolean;
    isFavorite?: boolean;
    isMotion?: boolean;
    isNotInAlbum?: boolean;
    isOffline?: boolean;
    isVisible?: boolean;
    lensModel?: string | null;
    libraryId?: string | null;
    make?: string;
    model?: string | null;
    page?: number;
    personIds?: string[];
    query: string;
    size?: number;
    state?: string | null;
    tagIds?: string[];
    takenAfter?: string;
    takenBefore?: string;
    trashedAfter?: string;
    trashedBefore?: string;
    "type"?: AssetTypeEnum;
    updatedAfter?: string;
    updatedBefore?: string;
    withArchived?: boolean;
    withDeleted?: boolean;
    withExif?: boolean;
};
export type ServerAboutResponseDto = {
    build?: string;
    buildImage?: string;
    buildImageUrl?: string;
    buildUrl?: string;
    exiftool?: string;
    ffmpeg?: string;
    imagemagick?: string;
    libvips?: string;
    licensed: boolean;
    nodejs?: string;
    repository?: string;
    repositoryUrl?: string;
    sourceCommit?: string;
    sourceRef?: string;
    sourceUrl?: string;
    thirdPartyBugFeatureUrl?: string;
    thirdPartyDocumentationUrl?: string;
    thirdPartySourceUrl?: string;
    thirdPartySupportUrl?: string;
    version: string;
    versionUrl: string;
};
export type ServerConfigDto = {
    externalDomain: string;
    isInitialized: boolean;
    isOnboarded: boolean;
    loginPageMessage: string;
    mapDarkStyleUrl: string;
    mapLightStyleUrl: string;
    oauthButtonText: string;
    publicUsers: boolean;
    trashDays: number;
    userDeleteDelay: number;
};
export type ServerFeaturesDto = {
    configFile: boolean;
    duplicateDetection: boolean;
    email: boolean;
    facialRecognition: boolean;
    importFaces: boolean;
    map: boolean;
    oauth: boolean;
    oauthAutoLaunch: boolean;
    passwordLogin: boolean;
    reverseGeocoding: boolean;
    search: boolean;
    sidecar: boolean;
    smartSearch: boolean;
    trash: boolean;
};
export type LicenseResponseDto = {
    activatedAt: string;
    activationKey: string;
    licenseKey: string;
};
export type LicenseKeyDto = {
    activationKey: string;
    licenseKey: string;
};
export type ServerMediaTypesResponseDto = {
    image: string[];
    sidecar: string[];
    video: string[];
};
export type ServerPingResponse = {};
export type ServerPingResponseRead = {
    res: string;
};
export type UsageByUserDto = {
    photos: number;
    quotaSizeInBytes: number | null;
    usage: number;
    usagePhotos: number;
    usageVideos: number;
    userId: string;
    userName: string;
    videos: number;
};
export type ServerStatsResponseDto = {
    photos: number;
    usage: number;
    usageByUser: UsageByUserDto[];
    usagePhotos: number;
    usageVideos: number;
    videos: number;
};
export type ServerStorageResponseDto = {
    diskAvailable: string;
    diskAvailableRaw: number;
    diskSize: string;
    diskSizeRaw: number;
    diskUsagePercentage: number;
    diskUse: string;
    diskUseRaw: number;
};
export type ServerThemeDto = {
    customCss: string;
};
export type ServerVersionResponseDto = {
    major: number;
    minor: number;
    patch: number;
};
export type ServerVersionHistoryResponseDto = {
    createdAt: string;
    id: string;
    version: string;
};
export type SessionResponseDto = {
    createdAt: string;
    current: boolean;
    deviceOS: string;
    deviceType: string;
    id: string;
    updatedAt: string;
};
export type SharedLinkResponseDto = {
    album?: AlbumResponseDto;
    allowDownload: boolean;
    allowUpload: boolean;
    assets: AssetResponseDto[];
    createdAt: string;
    description: string | null;
    expiresAt: string | null;
    id: string;
    key: string;
    password: string | null;
    showMetadata: boolean;
    token?: string | null;
    "type": SharedLinkType;
    userId: string;
};
export type SharedLinkCreateDto = {
    albumId?: string;
    allowDownload?: boolean;
    allowUpload?: boolean;
    assetIds?: string[];
    description?: string;
    expiresAt?: string | null;
    password?: string;
    showMetadata?: boolean;
    "type": SharedLinkType;
};
export type SharedLinkEditDto = {
    allowDownload?: boolean;
    allowUpload?: boolean;
    /** Few clients cannot send null to set the expiryTime to never.
    Setting this flag and not sending expiryAt is considered as null instead.
    Clients that can send null values can ignore this. */
    changeExpiryTime?: boolean;
    description?: string;
    expiresAt?: string | null;
    password?: string;
    showMetadata?: boolean;
};
export type AssetIdsResponseDto = {
    assetId: string;
    error?: Error2;
    success: boolean;
};
export type StackResponseDto = {
    assets: AssetResponseDto[];
    id: string;
    primaryAssetId: string;
};
export type StackCreateDto = {
    /** first asset becomes the primary */
    assetIds: string[];
};
export type StackUpdateDto = {
    primaryAssetId?: string;
};
export type AssetDeltaSyncDto = {
    updatedAfter: string;
    userIds: string[];
};
export type AssetDeltaSyncResponseDto = {
    deleted: string[];
    needsFullSync: boolean;
    upserted: AssetResponseDto[];
};
export type AssetFullSyncDto = {
    lastId?: string;
    limit: number;
    updatedUntil: string;
    userId?: string;
};
export type DatabaseBackupConfig = {
    cronExpression: string;
    enabled: boolean;
    keepLastAmount: number;
};
export type SystemConfigBackupsDto = {
    database: DatabaseBackupConfig;
};
export type SystemConfigFFmpegDto = {
    accel: TranscodeHWAccel;
    accelDecode: boolean;
    acceptedAudioCodecs: AudioCodec[];
    acceptedContainers: VideoContainer[];
    acceptedVideoCodecs: VideoCodec[];
    bframes: number;
    cqMode: CQMode;
    crf: number;
    gopSize: number;
    maxBitrate: string;
    preferredHwDevice: string;
    preset: string;
    refs: number;
    targetAudioCodec: AudioCodec;
    targetResolution: string;
    targetVideoCodec: VideoCodec;
    temporalAQ: boolean;
    threads: number;
    tonemap: ToneMapping;
    transcode: TranscodePolicy;
    twoPass: boolean;
};
export type SystemConfigGeneratedImageDto = {
    format: ImageFormat;
    quality: number;
    size: number;
};
export type SystemConfigImageDto = {
    colorspace: Colorspace;
    extractEmbedded: boolean;
    preview: SystemConfigGeneratedImageDto;
    thumbnail: SystemConfigGeneratedImageDto;
};
export type JobSettingsDto = {
    concurrency: number;
};
export type SystemConfigJobDto = {
    backgroundTask: JobSettingsDto;
    faceDetection: JobSettingsDto;
    library: JobSettingsDto;
    metadataExtraction: JobSettingsDto;
    migration: JobSettingsDto;
    notifications: JobSettingsDto;
    search: JobSettingsDto;
    sidecar: JobSettingsDto;
    smartSearch: JobSettingsDto;
    thumbnailGeneration: JobSettingsDto;
    videoConversion: JobSettingsDto;
};
export type SystemConfigLibraryScanDto = {
    cronExpression: string;
    enabled: boolean;
};
export type SystemConfigLibraryWatchDto = {
    enabled: boolean;
};
export type SystemConfigLibraryDto = {
    scan: SystemConfigLibraryScanDto;
    watch: SystemConfigLibraryWatchDto;
};
export type SystemConfigLoggingDto = {
    enabled: boolean;
    level: LogLevel;
};
export type ClipConfig = {
    enabled: boolean;
    modelName: string;
};
export type DuplicateDetectionConfig = {
    enabled: boolean;
    maxDistance: number;
};
export type FacialRecognitionConfig = {
    enabled: boolean;
    maxDistance: number;
    minFaces: number;
    minScore: number;
    modelName: string;
};
export type SystemConfigMachineLearningDto = {
    clip: ClipConfig;
    duplicateDetection: DuplicateDetectionConfig;
    enabled: boolean;
    facialRecognition: FacialRecognitionConfig;
    /** This property was deprecated in v1.122.0 */
    url?: string;
    urls: string[];
};
export type SystemConfigMapDto = {
    darkStyle: string;
    enabled: boolean;
    lightStyle: string;
};
export type SystemConfigFacesDto = {
    "import": boolean;
};
export type SystemConfigMetadataDto = {
    faces: SystemConfigFacesDto;
};
export type SystemConfigNewVersionCheckDto = {
    enabled: boolean;
};
export type SystemConfigNotificationsDto = {
    smtp: SystemConfigSmtpDto;
};
export type SystemConfigOAuthDto = {
    autoLaunch: boolean;
    autoRegister: boolean;
    buttonText: string;
    clientId: string;
    clientSecret: string;
    defaultStorageQuota: number;
    enabled: boolean;
    issuerUrl: string;
    mobileOverrideEnabled: boolean;
    mobileRedirectUri: string;
    profileSigningAlgorithm: string;
    scope: string;
    signingAlgorithm: string;
    storageLabelClaim: string;
    storageQuotaClaim: string;
};
export type SystemConfigPasswordLoginDto = {
    enabled: boolean;
};
export type SystemConfigReverseGeocodingDto = {
    enabled: boolean;
};
export type SystemConfigServerDto = {
    externalDomain: string;
    loginPageMessage: string;
    publicUsers: boolean;
};
export type SystemConfigStorageTemplateDto = {
    enabled: boolean;
    hashVerificationEnabled: boolean;
    template: string;
};
export type SystemConfigTemplateEmailsDto = {
    albumInviteTemplate: string;
    albumUpdateTemplate: string;
    welcomeTemplate: string;
};
export type SystemConfigTemplatesDto = {
    email: SystemConfigTemplateEmailsDto;
};
export type SystemConfigThemeDto = {
    customCss: string;
};
export type SystemConfigTrashDto = {
    days: number;
    enabled: boolean;
};
export type SystemConfigUserDto = {
    deleteDelay: number;
};
export type SystemConfigDto = {
    backup: SystemConfigBackupsDto;
    ffmpeg: SystemConfigFFmpegDto;
    image: SystemConfigImageDto;
    job: SystemConfigJobDto;
    library: SystemConfigLibraryDto;
    logging: SystemConfigLoggingDto;
    machineLearning: SystemConfigMachineLearningDto;
    map: SystemConfigMapDto;
    metadata: SystemConfigMetadataDto;
    newVersionCheck: SystemConfigNewVersionCheckDto;
    notifications: SystemConfigNotificationsDto;
    oauth: SystemConfigOAuthDto;
    passwordLogin: SystemConfigPasswordLoginDto;
    reverseGeocoding: SystemConfigReverseGeocodingDto;
    server: SystemConfigServerDto;
    storageTemplate: SystemConfigStorageTemplateDto;
    templates: SystemConfigTemplatesDto;
    theme: SystemConfigThemeDto;
    trash: SystemConfigTrashDto;
    user: SystemConfigUserDto;
};
export type SystemConfigTemplateStorageOptionDto = {
    dayOptions: string[];
    hourOptions: string[];
    minuteOptions: string[];
    monthOptions: string[];
    presetOptions: string[];
    secondOptions: string[];
    weekOptions: string[];
    yearOptions: string[];
};
export type AdminOnboardingUpdateDto = {
    isOnboarded: boolean;
};
export type ReverseGeocodingStateResponseDto = {
    lastImportFileName: string | null;
    lastUpdate: string | null;
};
export type TagCreateDto = {
    color?: string;
    name: string;
    parentId?: string | null;
};
export type TagUpsertDto = {
    tags: string[];
};
export type TagBulkAssetsDto = {
    assetIds: string[];
    tagIds: string[];
};
export type TagBulkAssetsResponseDto = {
    count: number;
};
export type TagUpdateDto = {
    color?: string | null;
};
export type TimeBucketResponseDto = {
    count: number;
    timeBucket: string;
};
export type TrashResponseDto = {
    count: number;
};
export type UserUpdateMeDto = {
    email?: string;
    name?: string;
    password?: string;
};
export type CreateProfileImageDto = {
    file: Blob;
};
export type CreateProfileImageResponseDto = {
    profileChangedAt: string;
    profileImagePath: string;
    userId: string;
};
export declare function getActivities({ albumId, assetId, level, $type, userId }: {
    albumId: string;
    assetId?: string;
    level?: ReactionLevel;
    $type?: ReactionType;
    userId?: string;
}, opts?: Oazapfts.RequestOpts): Promise<ActivityResponseDto[]>;
export declare function createActivity({ activityCreateDto }: {
    activityCreateDto: ActivityCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<ActivityResponseDto>;
export declare function getActivityStatistics({ albumId, assetId }: {
    albumId: string;
    assetId?: string;
}, opts?: Oazapfts.RequestOpts): Promise<ActivityStatisticsResponseDto>;
export declare function deleteActivity({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function searchUsersAdmin({ withDeleted }: {
    withDeleted?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto[]>;
export declare function createUserAdmin({ userAdminCreateDto }: {
    userAdminCreateDto: UserAdminCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function deleteUserAdmin({ id, userAdminDeleteDto }: {
    id: string;
    userAdminDeleteDto: UserAdminDeleteDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function getUserAdmin({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function updateUserAdmin({ id, userAdminUpdateDto }: {
    id: string;
    userAdminUpdateDto: UserAdminUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function getUserPreferencesAdmin({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<UserPreferencesResponseDto>;
export declare function updateUserPreferencesAdmin({ id, userPreferencesUpdateDto }: {
    id: string;
    userPreferencesUpdateDto: UserPreferencesUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserPreferencesResponseDto>;
export declare function restoreUserAdmin({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function getAllAlbums({ assetId, shared }: {
    assetId?: string;
    shared?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<AlbumResponseDto[]>;
export declare function createAlbum({ createAlbumDto }: {
    createAlbumDto: CreateAlbumDto;
}, opts?: Oazapfts.RequestOpts): Promise<AlbumResponseDto>;
export declare function getAlbumStatistics(opts?: Oazapfts.RequestOpts): Promise<AlbumStatisticsResponseDto>;
export declare function deleteAlbum({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getAlbumInfo({ id, key, withoutAssets }: {
    id: string;
    key?: string;
    withoutAssets?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<AlbumResponseDto>;
export declare function updateAlbumInfo({ id, updateAlbumDto }: {
    id: string;
    updateAlbumDto: UpdateAlbumDto;
}, opts?: Oazapfts.RequestOpts): Promise<AlbumResponseDto>;
export declare function removeAssetFromAlbum({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function addAssetsToAlbum({ id, key, bulkIdsDto }: {
    id: string;
    key?: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function removeUserFromAlbum({ id, userId }: {
    id: string;
    userId: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function updateAlbumUser({ id, userId, updateAlbumUserDto }: {
    id: string;
    userId: string;
    updateAlbumUserDto: UpdateAlbumUserDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function addUsersToAlbum({ id, addUsersDto }: {
    id: string;
    addUsersDto: AddUsersDto;
}, opts?: Oazapfts.RequestOpts): Promise<AlbumResponseDto>;
export declare function getApiKeys(opts?: Oazapfts.RequestOpts): Promise<ApiKeyResponseDto[]>;
export declare function createApiKey({ apiKeyCreateDto }: {
    apiKeyCreateDto: ApiKeyCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<ApiKeyCreateResponseDto>;
export declare function deleteApiKey({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getApiKey({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<ApiKeyResponseDto>;
export declare function updateApiKey({ id, apiKeyUpdateDto }: {
    id: string;
    apiKeyUpdateDto: ApiKeyUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<ApiKeyResponseDto>;
export declare function deleteAssets({ assetBulkDeleteDto }: {
    assetBulkDeleteDto: AssetBulkDeleteDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function uploadAsset({ key, xImmichChecksum, assetMediaCreateDto }: {
    key?: string;
    xImmichChecksum?: string;
    assetMediaCreateDto: AssetMediaCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetMediaResponseDto>;
export declare function updateAssets({ assetBulkUpdateDto }: {
    assetBulkUpdateDto: AssetBulkUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
/**
 * Checks if assets exist by checksums
 */
export declare function checkBulkUpload({ assetBulkUploadCheckDto }: {
    assetBulkUploadCheckDto: AssetBulkUploadCheckDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetBulkUploadCheckResponseDto>;
/**
 * Get all asset of a device that are in the database, ID only.
 */
export declare function getAllUserAssetsByDeviceId({ deviceId }: {
    deviceId: string;
}, opts?: Oazapfts.RequestOpts): Promise<string[]>;
/**
 * Checks if multiple assets exist on the server and returns all existing - used by background backup
 */
export declare function checkExistingAssets({ checkExistingAssetsDto }: {
    checkExistingAssetsDto: CheckExistingAssetsDto;
}, opts?: Oazapfts.RequestOpts): Promise<CheckExistingAssetsResponseDto>;
export declare function runAssetJobs({ assetJobsDto }: {
    assetJobsDto: AssetJobsDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getMemoryLane({ day, month }: {
    day: number;
    month: number;
}, opts?: Oazapfts.RequestOpts): Promise<MemoryLaneResponseDto[]>;
/**
 * This property was deprecated in v1.116.0
 */
export declare function getRandom({ count }: {
    count?: number;
}, opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto[]>;
export declare function getAssetStatistics({ isArchived, isFavorite, isTrashed }: {
    isArchived?: boolean;
    isFavorite?: boolean;
    isTrashed?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<AssetStatsResponseDto>;
export declare function getAssetInfo({ id, key }: {
    id: string;
    key?: string;
}, opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto>;
export declare function updateAsset({ id, updateAssetDto }: {
    id: string;
    updateAssetDto: UpdateAssetDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto>;
export declare function downloadAsset({ id, key }: {
    id: string;
    key?: string;
}, opts?: Oazapfts.RequestOpts): Promise<Blob>;
/**
 * Replace the asset with new file, without changing its id
 */
export declare function replaceAsset({ id, key, assetMediaReplaceDto }: {
    id: string;
    key?: string;
    assetMediaReplaceDto: AssetMediaReplaceDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetMediaResponseDto>;
export declare function viewAsset({ id, key, size }: {
    id: string;
    key?: string;
    size?: AssetMediaSize;
}, opts?: Oazapfts.RequestOpts): Promise<Blob>;
export declare function playAssetVideo({ id, key }: {
    id: string;
    key?: string;
}, opts?: Oazapfts.RequestOpts): Promise<Blob>;
export declare function getAuditDeletes({ after, entityType, userId }: {
    after: string;
    entityType: EntityType;
    userId?: string;
}, opts?: Oazapfts.RequestOpts): Promise<AuditDeletesResponseDto>;
export declare function signUpAdmin({ signUpDto }: {
    signUpDto: SignUpDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function changePassword({ changePasswordDto }: {
    changePasswordDto: ChangePasswordDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function login({ loginCredentialDto }: {
    loginCredentialDto: LoginCredentialDto;
}, opts?: Oazapfts.RequestOpts): Promise<LoginResponseDto>;
export declare function logout(opts?: Oazapfts.RequestOpts): Promise<LogoutResponseDto>;
export declare function validateAccessToken(opts?: Oazapfts.RequestOpts): Promise<ValidateAccessTokenResponseDto>;
export declare function downloadArchive({ key, assetIdsDto }: {
    key?: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<Blob>;
export declare function getDownloadInfo({ key, downloadInfoDto }: {
    key?: string;
    downloadInfoDto: DownloadInfoDto;
}, opts?: Oazapfts.RequestOpts): Promise<DownloadResponseDto>;
export declare function getAssetDuplicates(opts?: Oazapfts.RequestOpts): Promise<DuplicateResponseDto[]>;
export declare function getFaces({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<AssetFaceResponseDto[]>;
export declare function reassignFacesById({ id, faceDto }: {
    id: string;
    faceDto: FaceDto;
}, opts?: Oazapfts.RequestOpts): Promise<PersonResponseDto>;
export declare function getAllJobsStatus(opts?: Oazapfts.RequestOpts): Promise<AllJobStatusResponseDto>;
export declare function createJob({ jobCreateDto }: {
    jobCreateDto: JobCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function sendJobCommand({ id, jobCommandDto }: {
    id: JobName;
    jobCommandDto: JobCommandDto;
}, opts?: Oazapfts.RequestOpts): Promise<JobStatusDto>;
export declare function getAllLibraries(opts?: Oazapfts.RequestOpts): Promise<LibraryResponseDto[]>;
export declare function createLibrary({ createLibraryDto }: {
    createLibraryDto: CreateLibraryDto;
}, opts?: Oazapfts.RequestOpts): Promise<LibraryResponseDto>;
export declare function deleteLibrary({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getLibrary({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<LibraryResponseDto>;
export declare function updateLibrary({ id, updateLibraryDto }: {
    id: string;
    updateLibraryDto: UpdateLibraryDto;
}, opts?: Oazapfts.RequestOpts): Promise<LibraryResponseDto>;
export declare function scanLibrary({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getLibraryStatistics({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<LibraryStatsResponseDto>;
export declare function validate({ id, validateLibraryDto }: {
    id: string;
    validateLibraryDto: ValidateLibraryDto;
}, opts?: Oazapfts.RequestOpts): Promise<ValidateLibraryResponseDto>;
export declare function getMapMarkers({ fileCreatedAfter, fileCreatedBefore, isArchived, isFavorite, withPartners, withSharedAlbums }: {
    fileCreatedAfter?: string;
    fileCreatedBefore?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    withPartners?: boolean;
    withSharedAlbums?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<MapMarkerResponseDto[]>;
export declare function reverseGeocode({ lat, lon }: {
    lat: number;
    lon: number;
}, opts?: Oazapfts.RequestOpts): Promise<MapReverseGeocodeResponseDto[]>;
export declare function searchMemories(opts?: Oazapfts.RequestOpts): Promise<MemoryResponseDto[]>;
export declare function createMemory({ memoryCreateDto }: {
    memoryCreateDto: MemoryCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<MemoryResponseDto>;
export declare function deleteMemory({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getMemory({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<MemoryResponseDto>;
export declare function updateMemory({ id, memoryUpdateDto }: {
    id: string;
    memoryUpdateDto: MemoryUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<MemoryResponseDto>;
export declare function removeMemoryAssets({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function addMemoryAssets({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function getNotificationTemplate({ name, templateDto }: {
    name: string;
    templateDto: TemplateDto;
}, opts?: Oazapfts.RequestOpts): Promise<TemplateResponseDto>;
export declare function sendTestEmail({ systemConfigSmtpDto }: {
    systemConfigSmtpDto: SystemConfigSmtpDto;
}, opts?: Oazapfts.RequestOpts): Promise<TestEmailResponseDto>;
export declare function startOAuth({ oAuthConfigDto }: {
    oAuthConfigDto: OAuthConfigDto;
}, opts?: Oazapfts.RequestOpts): Promise<OAuthAuthorizeResponseDto>;
export declare function finishOAuth({ oAuthCallbackDto }: {
    oAuthCallbackDto: OAuthCallbackDto;
}, opts?: Oazapfts.RequestOpts): Promise<LoginResponseDto>;
export declare function linkOAuthAccount({ oAuthCallbackDto }: {
    oAuthCallbackDto: OAuthCallbackDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function redirectOAuthToMobile(opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function unlinkOAuthAccount(opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function getPartners({ direction }: {
    direction: PartnerDirection;
}, opts?: Oazapfts.RequestOpts): Promise<PartnerResponseDto[]>;
export declare function removePartner({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function createPartner({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<PartnerResponseDto>;
export declare function updatePartner({ id, updatePartnerDto }: {
    id: string;
    updatePartnerDto: UpdatePartnerDto;
}, opts?: Oazapfts.RequestOpts): Promise<PartnerResponseDto>;
export declare function getAllPeople({ closestAssetId, closestPersonId, page, size, withHidden }: {
    closestAssetId?: string;
    closestPersonId?: string;
    page?: number;
    size?: number;
    withHidden?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<PeopleResponseDto>;
export declare function createPerson({ personCreateDto }: {
    personCreateDto: PersonCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<PersonResponseDto>;
export declare function updatePeople({ peopleUpdateDto }: {
    peopleUpdateDto: PeopleUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function getPerson({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<PersonResponseDto>;
export declare function updatePerson({ id, personUpdateDto }: {
    id: string;
    personUpdateDto: PersonUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<PersonResponseDto>;
export declare function mergePerson({ id, mergePersonDto }: {
    id: string;
    mergePersonDto: MergePersonDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function reassignFaces({ id, assetFaceUpdateDto }: {
    id: string;
    assetFaceUpdateDto: AssetFaceUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<PersonResponseDto[]>;
export declare function getPersonStatistics({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<PersonStatisticsResponseDto>;
export declare function getPersonThumbnail({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<Blob>;
export declare function getAuditFiles(opts?: Oazapfts.RequestOpts): Promise<FileReportDto>;
export declare function getFileChecksums({ fileChecksumDto }: {
    fileChecksumDto: FileChecksumDto;
}, opts?: Oazapfts.RequestOpts): Promise<FileChecksumResponseDto[]>;
export declare function fixAuditFiles({ fileReportFixDto }: {
    fileReportFixDto: FileReportFixDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getAssetsByCity(opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto[]>;
export declare function getExploreData(opts?: Oazapfts.RequestOpts): Promise<SearchExploreResponseDto[]>;
export declare function searchAssets({ metadataSearchDto }: {
    metadataSearchDto: MetadataSearchDto;
}, opts?: Oazapfts.RequestOpts): Promise<SearchResponseDto>;
export declare function searchPerson({ name, withHidden }: {
    name: string;
    withHidden?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<PersonResponseDto[]>;
export declare function searchPlaces({ name }: {
    name: string;
}, opts?: Oazapfts.RequestOpts): Promise<PlacesResponseDto[]>;
export declare function searchRandom({ randomSearchDto }: {
    randomSearchDto: RandomSearchDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto[]>;
export declare function searchSmart({ smartSearchDto }: {
    smartSearchDto: SmartSearchDto;
}, opts?: Oazapfts.RequestOpts): Promise<SearchResponseDto>;
export declare function getSearchSuggestions({ country, includeNull, make, model, state, $type }: {
    country?: string;
    includeNull?: boolean;
    make?: string;
    model?: string;
    state?: string;
    $type: SearchSuggestionType;
}, opts?: Oazapfts.RequestOpts): Promise<string[]>;
export declare function getAboutInfo(opts?: Oazapfts.RequestOpts): Promise<ServerAboutResponseDto>;
export declare function getServerConfig(opts?: Oazapfts.RequestOpts): Promise<ServerConfigDto>;
export declare function getServerFeatures(opts?: Oazapfts.RequestOpts): Promise<ServerFeaturesDto>;
export declare function deleteServerLicense(opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getServerLicense(opts?: Oazapfts.RequestOpts): Promise<LicenseResponseDto>;
export declare function setServerLicense({ licenseKeyDto }: {
    licenseKeyDto: LicenseKeyDto;
}, opts?: Oazapfts.RequestOpts): Promise<LicenseResponseDto>;
export declare function getSupportedMediaTypes(opts?: Oazapfts.RequestOpts): Promise<ServerMediaTypesResponseDto>;
export declare function pingServer(opts?: Oazapfts.RequestOpts): Promise<ServerPingResponseRead>;
export declare function getServerStatistics(opts?: Oazapfts.RequestOpts): Promise<ServerStatsResponseDto>;
export declare function getStorage(opts?: Oazapfts.RequestOpts): Promise<ServerStorageResponseDto>;
export declare function getTheme(opts?: Oazapfts.RequestOpts): Promise<ServerThemeDto>;
export declare function getServerVersion(opts?: Oazapfts.RequestOpts): Promise<ServerVersionResponseDto>;
export declare function getVersionHistory(opts?: Oazapfts.RequestOpts): Promise<ServerVersionHistoryResponseDto[]>;
export declare function deleteAllSessions(opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getSessions(opts?: Oazapfts.RequestOpts): Promise<SessionResponseDto[]>;
export declare function deleteSession({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getAllSharedLinks(opts?: Oazapfts.RequestOpts): Promise<SharedLinkResponseDto[]>;
export declare function createSharedLink({ sharedLinkCreateDto }: {
    sharedLinkCreateDto: SharedLinkCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<SharedLinkResponseDto>;
export declare function getMySharedLink({ key, password, token }: {
    key?: string;
    password?: string;
    token?: string;
}, opts?: Oazapfts.RequestOpts): Promise<SharedLinkResponseDto>;
export declare function removeSharedLink({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getSharedLinkById({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<SharedLinkResponseDto>;
export declare function updateSharedLink({ id, sharedLinkEditDto }: {
    id: string;
    sharedLinkEditDto: SharedLinkEditDto;
}, opts?: Oazapfts.RequestOpts): Promise<SharedLinkResponseDto>;
export declare function removeSharedLinkAssets({ id, key, assetIdsDto }: {
    id: string;
    key?: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetIdsResponseDto[]>;
export declare function addSharedLinkAssets({ id, key, assetIdsDto }: {
    id: string;
    key?: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetIdsResponseDto[]>;
export declare function deleteStacks({ bulkIdsDto }: {
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function searchStacks({ primaryAssetId }: {
    primaryAssetId?: string;
}, opts?: Oazapfts.RequestOpts): Promise<StackResponseDto[]>;
export declare function createStack({ stackCreateDto }: {
    stackCreateDto: StackCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<StackResponseDto>;
export declare function deleteStack({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getStack({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<StackResponseDto>;
export declare function updateStack({ id, stackUpdateDto }: {
    id: string;
    stackUpdateDto: StackUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<StackResponseDto>;
export declare function getDeltaSync({ assetDeltaSyncDto }: {
    assetDeltaSyncDto: AssetDeltaSyncDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetDeltaSyncResponseDto>;
export declare function getFullSyncForUser({ assetFullSyncDto }: {
    assetFullSyncDto: AssetFullSyncDto;
}, opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto[]>;
export declare function getConfig(opts?: Oazapfts.RequestOpts): Promise<SystemConfigDto>;
export declare function updateConfig({ systemConfigDto }: {
    systemConfigDto: SystemConfigDto;
}, opts?: Oazapfts.RequestOpts): Promise<SystemConfigDto>;
export declare function getConfigDefaults(opts?: Oazapfts.RequestOpts): Promise<SystemConfigDto>;
export declare function getStorageTemplateOptions(opts?: Oazapfts.RequestOpts): Promise<SystemConfigTemplateStorageOptionDto>;
export declare function getAdminOnboarding(opts?: Oazapfts.RequestOpts): Promise<AdminOnboardingUpdateDto>;
export declare function updateAdminOnboarding({ adminOnboardingUpdateDto }: {
    adminOnboardingUpdateDto: AdminOnboardingUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getReverseGeocodingState(opts?: Oazapfts.RequestOpts): Promise<ReverseGeocodingStateResponseDto>;
export declare function getAllTags(opts?: Oazapfts.RequestOpts): Promise<TagResponseDto[]>;
export declare function createTag({ tagCreateDto }: {
    tagCreateDto: TagCreateDto;
}, opts?: Oazapfts.RequestOpts): Promise<TagResponseDto>;
export declare function upsertTags({ tagUpsertDto }: {
    tagUpsertDto: TagUpsertDto;
}, opts?: Oazapfts.RequestOpts): Promise<TagResponseDto[]>;
export declare function bulkTagAssets({ tagBulkAssetsDto }: {
    tagBulkAssetsDto: TagBulkAssetsDto;
}, opts?: Oazapfts.RequestOpts): Promise<TagBulkAssetsResponseDto>;
export declare function deleteTag({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getTagById({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<TagResponseDto>;
export declare function updateTag({ id, tagUpdateDto }: {
    id: string;
    tagUpdateDto: TagUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<TagResponseDto>;
export declare function untagAssets({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function tagAssets({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<BulkIdResponseDto[]>;
export declare function getTimeBucket({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, tagId, timeBucket, userId, withPartners, withStacked }: {
    albumId?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    isTrashed?: boolean;
    key?: string;
    order?: AssetOrder;
    personId?: string;
    size: TimeBucketSize;
    tagId?: string;
    timeBucket: string;
    userId?: string;
    withPartners?: boolean;
    withStacked?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto[]>;
export declare function getTimeBuckets({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, tagId, userId, withPartners, withStacked }: {
    albumId?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    isTrashed?: boolean;
    key?: string;
    order?: AssetOrder;
    personId?: string;
    size: TimeBucketSize;
    tagId?: string;
    userId?: string;
    withPartners?: boolean;
    withStacked?: boolean;
}, opts?: Oazapfts.RequestOpts): Promise<TimeBucketResponseDto[]>;
export declare function emptyTrash(opts?: Oazapfts.RequestOpts): Promise<TrashResponseDto>;
export declare function restoreTrash(opts?: Oazapfts.RequestOpts): Promise<TrashResponseDto>;
export declare function restoreAssets({ bulkIdsDto }: {
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): Promise<TrashResponseDto>;
export declare function searchUsers(opts?: Oazapfts.RequestOpts): Promise<UserResponseDto[]>;
export declare function getMyUser(opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function updateMyUser({ userUpdateMeDto }: {
    userUpdateMeDto: UserUpdateMeDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserAdminResponseDto>;
export declare function deleteUserLicense(opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function getUserLicense(opts?: Oazapfts.RequestOpts): Promise<LicenseResponseDto>;
export declare function setUserLicense({ licenseKeyDto }: {
    licenseKeyDto: LicenseKeyDto;
}, opts?: Oazapfts.RequestOpts): Promise<LicenseResponseDto>;
export declare function getMyPreferences(opts?: Oazapfts.RequestOpts): Promise<UserPreferencesResponseDto>;
export declare function updateMyPreferences({ userPreferencesUpdateDto }: {
    userPreferencesUpdateDto: UserPreferencesUpdateDto;
}, opts?: Oazapfts.RequestOpts): Promise<UserPreferencesResponseDto>;
export declare function deleteProfileImage(opts?: Oazapfts.RequestOpts): Promise<never>;
export declare function createProfileImage({ createProfileImageDto }: {
    createProfileImageDto: CreateProfileImageDto;
}, opts?: Oazapfts.RequestOpts): Promise<CreateProfileImageResponseDto>;
export declare function getUser({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<UserResponseDto>;
export declare function getProfileImage({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): Promise<Blob>;
export declare function getAssetsByOriginalPath({ path }: {
    path: string;
}, opts?: Oazapfts.RequestOpts): Promise<AssetResponseDto[]>;
export declare function getUniqueOriginalPaths(opts?: Oazapfts.RequestOpts): Promise<string[]>;
export declare enum ReactionLevel {
    Album = "album",
    Asset = "asset"
}
export declare enum ReactionType {
    Comment = "comment",
    Like = "like"
}
export declare enum UserAvatarColor {
    Primary = "primary",
    Pink = "pink",
    Red = "red",
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    Purple = "purple",
    Orange = "orange",
    Gray = "gray",
    Amber = "amber"
}
export declare enum UserStatus {
    Active = "active",
    Removing = "removing",
    Deleted = "deleted"
}
export declare enum AlbumUserRole {
    Editor = "editor",
    Viewer = "viewer"
}
export declare enum SourceType {
    MachineLearning = "machine-learning",
    Exif = "exif"
}
export declare enum AssetTypeEnum {
    Image = "IMAGE",
    Video = "VIDEO",
    Audio = "AUDIO",
    Other = "OTHER"
}
export declare enum AssetOrder {
    Asc = "asc",
    Desc = "desc"
}
export declare enum Error {
    Duplicate = "duplicate",
    NoPermission = "no_permission",
    NotFound = "not_found",
    Unknown = "unknown"
}
export declare enum Permission {
    All = "all",
    ActivityCreate = "activity.create",
    ActivityRead = "activity.read",
    ActivityUpdate = "activity.update",
    ActivityDelete = "activity.delete",
    ActivityStatistics = "activity.statistics",
    ApiKeyCreate = "apiKey.create",
    ApiKeyRead = "apiKey.read",
    ApiKeyUpdate = "apiKey.update",
    ApiKeyDelete = "apiKey.delete",
    AssetRead = "asset.read",
    AssetUpdate = "asset.update",
    AssetDelete = "asset.delete",
    AssetShare = "asset.share",
    AssetView = "asset.view",
    AssetDownload = "asset.download",
    AssetUpload = "asset.upload",
    AlbumCreate = "album.create",
    AlbumRead = "album.read",
    AlbumUpdate = "album.update",
    AlbumDelete = "album.delete",
    AlbumStatistics = "album.statistics",
    AlbumAddAsset = "album.addAsset",
    AlbumRemoveAsset = "album.removeAsset",
    AlbumShare = "album.share",
    AlbumDownload = "album.download",
    AuthDeviceDelete = "authDevice.delete",
    ArchiveRead = "archive.read",
    FaceCreate = "face.create",
    FaceRead = "face.read",
    FaceUpdate = "face.update",
    FaceDelete = "face.delete",
    LibraryCreate = "library.create",
    LibraryRead = "library.read",
    LibraryUpdate = "library.update",
    LibraryDelete = "library.delete",
    LibraryStatistics = "library.statistics",
    TimelineRead = "timeline.read",
    TimelineDownload = "timeline.download",
    MemoryCreate = "memory.create",
    MemoryRead = "memory.read",
    MemoryUpdate = "memory.update",
    MemoryDelete = "memory.delete",
    PartnerCreate = "partner.create",
    PartnerRead = "partner.read",
    PartnerUpdate = "partner.update",
    PartnerDelete = "partner.delete",
    PersonCreate = "person.create",
    PersonRead = "person.read",
    PersonUpdate = "person.update",
    PersonDelete = "person.delete",
    PersonStatistics = "person.statistics",
    PersonMerge = "person.merge",
    PersonReassign = "person.reassign",
    SessionRead = "session.read",
    SessionUpdate = "session.update",
    SessionDelete = "session.delete",
    SharedLinkCreate = "sharedLink.create",
    SharedLinkRead = "sharedLink.read",
    SharedLinkUpdate = "sharedLink.update",
    SharedLinkDelete = "sharedLink.delete",
    StackCreate = "stack.create",
    StackRead = "stack.read",
    StackUpdate = "stack.update",
    StackDelete = "stack.delete",
    SystemConfigRead = "systemConfig.read",
    SystemConfigUpdate = "systemConfig.update",
    SystemMetadataRead = "systemMetadata.read",
    SystemMetadataUpdate = "systemMetadata.update",
    TagCreate = "tag.create",
    TagRead = "tag.read",
    TagUpdate = "tag.update",
    TagDelete = "tag.delete",
    TagAsset = "tag.asset",
    AdminUserCreate = "admin.user.create",
    AdminUserRead = "admin.user.read",
    AdminUserUpdate = "admin.user.update",
    AdminUserDelete = "admin.user.delete"
}
export declare enum AssetMediaStatus {
    Created = "created",
    Replaced = "replaced",
    Duplicate = "duplicate"
}
export declare enum Action {
    Accept = "accept",
    Reject = "reject"
}
export declare enum Reason {
    Duplicate = "duplicate",
    UnsupportedFormat = "unsupported-format"
}
export declare enum AssetJobName {
    RefreshFaces = "refresh-faces",
    RefreshMetadata = "refresh-metadata",
    RegenerateThumbnail = "regenerate-thumbnail",
    TranscodeVideo = "transcode-video"
}
export declare enum AssetMediaSize {
    Preview = "preview",
    Thumbnail = "thumbnail"
}
export declare enum EntityType {
    Asset = "ASSET",
    Album = "ALBUM"
}
export declare enum ManualJobName {
    PersonCleanup = "person-cleanup",
    TagCleanup = "tag-cleanup",
    UserCleanup = "user-cleanup"
}
export declare enum JobName {
    ThumbnailGeneration = "thumbnailGeneration",
    MetadataExtraction = "metadataExtraction",
    VideoConversion = "videoConversion",
    FaceDetection = "faceDetection",
    FacialRecognition = "facialRecognition",
    SmartSearch = "smartSearch",
    DuplicateDetection = "duplicateDetection",
    BackgroundTask = "backgroundTask",
    StorageTemplateMigration = "storageTemplateMigration",
    Migration = "migration",
    Search = "search",
    Sidecar = "sidecar",
    Library = "library",
    Notifications = "notifications",
    BackupDatabase = "backupDatabase"
}
export declare enum JobCommand {
    Start = "start",
    Pause = "pause",
    Resume = "resume",
    Empty = "empty",
    ClearFailed = "clear-failed"
}
export declare enum MemoryType {
    OnThisDay = "on_this_day"
}
export declare enum PartnerDirection {
    SharedBy = "shared-by",
    SharedWith = "shared-with"
}
export declare enum PathEntityType {
    Asset = "asset",
    Person = "person",
    User = "user"
}
export declare enum PathType {
    Original = "original",
    Preview = "preview",
    Thumbnail = "thumbnail",
    EncodedVideo = "encoded_video",
    Sidecar = "sidecar",
    Face = "face",
    Profile = "profile"
}
export declare enum SearchSuggestionType {
    Country = "country",
    State = "state",
    City = "city",
    CameraMake = "camera-make",
    CameraModel = "camera-model"
}
export declare enum SharedLinkType {
    Album = "ALBUM",
    Individual = "INDIVIDUAL"
}
export declare enum Error2 {
    Duplicate = "duplicate",
    NoPermission = "no_permission",
    NotFound = "not_found"
}
export declare enum TranscodeHWAccel {
    Nvenc = "nvenc",
    Qsv = "qsv",
    Vaapi = "vaapi",
    Rkmpp = "rkmpp",
    Disabled = "disabled"
}
export declare enum AudioCodec {
    Mp3 = "mp3",
    Aac = "aac",
    Libopus = "libopus",
    PcmS16Le = "pcm_s16le"
}
export declare enum VideoContainer {
    Mov = "mov",
    Mp4 = "mp4",
    Ogg = "ogg",
    Webm = "webm"
}
export declare enum VideoCodec {
    H264 = "h264",
    Hevc = "hevc",
    Vp9 = "vp9",
    Av1 = "av1"
}
export declare enum CQMode {
    Auto = "auto",
    Cqp = "cqp",
    Icq = "icq"
}
export declare enum ToneMapping {
    Hable = "hable",
    Mobius = "mobius",
    Reinhard = "reinhard",
    Disabled = "disabled"
}
export declare enum TranscodePolicy {
    All = "all",
    Optimal = "optimal",
    Bitrate = "bitrate",
    Required = "required",
    Disabled = "disabled"
}
export declare enum Colorspace {
    Srgb = "srgb",
    P3 = "p3"
}
export declare enum ImageFormat {
    Jpeg = "jpeg",
    Webp = "webp"
}
export declare enum LogLevel {
    Verbose = "verbose",
    Debug = "debug",
    Log = "log",
    Warn = "warn",
    Error = "error",
    Fatal = "fatal"
}
export declare enum TimeBucketSize {
    Day = "DAY",
    Month = "MONTH"
}
