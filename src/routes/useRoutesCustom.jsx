import { useRoutes } from 'react-router-dom';

const useRoutesCustom = () => {
  let element = useRoutes([]);

  return element;
};

export default useRoutesCustom;
