import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../search/searchSlice';

const useDataGetter = () => {
  const { entities, error } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  let max = 1;

  const addOffset = (arr, offset) => arr.map((v) => v + offset);

  const setMaxQueries = () => {
    if (entities.length < 4 && error === null) {
      max = entities.length;
    } else {
      max = 4;
    }
  };

  const getFromList = useCallback((offset) => {
    setMaxQueries();
    if (error === null) {
      let arr = [...Array(max).keys()];
      arr = addOffset(arr, offset);
      const que = arr.map((q) => `https://collectionapi.metmuseum.org/public/collection/v1/objects/${entities[q]}`);
      dispatch(fetchData([...que]));
    }
  }, [entities]);

  return { getFromList };
};

export default useDataGetter;
