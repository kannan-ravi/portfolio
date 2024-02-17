import { environment } from "../api/apiConfig";

const useFetch = () => {
  const fetchData = async (url, data) => {
    const response = await fetch(`${environment}/api/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const fetchedData = await response.json();
    return fetchedData;
  };

  return { fetchData };
};

export default useFetch;
