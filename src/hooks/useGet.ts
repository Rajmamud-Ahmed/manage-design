import axios from 'axios';
import * as React from 'react';
import useEdit from './useEdit';
import { useUpdate } from '../provider/ChangeProvider';
import useUrl from './useUrl';

const useGet = (route?: any) => {
  const [data, setData] = React.useState(null);
  const update = useUpdate();
  const ip = useUrl();

  React.useEffect(() => {
    axios({
      method: 'get',
      url: `${ip}${route}`,
      responseType: 'json'
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response.data);
      });
  }, [route, update.reloader]);
  return [data];
};

export default useGet;
