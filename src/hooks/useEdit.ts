import axios from 'axios';
import * as React from 'react';
import { useUpdate } from '../provider/ChangeProvider';

const useEdit = (url: any) => {
  const [data, setData] = React.useState<any>(null);
  const [pushData, setPushData] = React.useState<any>();
  const update = useUpdate();

  React.useEffect(() => {
    axios({
      method: 'put',
      url: url,
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
  }, [url, pushData]);
  return [data, setPushData];
};

export default useEdit;
