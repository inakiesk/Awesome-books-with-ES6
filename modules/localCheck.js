const titleArr = [];
const authorArr = [];
const buttonArr = [];
const bookElement = [];
let books = [];
const bookInfo = {};
const by = [];

export const localCheck = () => {
  if (!localStorage.getItem('book')) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
}
