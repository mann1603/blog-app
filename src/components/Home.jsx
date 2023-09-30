import {React, useContext} from 'react'
import DataContext from '../context/DataContext'
import Feed from "./Feed";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)
  
   return (
    <main className="Home">
      {isLoading && <p className="satusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="stausMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display</p>
        ))}
    </main>
  );
};

export default Home;
