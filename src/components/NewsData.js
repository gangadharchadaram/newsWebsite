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
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-27&sortBy=publishedAt&apiKey=7aedcde9105e4010a33eb31e613c776c`;
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
