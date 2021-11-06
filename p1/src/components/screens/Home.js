import react,{useEffect, useState} from 'react'


const Home = ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
        
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            setData(result.post)
        })
    },[])
    return (
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                <h5>{item.postedBy.name}</h5>
                <div className="card-image">
                    <img src={item.photo}/>
                </div>
                <div className="card-content">
                    <h5>{item.title}</h5>
                    <p>{item.body}</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
                    )
                })
            }
            
        </div>
    )
}

export default Home