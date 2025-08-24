import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCreator();
  }, [id]);

  useEffect(() => {
    console.log('Form data updated:', formData);
  }, [formData]);

  const fetchCreator = async () => {
    try {
      console.log('Fetching creator with ID:', id);
      
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
        alert(`Error loading creator: ${error.message}`);
        navigate('/');
      } else {
        console.log('Successfully fetched creator data:', data);
        setFormData(data);
      }
    } catch (error) {
      console.error('Network/JS error:', error);
      alert(`Error loading creator: ${error.message}`);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const { error } = await supabase
        .from('creators')
        .update(formData)
        .eq('id', id);

      if (error) {
        console.error('Error updating creator:', error);
        alert('Error updating creator. Please try again.');
      } else {
        navigate(`/creator/${id}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating creator. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="edit-creator">
        <div className="form-container">
          <h1>Edit Creator</h1>
          <div className="loading">Loading creator data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-creator">
      <div className="form-container">
        <h1>Edit Creator</h1>
        
        {formData.name && (
          <p style={{ textAlign: 'center', color: '#667eea', marginBottom: '20px' }}>
            Editing: <strong>{formData.name}</strong>
          </p>
        )}
        
        <form onSubmit={handleSubmit} className="creator-form">
          <div className="form-group">
            <label htmlFor="name">Creator Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              required
              placeholder="Enter creator name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Channel URL *</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url || ''}
              onChange={handleChange}
              required
              placeholder="https://example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              required
              placeholder="Describe what this creator does and why they're worth following"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageURL">Image URL (optional)</label>
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL || ''}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            
            <Link to={`/creator/${id}`} className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCreator;
