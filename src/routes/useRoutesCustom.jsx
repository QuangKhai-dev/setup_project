import { useRoutes } from 'react-router-dom';
const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: '/',
    },
  ]);

  return element;
};

export default useRoutesCustom;
