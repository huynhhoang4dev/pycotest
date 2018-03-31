import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal'
import GifCardsContainer from './containers/GifCardsContainer'

import store from './Store'
import { fetchGifs } from './actions'
import GifPagination from './components/GifPagination'


const App = (props) => {
  const { match } = props
  let pageId = match.params.pageId
  pageId = pageId ? pageId : 1
  let offset = pageId -1

  store.dispatch(fetchGifs({offset}))

  return <GifCardsContainer />

}

export default App;
