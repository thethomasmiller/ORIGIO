import api from './api-helper';

export const createIdea = async (ideaData) => {
  const resp = await api.post('/ideas', { idea: ideaData })
  return resp.data
}

export const readAllIdeas = async () => {
  const resp = await api.get('/ideas')
  return resp.data
}

export const readOneIdea = async (id) => {
  const resp = await api.get(`/ideas/${id}`);
  return resp.data
}

export const updateIdea = async (id, ideaData) => {
  const resp = await api.put(`/ideas/${id}`, { idea: ideaData })
  return resp.data
}

export const destroyIdea = async (id) => {
  const resp = await api.delete(`/ideas/${id}`)
  return resp
}

export const addComment = async (ideaId, commentId) => {
  const resp = await api.delete(`/ideas/${ideaId}/comments/${commentId}`)
  return resp.data
}