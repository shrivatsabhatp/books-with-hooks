import React from 'react';
import { SearchProps } from '../../../common/interface';
import Input from '../../atoms/Input';
import classes from './Searchbox.module.css';

const Search = React.forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  function handleOnBlur() {
    if (btnRef.current !== null) btnRef.current.focus();
  }

  return (
    <div className={classes.search}>
      <Input {...props} type="text" ref={ref} onBlur={handleOnBlur} />
    </div>
  );
});

export default Search;
