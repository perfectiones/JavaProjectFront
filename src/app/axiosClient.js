import axios from 'axios'

/* Создание нескольких путей:

 const instance1 = axios.create({
   baseURL: 'https://example-server1.com'
 }); 
 
*/

/*  
Создаем экземпляр axios для второго сервера:

 const instance2 = axios.create({
   baseURL: 'https://example-server2.com'
  }); 
  
*/
// Так мы обращаемся к разным адресам
// instance1.get('/endpoint1')

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_PUBLIC_SERVER_URL}`, // Тут мы берем значение пути базовое из окружения (.env)
})

export default instance