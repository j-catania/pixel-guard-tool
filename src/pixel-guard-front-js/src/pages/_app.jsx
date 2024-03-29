import 'core-js/es/promise';
import 'core-js/es/array';
import 'core-js/es/object';
import 'core-js/es/number';
import 'core-js/es/symbol/iterator';
import 'regenerator-runtime/runtime';
import React from 'react';
import {
  QueryCache,
  ReactQueryCacheProvider,
} from 'react-query'
import { ReactQueryDevtools, } from 'react-query-devtools'
import { Hydrate, } from 'react-query/hydration'

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const PixelGuardApp = ({
  Component,
  pageProps,
}) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </Hydrate>
    </ReactQueryCacheProvider>
  );
}

export default PixelGuardApp;
