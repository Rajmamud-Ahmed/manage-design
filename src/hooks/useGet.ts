import axios from 'axios';
import * as React from 'react';
import useEdit from './useEdit';
import { useUpdate } from '../provider/ChangeProvider';

const useGet = (url: any) => {
  const [data, setData] = React.useState(null);
  const update = useUpdate();

  React.useEffect(() => {
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response.data);
      });
  }, [url, update.reloader]);
  return [data];
};

export default useGet;
