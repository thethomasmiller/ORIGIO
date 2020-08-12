import api from './api-helper';

export const readAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}