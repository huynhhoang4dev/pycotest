import React from 'react';

import './App.css';

import GifCardsContainer from './containers/GifCardsContainer'

import store from './Store'
import { fetchGifs } from './actions'



const App = (props) => {
  const { match } = props
  let pageId = match.params.pageId
  pageId = pageId ? pageId : 1
  let offset = pageId -1

  store.dispatch(fetchGifs({offset}))

  return <GifCardsContainer />

}

export default App;
