import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Security = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const verifyAuth = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/homepage', {
          method: 'GET',
          credentials: 'include'
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          navigate('/login');
        }

      } catch {
        navigate('/login');
      }
    };

    verifyAuth();
  }, [navigate]); 

  return isAuthenticated ? element : null;
}; 

export default Security;