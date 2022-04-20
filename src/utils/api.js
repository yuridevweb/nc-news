import axios from 'axios'

const newsApi = axios.create({
  baseURL: 'https://nc-news-yuridev.herokuapp.com/api',
})

export const getArticles = (topic) => {
  return newsApi
    .get('/articles', {
      params: {
        topic,
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

export const postNewComment = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: 'happyamy2016',
      body: newComment,
    })
    .then(({ data }) => {
      return data.comment
    })
}
