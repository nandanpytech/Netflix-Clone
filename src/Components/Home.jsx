import React from 'react'
import Row from './Row'
import req from '../Request';
import Banner from './Banner';
import Navbar from './Navbar';

export default function Home() {
  // useEffect(() => {
  //  const res=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4d94b67b7f768f2bec661fcc4ed7078f&language=en-US")
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // }, [])
  
  return (
   <>
    <Navbar></Navbar>
   <Banner fetchUrl={req.fetch_netflixoriginlas}></Banner>
   <Row title={"Netflix Originals"} fetchUrl={req.fetch_netflixoriginlas} islarge={true}></Row>
   <Row title={"Action"} fetchUrl={req.fetch_action}></Row>
   <Row title={"Adventure"} fetchUrl={req.fetch_Adventure}></Row>
   <Row title={"Animation"} fetchUrl={req.fetch_Animation}></Row>
   <Row title={"Comedy"} fetchUrl={req.fetch_Comedy}></Row>
   <Row title={"Crime"} fetchUrl={req.fetch_Crime}></Row>
   <Row title={"Documentary"} fetchUrl={req.fetch_Documentary}></Row>
   <Row title={"Fantasy"} fetchUrl={req.fetch_Fantasy}></Row>
   <Row title={"History"} fetchUrl={req.fetch_History}></Row>
   <Row title={"Horror"} fetchUrl={req.fetch_Horror}></Row>
   <Row title={"Music"} fetchUrl={req.fetch_Music}></Row>
   <Row title={"Tv Movie"} fetchUrl={req.fetch_Tvmovie}></Row>
   <Row title={"Thriller"} fetchUrl={req.fetch_Thriller}></Row>
   <Row title={"War"} fetchUrl={req.fetch_War}></Row>

   </>
  )
}
