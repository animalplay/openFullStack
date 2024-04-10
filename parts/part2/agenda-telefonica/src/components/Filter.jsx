function Filter({ value, onChange }) {
  return (
    <fieldset>
      <legend>Search with</legend>
      <label htmlFor="nameSearch">Filter shown with</label>
      <input
        type="text"
        name="nameSearch"
        id="nameSearch"
        required
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}

export default Filter;
