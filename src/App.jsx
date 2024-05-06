import './App.css'
import Blog from './components/blog/blog';
import BlogData from './blogData';

function App() {
  return (
    <>
      <h1>Simple Blog Display</h1>
      <h2>Project 2</h2>
      <Blog posts={BlogData} />
    </>
  )
}

export default App
