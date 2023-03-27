import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

  
  constructor(){
    
    super();
    
    this.state= {
      articles : [],
      loading : false,
      page:1
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=176a82217ddb45b2bd51f329a20af215&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData  = await data.json();
    console.log(parsedData)
    this.setState({articles :parsedData.articles , totalResults:parsedData.totalResults})


  }
  
   handlePrevchange= async ()=>{
     
     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=176a82217ddb45b2bd51f329a20af215&page=${this.state.page-1}&pageSize=20`;
     let data = await fetch(url);
     let parsedData  = await data.json();
     console.log(parsedData)
     

     this.setState({
      page: this.state.page-1,
      articles :parsedData.articles
     })
   }
   handleNextchange= async ()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20 )){

    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=176a82217ddb45b2bd51f329a20af215&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData  = await data.json();

    this.setState({
      page : this.state.page +1,
      articles :parsedData.articles
    })

    }
    

    

  }
  render() {
    return (
      <div className='container my-3'>
         <h1>PressClub - Top Headlines</h1>
       
         <div className="row my-3">
         {this.state.articles.map((element)=>{
           return <div className="col-md-4" key = {element.url}>
          <NewsItems  title ={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} />
          </div>
         
          
        })}
        
            
         </div>
         <div className="conatiner d-flex justify-content-between my-3">
         <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevchange}> &laquo; Previous</button>
         <button disable ={this.state.page+1 > Math.ceil(this.state.totalResults/20 )}type="button" className="btn btn-dark" onClick={this.handleNextchange}>Next &raquo;</button>
         </div>
        
        
        
        
      </div>
    )
  }
}

export default News


