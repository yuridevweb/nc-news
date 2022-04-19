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
      console.log(data, '<<<<<')
      return data.articles
    })
}

export const getTopics = () => {
  return newsApi.get('/topics').then(({ data }) => {
    return data.topics
  })
}
