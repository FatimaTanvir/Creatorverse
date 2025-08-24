import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);



  const fetchCreators = async () => {
    try {
      console.log('Fetching creators from Supabase...');
      
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching creators:', error);
        alert(`Error fetching creators: ${error.message}`);
      } else {
        console.log('Successfully fetched creators:', data);
        setCreators(data || []);
      }
    } catch (error) {
      console.error('Network/JS error:', error);
      alert(`Error fetching creators: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="show-creators">
      <div className="shooting-stars">
        <div className="shooting-star star-1">⭐</div>
        <div className="shooting-star star-2">⭐</div>
      </div>
      <div className="header">
        <h1>Welcome to Creatorverse</h1>
        <p>Discover amazing content creators worth following!</p>
        <Link to="/creator/new" className="btn btn-primary add-btn">
          + Add New Creator
        </Link>
      </div>

      {creators.length === 0 ? (
        <div className="no-creators">
          <h2>No creators found</h2>
          <p>Be the first to add an amazing content creator!</p>
          <Link to="/creator/new" className="btn btn-primary">
            Add Your First Creator
          </Link>
        </div>
      ) : (
        <div className="creators-grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;
