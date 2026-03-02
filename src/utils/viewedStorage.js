const KEY = 'viewed_notices';

export const getViewedFromStorage = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const addViewedToStorage = (id) => {
  const viewed = getViewedFromStorage();

  if (!viewed.includes(id)) {
    const updated = [id, ...viewed].slice(0, 20); // максимум 20
    localStorage.setItem(KEY, JSON.stringify(updated));
  }
};

export const clearViewedStorage = () => {
  localStorage.removeItem('viewed_notices');
};