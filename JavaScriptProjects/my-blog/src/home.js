import { useState, useEffect } from "react";
import BlogList from "./bloglist";
import PhotoSlider from "./PhotoSlider";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []);


  return (
    <div className="home">
      <PhotoSlider />
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;
