import { createStore } from 'vuex';
import md5 from 'md5';
import axios from 'axios';

const publicKey = 'd34ea269d99edbd46f157b69213c4415'; 
const privateKey = 'aea8eaf50fc8406cc7019c004fdb6da827e1b101'; 

export default createStore({
  state: {
    comics: null,
    favorites: [],
    hamburgerIsVisible: false,
  },
  getters: {
    getComics: state => state.comics,
    getFavorites: state => state.favorites, 
  },
  mutations: {
    setComics: (state, comics) => {
      state.comics = comics;
    },
    addToFavorites: (state, comic) => {
      state.favorites.push(comic); 
    },
    removeFromFavorites: (state, comicId) => {
      state.favorites = state.favorites.filter(comic => comic.id !== comicId); 
    },
    setHamburgerIsVisible: (state, hamburgerIsVisible) => {
      state.hamburgerIsVisible = hamburgerIsVisible
    }
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
      commit('addToFavorites', comic); 
    },
    removeFromFavorites({ commit }, comicId) {
      commit('removeFromFavorites', comicId); 
    },
  },

  modules: {}
});
