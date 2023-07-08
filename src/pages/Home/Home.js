import React from 'react';
import BarGraph from '../../components/Bar-graph/BarGraph';
import CardList from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <div>
        <Header/>
        <CardList/>
        <BarGraph/>
    </div>
  )
}

export default Home