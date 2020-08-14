import api from './api-helper';

export const createIdea = async (ideaData) => {
  const resp = await api.post('/ideas', { idea: ideaData })
  return resp.data
}

export const getAllIdeas = async () => {
  const resp = await api.get('/ideas')
  return resp.data
}

export const getOneIdea = async (id) => {
  const resp = await api.get(`/ideas/${id}`);
  return resp.data
}

export const updateIdea = async (id, ideaData) => {
  const resp = await api.put(`/ideas/${id}`, { idea: ideaData })
  return resp.data
}

export const deleteIdea = async (id) => {
  const resp = await api.delete(`/ideas/${id}`)
  return resp
}

export const addComment = async (idea_Id, commentData) => {
  const resp = await api.post(`/ideas/${idea_Id}`, { comment: commentData } )
  return resp.data
}