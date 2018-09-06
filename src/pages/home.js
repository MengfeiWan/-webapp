import React from 'react';
import { Input, Layout } from 'antd';
import StoreList from './StoreList';
// import 'antd/dist/antd.css';
import './home.less';

const Search = Input.Search;
const { Header, Footer, Sider, Content } = Layout;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(StoreList);
    return (
      <div>
        <Layout>
          <Header>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              // style={{ width: '90%' }}
            />
          </Header>
          <Content><StoreList />1111</Content>
        </Layout>
      </div>
    );
  }
}
export default Home;