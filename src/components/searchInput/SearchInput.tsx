import React from 'react';
import styles from './index.module.css';

type SearxhInputProps = {
  iputvalue: string;
  onChange: (value: string) => void;
};

function SearchInput({ iputvalue, onChange }: SearxhInputProps) {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={iputvalue}
        onChange={handelChange}
        onKeyDown={handelKeyDown}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchInput;
