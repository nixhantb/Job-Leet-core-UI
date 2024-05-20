
//custom hooks for fetching data
import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const UseFetch = <T, > (url: string): FetchState<T> => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response  = await fetch(url);
                if(!response.ok){
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result: T = await response.json();
                setData(result);
            }

            catch(err){
                setError((err as Error).message);
            }
            finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
};

export default UseFetch;