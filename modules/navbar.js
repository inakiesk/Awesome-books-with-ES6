const bookArr = [];
bookArr.titleSelector = document.querySelector('.title');
bookArr.authorSelector = document.querySelector('.author');
bookArr.addSelector = document.querySelector('.btn');
bookArr.listSelector = document.querySelector('.list');
bookArr.navList = document.getElementById('link1');
bookArr.navAdd = document.getElementById('link2');
bookArr.navContact = document.getElementById('link3');
bookArr.listHeader = document.querySelector('.header');
bookArr.contactSection = document.querySelector('.contact-info');
bookArr.addSection = document.querySelector('.form');
bookArr.titleArr = [];
bookArr.authorArr = [];
bookArr.buttonArr = [];
bookArr.bookElement = [];
bookArr.books = [];
bookArr.bookInfo = {};
bookArr.by = [];

const navbar = () => {
  const disableList = () => {
    bookArr.navList.classList.toggle('disable');
    if (bookArr.navAdd.classList.contains('disable')) {
      bookArr.navAdd.classList.toggle('disable');
    } else if (bookArr.navContact.classList.contains('disable')) {
      bookArr.navContact.classList.toggle('disable');
    }
  };
  const disableAdd = () => {
    bookArr.navAdd.classList.toggle('disable');
    if (bookArr.navList.classList.contains('disable')) {
      bookArr.navList.classList.toggle('disable');
    } else if (bookArr.navContact.classList.contains('disable')) {
      bookArr.navContact.classList.toggle('disable');
    }
  };
  const disableContact = () => {
    bookArr.navContact.classList.toggle('disable');
    if (bookArr.navList.classList.contains('disable')) {
      bookArr.navList.classList.toggle('disable');
    } else if (bookArr.navAdd.classList.contains('disable')) {
      bookArr.navAdd.classList.toggle('disable');
    }
  };
  bookArr.navList.addEventListener('click', () => {
    bookArr.listSelector.classList.toggle('hidden');
    bookArr.listHeader.classList.toggle('hidden');
    disableList();
    if (bookArr.contactSection.classList.contains('hidden')) {
      bookArr.addSection.classList.toggle('hidden');
    } else if (bookArr.addSection.classList.contains('hidden')) {
      bookArr.contactSection.classList.toggle('hidden');
    }
  });
  bookArr.navAdd.addEventListener('click', () => {
    bookArr.addSection.classList.toggle('hidden');
    disableAdd();
    if (bookArr.listSelector.classList.contains('hidden')) {
      bookArr.contactSection.classList.toggle('hidden');
    } else if (bookArr.contactSection.classList.contains('hidden')) {
      bookArr.listSelector.classList.toggle('hidden');
      bookArr.listHeader.classList.toggle('hidden');
    }
  });
  bookArr.navContact.addEventListener('click', () => {
    bookArr.contactSection.classList.toggle('hidden');
    disableContact();
    if (bookArr.listSelector.classList.contains('hidden')) {
      bookArr.addSection.classList.toggle('hidden');
    } else if (bookArr.addSection.classList.contains('hidden')) {
      bookArr.listSelector.classList.toggle('hidden');
      bookArr.listHeader.classList.toggle('hidden');
    }
  });
};

export default navbar;