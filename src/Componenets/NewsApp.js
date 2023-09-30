import React, { useEffect ,useState} from 'react'
import News from './News';

function NewsApp() {

    const apiKey = 'dpub_30341a7225534223a5dd8654a543dee931cd9';
    const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_30341a7225534223a5dd8654a543dee931cd9&q=pegasus&language=en`
    
        useEffect(()=>{
        fetchData(); 
    },[])
    const [newsList, setNewsList] = useState([]);
    async function fetchData(){

        try{
            
            const response = await fetch(apiUrl);
            let jsonData = await response.json();


            setNewsList(jsonData.results);
        }
        catch(e){
            console.log(e,"error occured");
        }

    }

    // if(newsList == null){
    //     return 'api not fetch' ;
    // }
    return(
        <div style={{display: 'grid', gridTemplateColumns:'repeat(3,30%)',gap:'20px',justifyContent:'space-between',rowGap:'20px'}}>
            
            {newsList?.map((art)=>{
                return <News key={art.link} news={art}/>;
            })}

        </div>);
}

export default NewsApp