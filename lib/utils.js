import { CLOUDFRONT_HOST, CN_REGION_HOST } from "./constants";
export const isCnPartition = (region) => region === "cn-north-1" || region === "cn-northwest-1";
export const getBaseUrl = (region) => isCnPartition(region) ? CN_REGION_HOST : CLOUDFRONT_HOST;
export const getContentPrefixUrl = (region) => `${getBaseUrl(region)}/content`;
export const getPrefixUrl = (region) => `${getBaseUrl(region)}/prefixes/main`;
