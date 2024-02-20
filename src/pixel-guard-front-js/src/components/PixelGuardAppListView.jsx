import React, { useState, } from 'react';
import { Heading, } from '@chakra-ui/react'
import { useGetVisualTestList, } from "../services/apis/useGetVisualTestList.jsx";

const PixelGuardAppListView = ({
  isClient,
}) => {
  const [
    currentCount,
    setCurrentCount,
  ] = useState(10);

  const {
    data,
    isFetching,
  } = useGetVisualTestList(currentCount, isClient)

  if (isFetching) return <div>Loading</div>

  return (
    <>
      <Heading
        as='h2'
      >
        PixelGuardAppListView
      </Heading >
    </>
  )
};

// propsType (validation)
PixelGuardAppListView.propTypes = {};

// default props
PixelGuardAppListView.defaultProps = {};

export default PixelGuardAppListView;
