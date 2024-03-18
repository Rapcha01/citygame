// 

import UseFetch from ".";




//create a export function hook test
//return a div
export default function  UseFetchHookTest(){

 const {data, error, pending} = UseFetch("https://dummyjson.com/products", {})

 return (
    <div style={{justifyContent: "centre",
    textAlign:"center" 
    }}>
        <h1>Use Fetch Hook</h1>
        { pending ? <h3>Pending please wait</h3>: null}
        {error ? <h3> {error}</h3> : null }
        {data && data.products && data.products.length 
            ? data.products.map((productItem)=> ( <p key = {productItem.key}>{productItem.title}</p>)
    )
: null}
    </div>
 )
}