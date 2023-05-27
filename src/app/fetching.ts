const apiKey = 'e70d5af9345042818b7d0f558d33669e';
const apiUrl = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=10`;

function request<T>(): Promise<T> {
  return fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export default {
  getArticles: () => request<any>()
};