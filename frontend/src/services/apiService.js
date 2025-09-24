import config from '../constants';

const apiService = {
  authToken: null,

  setAuthToken(token) {
    this.authToken = token;
  },

  async request(endpoint, options = {}) {
    const url = `${config.API_BASE_URL}/${config.APP_ID}${endpoint}`;
    const headers = options.headers || {};

    if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }
    
    const configOptions = {
        ...options,
        headers,
    };

    try {
      const response = await fetch(url, configOptions);

      if (!response.ok) {
        let errorData;
        try {
            errorData = await response.json();
        } catch (e) {
            errorData = { message: response.statusText };
        }
        
        const error = new Error(errorData.message || 'An error occurred');
        if (response.status === 401) {
            console.error('Authentication error, logging out.');
            // This could trigger a logout action in the UI
        }
        throw error;
      }

      if (response.status === 204) {
        return null;
      }
      
      return await response.json();

    } catch (error) {
      console.error('API Service Error:', error);
      throw error;
    }
  },

  get(endpoint, options) {
    return this.request(endpoint, { method: 'GET', ...options });
  },

  post(endpoint, body, options) {
    const isFormData = body instanceof FormData;
    return this.request(endpoint, { 
        method: 'POST', 
        body: isFormData ? body : JSON.stringify(body),
        ...options 
    });
  },

  put(endpoint, body, options) {
    const isFormData = body instanceof FormData;
    return this.request(endpoint, { 
        method: 'PUT', 
        body: isFormData ? body : JSON.stringify(body),
        ...options 
    });
  },

  delete(endpoint, options) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  },
};

export default apiService;