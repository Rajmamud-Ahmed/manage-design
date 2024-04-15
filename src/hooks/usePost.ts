import axios from 'axios';
import * as React from 'react';
import { useUpdate } from '../provider/ChangeProvider';
import { useNavigation } from '@react-navigation/native';
import useUrl from './useUrl';

const usePost = (route: any) => {
  const [data, setData] = React.useState<any>(null);
  const [pushData, setPushData] = React.useState<any>();
  const update = useUpdate();
  const navigation = useNavigation<any>();
  const ip = useUrl();

  React.useEffect(() => {
    if (pushData !== undefined) {
      axios({
        method: 'post',
        url: `${ip}${route}`,
        responseType: 'json',
        data: pushData
      })
        .then((response) => {
          setData(response.data);
          update.newTask(response.data);
          navigation.navigate('Home');
        })
        .catch((error) => {
          console.error(error);
          console.log(error.response.data);
        });
    }
  }, [route, pushData]);
  return [data, setPushData];
};

export default usePost;
