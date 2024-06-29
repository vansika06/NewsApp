import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  render() {
    let{title,description,imageUrl,newsUrl,author,date,source}=this.props;//destructure what we get from api since it is class based this way
    return (
      <div className='my-3'>
        <div className="card" style={{width:" 18rem"}}>
          <div style={{display:'flex',
      position:'absolute',
      right:'0',
      justifyContent:'flex-end'
    }}>
       <span className="badge rounded-pill bg-danger">
    {source}</span>
    </div>
  <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/F996/production/_133249836_gettyimages-2149828849-594x594.jpg" } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank"className="btn btn-dark">Read More..</a>
  </div>
</div>
      </div>
    )
  }
}
