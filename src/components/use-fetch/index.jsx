//create default function(url , options = {})
// impletment state ( data, pending, error)
//create a use effect with url a s dependecies
//create a async function fecthData

import { useEffect, useState } from "react";


export default function UseFetch(url, options ={}){
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    
    async function fetchData(){
        try {
            const response = await fetch (url, {...options});
            if(!response.ok) throw new Error(response.status.exit)

            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false);

        } catch (e){
            setError(`${e}. Some error occured`);
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData()

    },[url] )

    return {data, error, pending};

}