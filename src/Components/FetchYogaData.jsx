import React from 'react';
import useFetch from './UseFetch';

const FetchYogaData = () => {

  const [data] = useFetch(
    'https://api.npoint.io/4459a9a10e43812e1152'
  );

  console.log(data);

  return (
    <>
        {data && data.map((yoga, index) => (
            <div key={index}>
                <h2>{yoga.name}</h2>
            </div>
    ))}
    </>
  );
};

export default FetchYogaData;