import api from './api-helper';

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}