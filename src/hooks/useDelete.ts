import axios from 'axios';
import * as React from 'react';
import { useUpdate } from '../provider/ChangeProvider';
import { useNavigation } from '@react-navigation/native';

const useDelete = () => {
  const [data, setData] = React.useState<any>(null);
  const [urlId, setUrlId] = React.useState<any>(null);
  const update = useUpdate();

  const navigation = useNavigation<any>();

  React.useEffect(() => {
    if (urlId !== null) {
      axios({
        method: 'delete',
        url: urlId,
        responseType: 'json'
      })
        .then((response) => {
          setData(response.data);
          update.newTask({ content: '', taskName: '', taskStatus: false });
          navigation.navigate('Home');
        })
        .catch((error) => {
          console.error(error);
          console.log(error.response.data);
        });
    }
  }, [urlId]);
  return [data, setUrlId];
};

export default useDelete;
