import React, { useEffect, useState } from 'react'
import paginate from './utils.jsx';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setList(paginate(data));
    setLoading(false);
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    {loading, list}
  )
}