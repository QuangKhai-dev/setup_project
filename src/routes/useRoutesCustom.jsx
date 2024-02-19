import { useRoutes } from 'react-router-dom';

const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: '/home',
      element: <h1 className="text-red-500 text-center">Hello</h1>,
    },
    {
      path: '/demo',
      element: <h1>Hello Demo</h1>,
    },
  ]);

  return element;
};

export default useRoutesCustom;
