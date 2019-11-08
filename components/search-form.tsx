const SearchForm = () => (
  <div className="columns">
    <div className="column is-10 is-offset-1">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-large"
            type="text"
            placeholder="Enter keywords to find your next job"
          />
        </div>
        <div className="control">
          <a className="button is-info is-large">Search</a>
        </div>
      </div>
    </div>
  </div>
);

export default SearchForm;
