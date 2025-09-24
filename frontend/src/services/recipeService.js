import apiService from './apiService';

const recipeService = {
  async getAll() {
    return apiService.get('/recipes?include=author');
  },

  async getById(id) {
    return apiService.get(`/recipes/${id}?include=author`);
  },

  async getByAuthor(authorId) {
    return apiService.get(`/recipes?authorId=${authorId}&include=author`);
  },

  async create(recipeData) {
    const formData = new FormData();
    Object.keys(recipeData).forEach(key => {
      if (key === 'photoUrl' && recipeData[key]) {
        formData.append('photoUrl', recipeData[key]);
      } else if (key === 'ingredients'){
        formData.append('ingredients', JSON.stringify(recipeData[key]));
      } else {
        formData.append(key, recipeData[key]);
      }
    });
    return apiService.post('/recipes', formData);
  },

  async update(id, recipeData) {
    return apiService.put(`/recipes/${id}`, recipeData);
  },

  async delete(id) {
    return apiService.delete(`/recipes/${id}`);
  },
};

export default recipeService;
