import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import conf from '../conf';
export default class News extends Component {


    constructor(props){
        super(props);
        this.state={articles:[],
            loading:false,
            page:1,
          totalResults:0
        }
        document.title=`NewsMonkey-${this.props.category}`
    }
    async update(){
     // this.props.setProgress(0)
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${conf.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles: parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      })
      //this.props.setProgress(100)
    }
    async componentDidMount(){
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c3e7eab6aec4d0c971b5a1187408ea8&page=1&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true})
      //   let data=await fetch(url);
      //   let parsedData=await data.json()
      //   this.setState({articles: parsedData.articles,
      //     totalResults:parsedData.totalResults,
      //     loading:false
      //   })
      this.setState({page:this.state.page})
      this.update();//initial state toh set h isliye kch nhi krna
    }
    handleNext=async()=>{
      console.log("n");
    //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
    //   {
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c3e7eab6aec4d0c971b5a1187408ea8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true})
    //   let data=await fetch(url);
    //   let parsedData=await data.json()
      
    //   this.setState({page:this.state.page+1,
    //     articles: parsedData.articles,
    //     loading:false
    //   })
    // }
    this.setState({page:(this.state.page)+1})
    this.update();
    }
    handlePrev=async()=>{
      // console.log("p");
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c3e7eab6aec4d0c971b5a1187408ea8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      // this.setState({loading:true})
      // let data=await fetch(url);
      // let parsedData=await data.json()
      // console.log(parsedData);
      // this.setState({page:this.state.page-1,
      //   articles: parsedData.articles,
      //   loading:false
      // })
      this.setState({page:this.state.page-1});
      this.update();
    }
    fetchMoreData=async()=>{
      
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${conf.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({page:this.state.page+1})
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles: this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
        loading:false
      })
    }
  render() {
    
    return (
      <div className='container my-3'>
        <h1 className='text-centre mt-5'>News Monkey--Top Headlines on {this.props.category}</h1>
      {this.state.loading && <Spinner/>}
         
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
            {
               this.state.articles.map((element)=>{
                    return(
                       <div className="col-md-4" key={element.url}>
                        <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt} source={element.source.name}/>
                       </div>
                    )
                })
            }
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    )
  }
}
