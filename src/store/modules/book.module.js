import bookService from '@/services/book.service.js';

export default {
    state: {
        books: null,
        filterBy: null,
    },
    getters: {
        booksToShow({ filterBy, books }) {
            if (!filterBy || (!filterBy.txt && !filterBy.price)) return books
            const regex = new RegExp(filterBy.txt, 'i')
            const booksToShow = books.filter(book => regex.test(book.volumeInfo.title))
            return booksToShow
        }
    },
    mutations: {
        setBooks(state, { books }) {
            state.books = books
        },
        removeBook({ books }, { bookId }) {
            const idx = books.findIndex(book => book._id === bookId)
            books.splice(idx, 1)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        }
    },
    actions: {
        async loadBooks({ commit }) {
            const books = await bookService.query()
            const action = { type: 'setBooks', books }
            commit(action)
        },
        async removeBook({ commit, dispatch }, { bookId }) {
            try {
                await bookService.removeBook(bookId)
                const action = { type: 'removeBook', bookId }
                commit(action)
            } catch (err) {
                const action = { type: 'setMsg', msgStr: "Couldn't remove book." }
                dispatch(action)
                console.log(err);
            }
        }
    }
}