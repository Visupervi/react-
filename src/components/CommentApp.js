import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import '../css/index.css'
class CommentApp extends Component{
  constructor(props){
    super(props);
    this.state ={
      commentArr:[]
    }
  }
  handleSubmitComment(comment){
    this.setState({commentArr: this.state.commentArr.concat([comment])},
      (preState,props)=>{
      console.log(this.state.commentArr)
    })

  }
  render() {
    return(
      <div className="comment-wrap">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList commentArr={this.state.commentArr}/>
      </div>
    )
  }
}
export default CommentApp;