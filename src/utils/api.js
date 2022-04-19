import axios from 'axios'

const newsApi = axios.create({
  baseURL: 'https://nc-news-yuridev.herokuapp.com/api',
})

export const getArticles = () => {
  return newsApi.get('/articles').then(({ data }) => {
    return data.articles
  })
}
