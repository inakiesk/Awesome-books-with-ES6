const bookInfo = {};

export const localCheck = () => {
  if (!localStorage.getItem('book')) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
}
