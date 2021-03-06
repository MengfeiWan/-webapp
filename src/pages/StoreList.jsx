import React from 'react';
import {Link} from 'react-router-dom';
import './storeList.less';

let list = [
  {
      img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
      title: '汉堡大大',
      subTitle: '叫我汉堡大大，还你多彩口味',
      price: '28',
      distance: '120m',
      number: '389',
      id: Math.random().toString().slice(2)
  },
  {
      img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
      title: '北京开源饭店',
      subTitle: '[望京]自助晚餐',
      price: '98',
      distance: '140m',
      number: '689',
      id: Math.random().toString().slice(2)
  },
  {
      img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201652952-1050532278.png',
      title: '服装定制',
      subTitle: '原价xx元，现价xx元，可修改一次',
      price: '1980',
      distance: '160',
      number: '106',
      id: Math.random().toString().slice(2)
  },
  {
      img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201700186-1351787273.png',
      title: '婚纱摄影',
      subTitle: '免费试穿，拍照留念',
      price: '2899',
      distance: '160',
      number: '58',
      id: Math.random().toString().slice(2)
  },
  {
      img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
      title: '麻辣串串烧',
      subTitle: '双人免费套餐等你抢购',
      price: '0',
      distance: '160',
      number: '1426',
      id: Math.random().toString().slice(2)
  }
]
let lists=[];
for(let j=0;j<5;j++) {
  lists=lists.concat(list,lists)
}
console.log(lists);
class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      <ul  className="commend-list">
        {lists.length ? lists.map(
          (item, index) => (
            <Link to={`detail/${item.id}`} key={index} >
               <li>
              <div className="goods-img">
                <img src={item.img} alt="图片"/>
              </div>
              <div className="goods-infor">
                <p><span className="title">{item.title}</span><span className="distance">{item.distance}</span></p>
                <p><span className="description">{this.sliceString(item.subTitle)}</span></p>
                <p><span className="price">￥{item.price}</span><span className="sold">已售:{item.number}</span></p>
              </div>
            </li>
            </Link>
          )
        ) : '加载中...'}
      </ul>
      </div>
    );
  } 
  sliceString = (string) => {
    return  string.length < 12 ? string : `${string.slice(0, 12)}...`
  }
} 

export default StoreList;