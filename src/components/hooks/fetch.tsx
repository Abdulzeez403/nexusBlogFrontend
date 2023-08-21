import axios from "axios";
import { useEffect, useState } from "react";
import { IFetchResult } from "./modal";

interface IProps {
  url: string;
}

const useFetch = ({ url }: IProps): IFetchResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<any | null>(null);
  const [serveError, setServeError] = useState<any | null>(null);
  const [itemLoading, setItemLoading] = useState<boolean[] | any>([]);

  const handleItemLoad = (index: number): void => {
    const newLoadingArray = [...itemLoading]; // create a copy of the itemLoading array
    newLoadingArray[index] = true; // set the loading state for the item at the given index to false
    setItemLoading(newLoadingArray); // update the state with the new loading state array
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;
        setApiData(data);
        setIsLoading(false);
        setItemLoading(new Array<boolean>(data.length).fill(false));
      } catch (err) {
        setServeError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    isLoading,
    apiData,
    serveError,
    handleItemLoad,
    itemLoading,
  };
};
export default useFetch;
