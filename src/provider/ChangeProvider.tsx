import * as React from 'react';

export interface ChangeProviderProps {
  reloader: {
    content?: string | undefined;
    taskName?: string | undefined;
    taskStatus?: boolean | undefined;
  };
  newTask: (value: any) => void;
  //   logout: (id: string) => Promise<void>;
}

const ChangeContext = React.createContext<ChangeProviderProps>(
  undefined as any
);

export const useUpdate = () => React.useContext(ChangeContext);

const ChangeProvider = (props: React.PropsWithChildren) => {
  const [reloader, setReloader] = React.useState<any>({
    content: '',
    taskName: '',
    taskStatus: false
  });

  const { children } = props;
  return (
    <ChangeContext.Provider
      value={{
        reloader,
        newTask: (value: ChangeProviderProps['reloader']) => {
          setReloader(value);
        }
        // logout: (id) => {
        //   return auth().signOut();
        // }
      }}
    >
      {children}
    </ChangeContext.Provider>
  );
};

export default ChangeProvider;
