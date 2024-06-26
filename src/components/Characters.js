import React, {useState,useEffect} from "react";

const Characters = () => {
    //states
    const [character,setcharacter] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setcharacter(data.results))
    },[])
    return(
        <div className="container">
            <div className="characters">
                {
                    character.map(item => (
                        <div className="box" key ={item.id}> 
                            <img src = {item.image} alt={item.name}/>
                            <div>
                                <h3 className="name">{item.name}</h3>
                                <p className="specie">{item.species}</p>
                                <p className="status">{item.status}</p>
                                <p className="location">{item.location.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );

}

export default Characters;