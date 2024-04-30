import api from "../axiosClient";

// Пример как работать с API
// const data = await getOrders('/order/all') // после await пишем название метода, а в тело функции пишем то что нам надо,
//                                          // в данном случае мы getаем, поэтому пишем в тело только жопу адреса
//                                          // ОБЫЧНО, туда надо пихать еще что-нибудь, но это описывается в самом теле метода

// Как будет выглядеть примерный запрос
/* useEffect(() => {
     loadOrders()
   }, []) 

   const loadOrders = async () => {
     try {
       setloading(true) // Тут происходит запуск загрузки: анимации, ползунка или чего-то там
       const data = await getOrders('/order/all')
       setOrders(data) // Тут происходит получение-передача данных в state компонента
       setloading(false) // Тут мы загрузку закончили
       console.log(data)
     } catch (error) {
      setloading(false) // Тут мы загрузку закончили, т.к. у нас нихуя не получилось :(
       console.log(error)
     }
  } */

export const getSome = async (url) => {
  const { data } = await api.get(url);

  return data;
};

export function postData(body) {
  api.post("", body);
}
