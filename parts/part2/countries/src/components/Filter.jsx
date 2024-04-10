
export const Filter = ({value, handleChange}) => {
  return (
    <fieldset>
      <legend>Countries</legend>
      <label htmlFor="countrieSearch">Find country: </label>
      <input 
        type="text" 
        name="countrieSearch" 
        id="countrieSearch" 
        value={value}
        onChange={handleChange}
        required />
    </fieldset>
  );
};
