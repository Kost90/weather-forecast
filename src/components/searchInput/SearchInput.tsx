import React from 'react';

type SearxhInputProps = {
  iputvalue: string;
  onChange: (value: string) => void;
};

function SearchInput({ iputvalue, onChange }: SearxhInputProps) {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input type="text" placeholder="Enter a location" value={iputvalue} onChange={handelChange} />;
}

export default SearchInput;
