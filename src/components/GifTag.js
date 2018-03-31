import React from 'react'
import './GifTag.css'

const GifTag = ({tagtype, tagvalue}) => (
    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 tag">
        <i className="icon-tag"></i>{tagvalue}
    </div>
)

export default GifTag

