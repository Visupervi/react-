import React,{Component} from 'react'
class CommentInput extends Component{
  constructor(){
    super()
    this.state = {
      username:'',
      content:''
    }
  }
  handleUserNameController(e) {
    this.setState({
      username:e.target.value
    })
  }
  handleUserContentController(e) {
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit(){
    if(this.props.onSubmit){
      const {username,content} = this.state;
      this.props.onSubmit({username,content})
    }
    this.setState({content:''})
  }
  render() {
    return (
      <div>
        <div className="comment-name">
          <span>你的昵称：</span>
          <input type="text" value={this.state.username} onChange={this.handleUserNameController.bind(this)}/>
        </div>
        <div className='comment-content'>
          <span>评论内容：</span>
          <textarea name="" id="" cols="60" rows="10" value={this.state.content} onChange={this.handleUserContentController.bind(this)}/>
        </div>
        <div className='comment-input-button'>
          <button onClick={this.handleSubmit.bind(this)}> 发布</button>
        </div>
      </div>
    );
  }
}
export default CommentInput