import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHundlerClick(hundler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      hundler(goToPage);
    });
  }

  _nextPage(data) {
    return `
        <button data-goto="${
          data + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${data + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
  }

  _previousPage(data) {
    return `
        <button data-goto="${
          data - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${data - 1}</span>
        </button>
    `;
  }

  _numPagination(data) {
    return `
        <span class="pagination__page">${data} Page</span>
    `;
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPage = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );

    // 1) Page 1 and there are other pages
    if (currPage === 1 && numPage > 1) {
      return `${this._numPagination(numPage)} ${this._nextPage(currPage)}`;
    }

    // 2) last page
    if (currPage === numPage && numPage > 1) {
      return `${this._numPagination(numPage)} ${this._previousPage(currPage)}`;
    }

    // 3) Other pages
    if (currPage < numPage) {
      return `${this._numPagination(numPage)} ${this._previousPage(
        currPage
      )} ${this._nextPage(currPage)}`;
    }
    // 4) Page 1 and there are No page
    return '';
  }
}

export default new PaginationView();
