import React from 'react';
import { Input, Layout } from 'antd';
import './detail.less';

const Search = Input.Search;
const { Header, Footer, Sider, Content } = Layout;

const detail = {
  img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
  title: '天下第一锅',
  star: 4,
  price: '88',
  subTitle: '重庆 & 四川 麻辣火锅',
  desc: '营业时间 11:00 - 21:00 <br> 电话订购 11:00 - 19:00 <br> 网络订购 11:00 - 19:00'
}
const comment = [
  {
    username: '133****3355',
    comment: '非常好吃，棒棒的，下次再来',
    star: 5
  },
  {
    username: '135****3452',
    comment: '羊肉够分量，不错',
    star: 4
  },
  {
    username: '137****1242',
    comment: '有自助的水果，非常喜欢',
    star: 4
  },
  {
    username: '131****3980',
    comment: '桌子环境有点糟糕，不喜欢',
    star: 2
  },
  {
    username: '135****3565',
    comment: '基本还可以，中规中矩吧，虽然没有啥惊喜',
    star: 3
  },
  {
    username: '130****9879',
    comment: '感觉很棒，服务员态度非常好',
    star: 5
  },
  {
    username: '186****7570',
    comment: '要是能多给开点发票就好了，哈哈啊',
    star: 4
  }
]
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount () {
    
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
        <div className="detail-show">
          <div className="img-container">
            <img src={detail.img} alt="图片" />
          </div>
          <div className="store-info">
            <h1>{detail.title}</h1>
            <p>￥{detail.price}</p>
            <p>{detail.subTitle}</p>
          </div>
        </div>
        <div className="desc">
          <p dangerouslySetInnerHTML={{ __html: detail.desc }}></p>
        </div>
        <div className="comments-list">
          <ul>
            {comment.length? comment.map(
              (item,index) => (
              <li key={index}>
                <div>
                  <p>{item.username}</p>
                  <p>{item.comment}</p>
                </div>
              </li>
            )):'加载中'}
          </ul>
        </div>
      </div>
    );
  }
}
export default Detail;