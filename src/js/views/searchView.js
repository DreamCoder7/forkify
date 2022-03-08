class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearSearch();
    return query;
  }

  _clearSearch() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHundlerSearch(hundler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      hundler();
    });
  }
}

export default new SearchView();
