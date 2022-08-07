import axios from 'axios'

export const getData = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(({ data }) => {
      const users10 = data.slice(0, 10)
      return users10
    })
    .catch((error) => {
      throw new Error(error)
    })
}
