/* eslint-disable */
import './App.css';
import Nav from './component/Nav.js';
import Lists from './component/Lists.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './component/Article.js';

function App() {
  const topics = [
    {id:1, date:'12월 1일', title:'인기 원두 추천', body:'최근 스페셜티 업계에서...'},
    {id:2, date:'12월 2일',title:'2023 서울 카페쇼', body:'2023 서울 카페쇼가 지난...'},
    {id:3, date:'12월 3일',title:'강남 인기 카페', body:'인스타그램에서 인기 있는...'}
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Lists />} />
          <Route path='/article/:id' element={<Article />}/>
        </Routes>      
      </div>
    </BrowserRouter>

    );
}


export default App;
