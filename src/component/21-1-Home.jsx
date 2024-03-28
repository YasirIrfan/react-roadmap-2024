import React from 'react'
import { useNavigate } from 'react-router-dom' 

const Home = () => {
  const navigate = useNavigate();


  const NavToPage = (url)=>{
    let x = false;
    if(x){
      navigate(url);
    }
    else{
      navigate(url)
    }

  }

  return (
    <div>
      I am Home
      <button onClick={()=>NavToPage("/About")}>Go to About</button>
      <button onClick={()=>NavToPage("/Filter")}>Go to Filter</button>
    </div>
  )
}

export default Home
