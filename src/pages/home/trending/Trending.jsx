import React,{useState} from 'react'

import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'

import SwitchTabs from '../../../component/switchTabs/SwitchTabs'

import useFetch from '../../../hooks/useFetch'

import Carousel from '../../../component/carousel/Carousel'

const Trending = () => {
    const [endpoint , setEndpoint]= useState("day");

    

    const onTabChange = (tab)=>{
        setEndpoint (tab === "Day" ? "day" : "week");
    };

    const{data , loading} = useFetch(`/trending/all/${endpoint}`);    

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day" , "Week"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data = {data?.results} loading = {loading}/>
        </div>
    )
}

export default Trending