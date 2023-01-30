import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/filterSlice.js/filterSlice';
import css from '../Filter/Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(handleFilter(evt.target.value));
  };

  return (
    <div>
      <label className={css.search__label}>
        Find contacts by name
        <input onChange={handleFilterChange}></input>
      </label>
    </div>
  );
}
