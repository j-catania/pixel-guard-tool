/* eslint-disable max-lines */
import {
  AppLogger,
} from '@pixel-guard/commons';

const getVisualTestListByPageAndParams = async (_, args) => {
  try {
    const {
      offset,
      limit,
      searchText,
    } = args || {};

    AppLogger.info(`[getVisualTestListByPageAndParams] offset : ${offset}`);
    AppLogger.info(`[getVisualTestListByPageAndParams] limit : ${limit}`);
    AppLogger.info(`[getVisualTestListByPageAndParams] searchText : ${searchText}`);

    const visualTestList = [];

    AppLogger.info(`[getVisualTestListByPageAndParams] visualTestList : ${visualTestList?.length}`);

    return visualTestList;
  } catch (error) {
    AppLogger.info(`[getVisualTestListByPageAndParams] error : ${error.message}`);
    return ([]);
  }
};

const VisualTestQueries = {
  getVisualTestListByPageAndParams,
};

export default VisualTestQueries;
