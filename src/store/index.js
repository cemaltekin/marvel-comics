import { createStore } from 'vuex';
import md5 from 'md5';
import axios from 'axios';

const publicKey = 'd34ea269d99edbd46f157b69213c4415'; // API anahtarınızı buraya yerleştirin
const privateKey = 'aea8eaf50fc8406cc7019c004fdb6da827e1b101'; // Özel anahtarınızı buraya yerleştirin

export default createStore({
  state: {
    comics: null,
    favorites: [], // Yeni state: favorites
  },
  getters: {
    getComics: state => state.comics,
    getFavorites: state => state.favorites, // Yeni getter: getFavorites
  },
  mutations: {
    setComics: (state, comics) => {
      state.comics = comics;
    },
    addToFavorites: (state, comic) => {
      state.favorites.push(comic); // Favoriye ekleme işlemi
    },
    removeFromFavorites: (state, comicId) => {
      state.favorites = state.favorites.filter(comic => comic.id !== comicId); // Favorilerden kaldırma işlemi
    },
  },
  actions: {
    fetchComics({ commit }) {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const hash = md5(timestamp + privateKey + publicKey);
      const apiUrl = 'http://gateway.marvel.com/v1/public/comics';
      const requestUrl = `${apiUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

      axios.get(requestUrl)
        .then(response => {
          commit('setComics', response.data.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    },
    addToFavorites({ commit }, comic) {
      commit('addToFavorites', comic); // Favoriye ekleme işlemini tetikle
    },
    removeFromFavorites({ commit }, comicId) {
      commit('removeFromFavorites', comicId); // Favorilerden kaldırma işlemini tetikle
    },
  },

  modules: {}
});
