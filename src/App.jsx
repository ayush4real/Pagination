import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower';

const App = () => {
    const {loading, list: data} = useFetch();
    const [page, setPage] = useState(0);
    const [followers, setfollowers] = useState([]);

    useEffect(() => {
        if(loading) return
        setfollowers(data[page]);
    }, [loading, page])

    const handlePage = (index) => {
        setPage(index);
    }

    const nextPage = () => {
        if(page < data.length - 1){
            setPage(page + 1);
        }
    }

    const prevPage = () => {
        if(page > 0 ){
            setPage(page - 1);
        }
    }

    return (
        <main>
            <div className="section-title">
                <h1 className="heading" > {loading ? 'Loading...' : 'Followers'} </h1>
                <div className="underline"></div>
            </div> 
            <section className="followers">
                <div className="container">
                    {followers.map((item) => {
                        return <Follower key={item.id} {...item}/>
                    })}
                </div>
                {
                    !loading && 
                    <div className="btn-container">
                        <button className="prev-btn" onClick={ prevPage } > Prev </button>
                        {data.map((item, index) => {
                            return <button key={index} className={`page-btn ${index === page ? 'active-btn' : null }`} onClick={() => handlePage(index)} > {index + 1} </button>
                        })}
                        <button className="next-btn" onClick={nextPage} > Next </button>
                    </div> 
                }
            </section>
        </main>
    )
}

export default App
