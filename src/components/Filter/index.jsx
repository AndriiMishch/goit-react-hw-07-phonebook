import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/actions';

export default function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input type="text" name="filter" value={filter} onChange={onFilterChange} />
  );
}