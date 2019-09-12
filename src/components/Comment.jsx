import React,{Component} from 'react'
class Comment extends Component{
  constructor(props) {
    super(props)
  }
  componentDidUpdate(){
    console.log(this.props.commentArr)
    let arr = [];
    arr = this.props.commentArr;
  }
  render() {
    return(
    <div className="comment-list">
      {this.props.commentArr.map((comment,i)=>{
        return(
           <div key={i}>
             <span>{comment.username}</span>
             <p>{comment.content}</p>
           </div>
        )

      })}

    </div>
  )
  }
}
export default Comment