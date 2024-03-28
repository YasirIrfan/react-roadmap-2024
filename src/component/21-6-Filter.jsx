import { useSearchParams } from "react-router-dom";

const Filter = () =>{
    const [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('city'));

    const age = searchParams.get('age');
    const city = searchParams.get('city');
    return(
        <div>
              <h1>I am filter component</h1>
              <h2>Age is: {age} </h2>
              <h2>City is: {city} </h2>
             
             <button onClick={()=>setSearchParams({age:55,city:"isb"})}>Cahgne Query Param</button>
        </div>
    )
}

export default Filter;