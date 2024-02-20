import React from 'react';
import { QueryCache, } from 'react-query'
import { dehydrate, } from 'react-query/hydration'
import PixelGuardAppListView from '../../components/PixelGuardAppListView.jsx';
import { getVisualTestListQuery, } from '../../services/apis/useGetVisualTestList.jsx';

const PixelGuardAppListPage = () => <PixelGuardAppListView />;

export async function getStaticProps() {
  const queryCache = new QueryCache()
  await queryCache.prefetchQuery(
    [
      'getVisualTestList',
      0,
    ],
    getVisualTestListQuery
  )

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  }
}


export default PixelGuardAppListPage;
