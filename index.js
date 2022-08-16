/* eslint-disable max-classes-per-file */


  
const titleSelector = document.querySelector('.title');
const authorSelector = document.querySelector('.author');
const addSelector = document.querySelector('.btn');
const listSelector = document.querySelector('.list');
const navList = document.getElementById('link1');
const navAdd = document.getElementById('link2');
const navContact = document.getElementById('link3');
const listHeader = document.querySelector('.header');
const contactSection = document.querySelector('.contact-info');
const addSection = document.querySelector('.form');
const titleArr = [];
const authorArr = [];
const buttonArr = [];
const bookElement = [];
let books = [];
const bookInfo = {};
const by = [];


const getInfo = () => {
  const obtainedInfo = JSON.parse(localStorage.getItem('book'));
  for (let i = 0; i < obtainedInfo.length; i += 1) {
    books.push(obtainedInfo[i]);
  }
}

const forLoop = () => {
  for (let i = 0; i < books.length; i += 1) {
    bookElement[i] = document.createElement('div');
    listSelector.appendChild(bookElement[i]);
    bookElement[i].classList.add('bookbox');
    titleArr[i] = document.createElement('h2');
    authorArr[i] = document.createElement('p');
    by[i] = document.createElement('span');
    by[i].classList.add('span');
    bookElement[i].appendChild(titleArr[i]);
    bookElement[i].appendChild(by[i]);
    bookElement[i].appendChild(authorArr[i]);
    titleArr[i].textContent = `"${books[i].title}"`;
    by[i].textContent = 'by';
    authorArr[i].textContent = `${books[i].author}`;
    buttonArr[i] = document.createElement('button');
    buttonArr[i].classList.add('remove-button');
    buttonArr[i].textContent = 'Remove 🗑';
    bookElement[i].appendChild(buttonArr[i]);
  }
}

const storeInfo = () => {
  bookInfo.title = titleSelector.value;
  bookInfo.author = authorSelector.value;
  localStorage.setItem('book', JSON.stringify(books));
}

const addfunction = () => {
  addSelector.addEventListener('click', () => {
    if (titleSelector.value !== '' && authorSelector.value !== '') {
      const newBook = {};
      storeInfo();
      newBook.title = titleSelector.value;
      newBook.author = authorSelector.value;
      titleSelector.value = '';
      authorSelector.value = '';
      listSelector.textContent = '';
      books.push(newBook);
      localStorage.setItem('book', JSON.stringify(books));
      for (let i = 0; i < books.length; i += 1) {
        bookElement[i] = document.createElement('div');
        listSelector.appendChild(bookElement[i]);
        bookElement[i].classList.add('bookbox');
        titleArr[i] = document.createElement('h2');
        authorArr[i] = document.createElement('p');
        by[i] = document.createElement('span');
        by[i].classList.add('span');
        bookElement[i].appendChild(titleArr[i]);
        bookElement[i].appendChild(by[i]);
        bookElement[i].appendChild(authorArr[i]);
        titleArr[i].textContent = `"${books[i].title}"`;
        by[i].textContent = 'by';
        authorArr[i].textContent = `${books[i].author}`;
        buttonArr[i] = document.createElement('button');
        buttonArr[i].classList.add('remove-button');
        buttonArr[i].textContent = 'Remove 🗑';
        bookElement[i].appendChild(buttonArr[i]);
      }
    }
  });
}

const removeItem = (item) => {
  books = books.filter((el) => `"${el.title}"` !== item.textContent);
  localStorage.setItem('book', JSON.stringify(books));
}

const removeFunction = () => {
  const x = document.getElementsByClassName('list')[0];
  x.addEventListener('click', (e) => {
    if (e.target.textContent === 'Remove 🗑') {
      removeItem(e.target.parentElement.firstChild);
      e.target.parentElement.remove();
    }
  });
}

const localCheck = () => {
  if (!localStorage.getItem('book')) {
    localStorage.setItem('book', JSON.stringify(bookInfo));
  }
}

const navbar = () => {
  navList.addEventListener('click', () => {
    listSelector.classList.toggle('hidden');
    listHeader.classList.toggle('hidden');
    disableList();
    if (contactSection.classList.contains('hidden')) {
      addSection.classList.toggle('hidden');
    } else if (addSection.classList.contains('hidden')) {
      contactSection.classList.toggle('hidden');
    }
  });
  navAdd.addEventListener('click', () => {
    addSection.classList.toggle('hidden');
    disableAdd();
    if (listSelector.classList.contains('hidden')) {
      contactSection.classList.toggle('hidden');
    } else if (contactSection.classList.contains('hidden')) {
      listSelector.classList.toggle('hidden');
      listHeader.classList.toggle('hidden');
    }
  });
  navContact.addEventListener('click', () => {
    contactSection.classList.toggle('hidden');
    disableContact();
    if (listSelector.classList.contains('hidden')) {
      addSection.classList.toggle('hidden');
    } else if (addSection.classList.contains('hidden')) {
      listSelector.classList.toggle('hidden');
      listHeader.classList.toggle('hidden');
    }
  });
}

const disableList = () => {
  navList.classList.toggle('disable');
  if (navAdd.classList.contains('disable')) {
    navAdd.classList.toggle('disable');
  } else if (navContact.classList.contains('disable')) {
    navContact.classList.toggle('disable');
  }
}

const disableAdd = () => {
  navAdd.classList.toggle('disable');
  if (navList.classList.contains('disable')) {
    navList.classList.toggle('disable');
  } else if (navContact.classList.contains('disable')) {
    navContact.classList.toggle('disable');
  }
}

const disableContact = () => {
  navContact.classList.toggle('disable');
  if (navList.classList.contains('disable')) {
    navList.classList.toggle('disable');
  } else if (navAdd.classList.contains('disable')) {
    navAdd.classList.toggle('disable');
  }
}

localCheck();
getInfo();
addfunction();
forLoop();
storeInfo();
removeFunction();
navbar();