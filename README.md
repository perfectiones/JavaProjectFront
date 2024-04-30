Libs: - react-router: library for routing apps - react-tooltip: use for notification block
node: 16.13.1

npm install
npm start

Сборщик - webpack ------------------------------------------------Redux --------------------------------------------------------------------------------

У нас есть общее хранилище для всех состояний, что значит --> мы можем обращаться к state, находясь в любом компоненте

Работа с Redux ---- у нас есть данные, которые храняться в файле store.js, в папке store.

// Пример store

export default configureStore({ reducer: { cunter: counterReducer, // Это slice }, });

Туда мы добавляем slices (то что мы хотим хранить и что с этим делать)

ПРИМЕР slices

// const counterSlice = createSlice({ // name: 'counter', // initialState: { // value: 0, // }, // reducers: { // Сюда записывается то что мы делаем с этим элементом // incremented: state => { // state.value += 1; // }, // decremented: state => { // state.value -= 1; // }, // }, // }); // // export const { incremented, decremented } = counterSlice.actions; // export default counterSlice.reducer;

----------------------------------------------------Оптимизация-----------------------------------------------------

// Lazy load: При загрузке приложения React.

// React загружает сразу все компоненты. // Например, сидишь на adminPage, а тебе загружаются страницы товаров, главная страница и т.д. "А нахуй оно нам надо?" - Правильно, не надо. // Для этого есть LazyLoad, он загружает только те компоненты, которые сейчас используются. (Если ты на странице админа, то загрузит только их и все)

Это выглядит примерно так: название компонента и импорт, куда мы пишем адрес нашего компонента 
// const AdminPage = React.lazy(() => import("./pages/adminMain/AdminMain"));