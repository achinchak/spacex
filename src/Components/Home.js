import React, { useEffect, useState } from "react";

import capsules from './../../src/capsules'
import Banner from "./Banner";
import '../Styles/home.css';
import Search from "./Search";
import Posts from "./Posts";

import Pagination from "./Pagination";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [query, setQuery] = useState('');
    const [loader, setLoader] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [tempData, setTempData] = useState([]);

    console.log(query);
    useEffect(() => {
        const fetchHandler = async () => {
            setLoader(true);
            await fetch(capsules)
                .then((res) => res.json())
                .then((data) => setData(data))
            setLoader(false)
        };
        fetchHandler();
    }, []);

    //Get Current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    //change Page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <React.Fragment>
            {loader ? <h1>Loading....</h1> :
                <div className="container-fluid">
                    <Header />
                    <Banner />
                    <Search data={data} query={query} setQuery={setQuery} />
                    
                    <Posts currentPosts={currentPosts} tempData={tempData} openModal={openModal} setOpenModal={setOpenModal} setTempData={setTempData} />
                    <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
                    <Footer />
                </div>
            }
        </React.Fragment>
    );
}
