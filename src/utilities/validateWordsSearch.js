export const validateWordsSearch = (e) => {
  const inputValue = e.target.value;
  const regex = /^[a-zA-Z\s]{0,30}$/;
  return regex.test(inputValue);
};
