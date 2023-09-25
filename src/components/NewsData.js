import React, { useEffect, useState } from "react";
import NewCard from "./NewCard";
import "../styles/NewsData.css";

let input ={
    width: "250px",
    padding : "10px",
    borderRadius: "5px",
    outline: "none",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "calc((80vw)/2)",
}

function NewsData(){
    const [newsData, setNewsData] = useState([]);
    const [search, setSearch] = useState("dhoni")
    useEffect(() =>{
        (async function f1(){
            let url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=c43294dc7f42df719d7f03eaafb26998`;
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
            setNewsData(data["articles"]);
        })();
    }, [search]);
    return(
        <>
          <input style={input} type="text" placeholder="Search your news" 
          onChange={(e)=>{
            setSearch(e.target.value);
          }
          }/>
          <div className="news-data">
            {newsData?.map((item) =>{
                return <NewCard data={item} />
            })}
        </div>
        </>
    )
}

export default NewsData;