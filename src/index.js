import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./component/About";
import Books from "./component/Books";
import Book from "./component/Book";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/about" element={<About/>}/>
                <Route path="/books" element={<Books/>}>
                    <Route index element={
                        <main style={{padding:'1rem'}}>
                            <p>کتاب مورد نظر خود را قرار بدید</p>
                        </main>
                    }/>
                    <Route path="/books/:bookId" element={<Book/>} />
                </Route>
                <Route path="*" element={
                    <main style={{padding:"1rem"}}>
                        <p>گشتم نبود نگرد نیست</p>
                    </main>
                } />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
