import React from 'react';
import GraphqlClientRequest from 'graphql-request';
import {
  useQuery,
} from 'react-query';
import GET_VISUAL_TEST_LIST_PAGINATED from "../graphql/queries/GET_VISUAL_TEST_LIST_PAGINATED.js";
import PixelGuardConfig from "../../commons/config/PixelGuardConfig.js";

const {
  PIXEL_GUARD_QUERY_PAGE_SIZE,
  PIXEL_GUARD_BFF_URL,
} = PixelGuardConfig;

const getVisualTestListQuery = async (queryOffset) => GraphqlClientRequest(
  PIXEL_GUARD_BFF_URL,
  GET_VISUAL_TEST_LIST_PAGINATED,
  {
    offset: queryOffset ?? 0,
    limit: PIXEL_GUARD_QUERY_PAGE_SIZE,
  }
);

const useGetVisualTestList = () => {
  return useQuery([
    'getVisualTestList',
    GET_VISUAL_TEST_LIST_PAGINATED,
  ],
  getVisualTestListQuery
  );
}

export {
  useGetVisualTestList,
  getVisualTestListQuery,
};
