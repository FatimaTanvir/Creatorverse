import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';
import New from '../components/New';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreator();
  }, [id]);

  const fetchCreator = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
        navigate('/');
      } else {
        setCreator(data);
      }
    } catch (error) {
      console.error('Error:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      try {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id);

        if (error) {
          console.error('Error deleting creator:', error);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading creator...</div>;
  }

  if (!creator) {
    return <div className="error">Creator not found</div>;
  }

  return (
    <div className="view-creator">
      <div className="creator-details">
        <div className="creator-header">
          {creator.imageURL && (
            <img 
              src={creator.imageURL} 
              alt={creator.name} 
              className="creator-image-large"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          <div className="creator-name-container">
            <div className="stars-around-name">
              <div className="star star-1">⭐</div>
              <div className="star star-2">⭐</div>
              <div className="star star-3">⭐</div>
              <div className="star star-4">⭐</div>
              <div className="star star-5">⭐</div>
              <div className="star star-6">⭐</div>
            </div>
            <h1>{creator.name}</h1>
          </div>
        </div>

        <div className="creator-info">
          <p className="description">{creator.description}</p>
          
          <div className="actions">
            <a 
              href={creator.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Channel
            </a>
            
            <Link to={`/creator/${id}/edit`} className="btn btn-secondary">
              Edit Creator
            </Link>
            
            <button onClick={handleDelete} className="btn btn-danger">
              Delete Creator
            </button>
          </div>
        </div>

        <Link to="/" className="back-link">
          ← Back to All Creators
        </Link>
      </div>
    </div>
  );
};

export default ViewCreator;
