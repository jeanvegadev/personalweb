import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpecificRepoStars = ({ repoName }) => { // Accept repoName as a prop
  const [starCount, setStarCount] = useState(null);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/jeanvegadev/${repoName}`); // Use repoName variable
        setStarCount(response.data.stargazers_count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStarCount();
  }, [repoName]); // Add repoName to dependency array to re-fetch when it changes

  return (
    <div>
      {starCount !== null ? (
        <p>This repo has {starCount} stars.</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpecificRepoStars;
