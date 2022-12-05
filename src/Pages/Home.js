import React from 'react'
import Main from '../Components/Main'
import requests from '../Components/Requests'
import Row from '../Components/Row'

const Home = (props) => {
  return (
    <div>
      <Main/>
      <Row rowID='1' title='Trending Now' fetchURL={requests.requestTrending}/>
     <Row rowID='2'title='UpComing' fetchURL={requests.requestUpcoming}/>
     <Row rowID='3'title='TopRated' fetchURL={requests.requestTopRated}/>
      <Row rowID='4'title='Popular' fetchURL={requests.requestPopular}/>
      
    </div>
  )
}

export default Home
