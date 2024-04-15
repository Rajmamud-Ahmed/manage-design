import axios from 'axios';
import * as React from 'react';
import { useUpdate } from '../provider/ChangeProvider';
import useUrl from './useUrl';

const useEdit = (route: any) => {
  const [data, setData] = React.useState<any>(null);
  const [pushData, setPushData] = React.useState<any>();
  const update = useUpdate();
  const ip = useUrl();

  React.useEffect(() => {
    axios({
      method: 'put',
      url: `${ip}${route}`,
      responseType: 'json',
      data: pushData
    })
      .then((response) => {
        setData(response.data);
        update.newTask(pushData);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response.data);
      });
  }, [route, pushData]);
  return [data, setPushData];
};

export default useEdit;
