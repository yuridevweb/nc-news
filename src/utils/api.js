import axios from 'axios'

const newsApi = axios.create({
  baseURL: 'https://nc-news-yuridev.herokuapp.com/api',
})

export const getArticles = (topic, sort_by = 'created_at', order = 'asc') => {
  return newsApi
    .get('/articles', {
      params: {
        topic,
        sort_by,
        order,
      },
    })
    .then(({ data }) => {
      return data.articles
    })
}

export const getTopics = () => {
  return newsApi.get('/topics').then(({ data }) => {
    return data.topics
  })
}

export const getArticlesById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article
  })
}

export const incremenetArticleVotes = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.article
    })
}

export const decremenetArticleVotes = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then(({ data }) => {
      return data.article
    })
}

export const getCommentsByArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments
  })
}

export const postNewComment = (article_id, newComment, userOnline) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: userOnline.username,
      body: newComment,
    })
    .then(({ data }) => {
      return data.comment
    })
}

export const deleteCommentById = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`)
}

export const getUsers = () => {
  return newsApi.get('/users').then(({ data }) => {
    return data.users
  })
}
