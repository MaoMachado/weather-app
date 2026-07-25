export const searchHistory = (city: string) => {
  const historySave = localStorage.getItem("searchHistory");
  const history: string[] = historySave ? JSON.parse(historySave) : [];

  const newHistory = [city, ...history];

  const filteredHistory = newHistory.filter(
    (city, index) => newHistory.indexOf(city) === index,
  );

  if (filteredHistory.length > 5) {
    filteredHistory.pop();
  }

  localStorage.setItem("searchHistory", JSON.stringify(filteredHistory));
};

export const getSearchHistory = (): string[] => {
  const historySave = localStorage.getItem("searchHistory");
  return historySave ? JSON.parse(historySave) : [];
};
