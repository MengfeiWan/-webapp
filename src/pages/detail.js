import React from 'react';
import { Input, Layout } from 'antd';
import './detail.less';

const Search = Input.Search;
const { Header, Footer, Sider, Content } = Layout;
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    window.history.back()
  } 
  render() {
    return (
      <div>
        <div className="header">
            <span className="back" onClick={this.handleClick}>{`<`}</span><span className="title">详情页</span>
        </div>
      </div>
    );
  }
}
export default Detail;