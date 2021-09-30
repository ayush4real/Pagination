import React from 'react'

const paginate = (followers) => {
    const itemsPerPage = 8;
    const pages = Math.ceil(followers.length / itemsPerPage);
    console.log(pages);

    const newFollowers = Array.from({length:pages}, (_,index) => {
        const start = index * itemsPerPage;
        return followers.slice(start,start + itemsPerPage);
    });

    return newFollowers;
}

export default paginate;