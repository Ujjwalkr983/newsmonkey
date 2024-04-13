import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import spinner from './spinner';


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: "general"
  }
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props){
    super(props)
    this.state={
      articles: [],
      loading:false,
      page:1,
      totalResults: 0
    }
    document.title = `${this.props.category} - News Monkey`;
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4098d8504b84e69b6aab6e44d422aec&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({articles: parseddata.articles, totalResults: parseddata.totalResults});
  }

  async componentDidMount(){
    this.updateNews();

  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4098d8504b84e69b6aab6e44d422aec&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({articles: this.state.articles.concat(parseddata.articles), totalResults: parseddata.totalResults});
  };

  render() {
    return (
      <div className='container my-5'>
        <h2 className='text-center my-5'>NewsMonkey - top {this.props.category} Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="row">
          {this.state.articles.map((element) =>{
            return <div className="col-md-4">
            <NewsItems title={!element.title? "": element.title.slice(0, 45)} description={!element.description? "":element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
      
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News

