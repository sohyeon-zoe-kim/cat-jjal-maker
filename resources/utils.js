const EMPTY_HEART = "🤍";
const FULL_HEART = "💖";

const CAT1 = "https://cdn2.thecatapi.com/images/UYLI_E-SZ.jpg";
const CAT2 = "https://cdn2.thecatapi.com/images/9ed.jpg";
const CAT3 = "https://cdn2.thecatapi.com/images/1dgqh0UCd.jpg";

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};
