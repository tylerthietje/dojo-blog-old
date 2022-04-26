import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    
    console.log('use effect ran');
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;


// const getData = async function () {
//   const res = await fetch(
//     "https://quote-garden.herokuapp.com/api/v3/quotes?author=beyonce"
//   );
//   const data = await res.json();
//   console.log(data);
// };
// getData();

