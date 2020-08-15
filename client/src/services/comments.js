import api from './api-helper';

export const getAllComments = async (id) => {
  const resp = await api.get(`/ideas/${id}/comments`);
  return resp.data;
}

export const addComment = async (id, commentData) => {
  const resp = await api.post(`/ideas/${id}/comments`, {
    comment: commentData})
  return resp.data
}