import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import translation from '../../utils/i18next';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 20;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-page">
      <div className="blog-title">
        <h1>{translation("blog_posts")}</h1>
        <input
          type="text"
          placeholder={translation("search")}
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <div className="blog-box-container">
        {currentPosts.map(post => (
          <Link to={`/post/${post.id}`} key={post.id} className="blog-box-link">
            <div className="blog-box">
              <div className="blog_img">
                <img src={`https://via.placeholder.com/150?text=${post.id}`} alt={post.title} />
              </div>
              <div className="blog_title">{post.title}</div>
              <div className="blog_description">{post.body.substring(0, 100)}...</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
