import { useState } from 'react';
import SearchInput from '../searchInput/SearchInput';
function Form() {
  const [inputValue, setInputValue] = useState<string>('');

  console.log(inputValue)
  const handelChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <form>
      <SearchInput iputvalue={inputValue} onChange={handelChange} />
    </form>
  );
}

export default Form;
