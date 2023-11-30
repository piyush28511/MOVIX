import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjg5Y2YyOTNmNTE0ODA5NTA1YmJlNTRmNGQ1ZjI3YSIsInN1YiI6IjY1M2E0YjhhNjc4MjU5MDExZWNlMTA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lhp7ywjbSiBf09Si97HQoX2EtkB2JvBE73ekZkIyTow";

const headers = {
    Authorization : "bearer " + TMDB_TOKEN,

};

export const fetchDataFromApi = async(url , params)=>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
}