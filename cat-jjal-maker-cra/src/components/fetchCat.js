const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://api.thecatapi.com/v1/images/search";
  const response = await fetch(OPEN_API_DOMAIN);
  const responseJson = await response.json();
  return `${responseJson[0].url}?${text}`;
};

export default fetchCat;