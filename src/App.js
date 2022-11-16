import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Form from './pages/Form';
import LogOn from './pages/LogOn';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlck5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCIsIl9fdiI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwidXNlck5hbWUiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJfX3YiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7Il9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9LCJzdHJpY3RNb2RlIjp0cnVlLCJzZWxlY3RlZCI6e30sIl9pZCI6IjYxZGYyNzJiNjM1MWU1ZDM5NzIwZTA0ZCJ9LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjYxZGYyNzJiNjM1MWU1ZDM5NzIwZTA0ZCIsInVzZXJOYW1lIjoiam9zZSIsInBhc3N3b3JkIjoiJDJhJDEwJDdoeE1UZmJ4ZHlDdWE5YW5sUlFZUHVEOS5HQjA4cDhiSHgxQnJYNWpUeEI0YVhXckhSUC8yIiwiX192IjowfSwiJGluaXQiOnRydWUsImlhdCI6MTY2ODQ2ODIzOH0.ixfOPXJSaDZTau35NG9D9k4-kVnwaVD3GKoejjF8MI8")
  }, [])


  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/log' element={<LogOn />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
