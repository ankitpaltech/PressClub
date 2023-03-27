import React, { Component } from 'react'

export class NewsItems extends Component {
 
  render() {
     let {title , description , imageUrl , newsUrl} = this.props;
    return (
      <div className='my-3'key={newsUrl}>
       
      <div className="card" style={{width: "18rem"}}>
            <img src= {imageUrl?imageUrl:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/24e6ff53-76d9-4bde-89f9-20f8073cf9e7-sixteen_nine.png?VersionId=Y8bMDxDdmJMmYIVVB9FrT0FWPnRpSXb."} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title?title.slice(0,45):""}</h5>
                <p className="card-text">{description?description.slice(0,88):"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</p>
                <a href= {newsUrl} rel="noreferrer" target = "_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItems

