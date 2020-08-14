import api from './api-helper';

export const getAllComments = async () => {
  const resp = await api.get('/ideas/:id/comments');
  return resp.data;
}