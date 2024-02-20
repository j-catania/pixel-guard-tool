import {
  AppLogger,
} from '@pixel-guard/commons';

const PIXEL_GUARD_API_PATH = '/pixel-guard/graphql';
const PIXEL_GUARD_HEALTH_CHECK_PATH = `${PIXEL_GUARD_API_PATH}/health-checks`;
const PIXEL_GUARD_MONITORING_PATH = `${PIXEL_GUARD_API_PATH}/monitoring`;

const SERVER_ENV_CONFIGURATION = {
  production: {
    ssl: false,
    port: 5001,
    hostname: 'localhost',
    apiPath: PIXEL_GUARD_API_PATH,
    healthCheckPath: PIXEL_GUARD_HEALTH_CHECK_PATH,
    monitoringPath: PIXEL_GUARD_MONITORING_PATH,
    databaseUri: '',
    serverTimeout: 900000, // milliseconds
  },
  development: {
    ssl: false,
    port: 5001,
    hostname: 'localhost',
    apiPath: PIXEL_GUARD_API_PATH,
    healthCheckPath: PIXEL_GUARD_HEALTH_CHECK_PATH,
    monitoringPath: PIXEL_GUARD_MONITORING_PATH,
    databaseUri: '',
    serverTimeout: 900000, // milliseconds
  },
};

const getCurrentContext = () => (
  process?.argv?.includes('--dev') ?
    'development' :
    'production'
);

const getCurrentConfig = () => {
  const currentContext = getCurrentContext();
  AppLogger.info(`[getCurrentConfig] currentContext: ${currentContext}`);

  const currentConfig = SERVER_ENV_CONFIGURATION[currentContext];
  return ({
    ...(currentConfig || {}),
    serverUrl: `http${currentConfig.ssl ? 's' : ''}://${currentConfig.hostname}:${currentConfig.port}${currentConfig.apiPath}`,
  });
};

const ServerConfig = {
  getCurrentConfig,
  getCurrentContext,
};

export default ServerConfig;
