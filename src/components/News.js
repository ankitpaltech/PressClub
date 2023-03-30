import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  
  static defaultProps = {
    country : 'in',
    category : "general",
    pageSize : 8
  }
  
  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number,
    author: PropTypes.string
  }
 

  constructor(){
    
    super();
    
    this.state= {
      articles : [],
      loading : false,
      page:1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=176a82217ddb45b2bd51f329a20af215&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData  = await data.json();
    console.log(parsedData)
    this.setState({articles :parsedData.articles ,
                  totalResults:parsedData.totalResults ,
                  loading: false})


  }
  
   handlePrevchange= async ()=>{
     
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category  }&apiKey=176a82217ddb45b2bd51f329a20af215&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
     this.setState({loading :true})
     let data = await fetch(url);
     let parsedData  = await data.json();
     console.log(parsedData)
     

     this.setState({
      page: this.state.page-1,
      articles :parsedData.articles,
      loading : false
     })
   }
   handleNextchange= async ()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize ))){

   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=176a82217ddb45b2bd51f329a20af215&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData  = await data.json();

    this.setState({
      page : this.state.page +1,
      articles :parsedData.articles,
      loading : false
    })

    }
    

    

  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin : "35px 0px"}}>PressClub - Top Headlines</h1>
         {this.state.loading && <Spinner/>}
        
       
         <div className="row my-3">
         {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key = {element.url}>
          <NewsItems  title ={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author ={element.author} date = {element.publishedAt} source = {element.source.name}/>
          </div>
         
          
        })}
        
            
         </div>
         <div className="conatiner d-flex justify-content-between my-3">
         <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevchange}> &laquo; Previous</button>
         <button disabled ={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize )}type="button" className="btn btn-dark" onClick={this.handleNextchange}>Next &raquo;</button>
         </div>
        
        
        
        
      </div>
    )
  }
}

// News.prototype = {
//   country : PropTypes.string,
//   category : PropTypes.string,
//   pageSize : PropTypes.number
// }
// News.defaultProps = {
//   country : "in",
//   category : "general",
//   pageSize : "8"

// }


export default News


