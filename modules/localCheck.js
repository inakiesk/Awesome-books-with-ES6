const bookInfo = {};

const localCheck = () => {
  if (!localStorage.getItem('book')) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
};

export default localCheck;