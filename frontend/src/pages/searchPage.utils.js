import { useEffect, useState } from 'react';
import axios from 'axios';

const search = (query, page) => {
  let cancel = () => {};
  return {
    cancel,
    get: {
      // eslint-disable-next-line no-return-assign
      cancelToken: new axios.CancelToken(((c) => (cancel = c))),
      method: 'GET',
      params: { s: query, page, apiKey: process.env.REACT_APP_KEY },
      url: 'http://www.omdbapi.com/',
    },
  };
};

export default (query, page) => {
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    setItems([]);
  }, [query]);

  useEffect(() => {
    const request = search(query, page);

    if (!query) {
      return () => request.cancel();
    }

    setLoading(true);
    setError(false);
    axios(request.get)
      .then((result) => {
        const { data: { Search = [], totalResults = 0 } } = result;

        setItems(Search);
        setNumberOfItems(totalResults);
        setLoading(false);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(true);
          setLoading(false);
        }
      });

    return () => request.cancel();
  }, [query, page]);

  return {
    error, items, loading, numberOfItems,
  };
}
