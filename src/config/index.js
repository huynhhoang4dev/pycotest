
export const getGiphyURI = ({query='', api_key='2V7FhPX5pwWeNs8RuJNNsZWu93mKNtuy', limit=20, offset=0}) => {
    return `http://api.giphy.com/v1/gifs/trending?api_key=2V7FhPX5pwWeNs8RuJNNsZWu93mKNtuy&limit=20&offset=${offset}`
}
