import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {

    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
          
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span> </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small class="text-muted">By {!author? "unknown": author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn ctn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItems
