import React, { Component } from 'react'

export class NewsItems extends Component {
 
  render() {
     let {title , description , imageUrl , newsUrl , author , date ,source} = this.props;
    return (
      <div className='my-3'key={newsUrl}>
       
      <div className="card" >
            <img src= {imageUrl?imageUrl:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/24e6ff53-76d9-4bde-89f9-20f8073cf9e7-sixteen_nine.png?VersionId=Y8bMDxDdmJMmYIVVB9FrT0FWPnRpSXb."} className="card-img-top" alt="..."/>
            <div className="card-body">
                <span class="badge bg-secondary">{source  } </span>
                <h5 className="card-title">{title?title.slice(0,45):""}</h5>
                <p className="card-text">{description?description.slice(0,88):"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</p>
                <p className="card-text">By {author?author:" Unknown "} At {new Date(date).toGMTString()}</p>
                <a href= {newsUrl} rel="noreferrer" target = "_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItems

