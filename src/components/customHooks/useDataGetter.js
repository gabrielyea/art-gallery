import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../search/searchSlice';

const useDataGetter = () => {
  const list = useSelector((state) => state.list.entities);
  const dispatch = useDispatch();

  const addOffset = (arr, offset) => arr.map((v) => v + offset);

  const getFromList = useCallback((offset) => {
    let arr = [...Array(4).keys()];
    arr = addOffset(arr, offset);
    const que = arr.map((q) => `https://collectionapi.metmuseum.org/public/collection/v1/objects/${list[q]}`);
    dispatch(fetchData([...que]));
  }, [list]);

  return { getFromList };
};

export default useDataGetter;
