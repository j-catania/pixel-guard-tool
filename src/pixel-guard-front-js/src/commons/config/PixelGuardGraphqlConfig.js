const isPROD = false;
const PIXEL_GUARD_BFF_PATH = '/pixel-guard/graphql';
const PIXEL_GUARD_PROD_BFF_URL = PIXEL_GUARD_BFF_PATH;
const PIXEL_GUARD_DEV_BFF_URL = `http://localhost:5001${PIXEL_GUARD_BFF_PATH}`;

const PIXEL_GUARD_BFF_URL = isPROD
  ? PIXEL_GUARD_PROD_BFF_URL
  : PIXEL_GUARD_DEV_BFF_URL;

const PixelGuardGraphqlConfig = {
  PIXEL_GUARD_BFF_URL,
  PIXEL_GUARD_DEV_BFF_URL,
};

export default PixelGuardGraphqlConfig;
