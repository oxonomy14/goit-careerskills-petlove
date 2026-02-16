export const getTodayWorkTime = (workDays) => {
  const today = new Date().getDay(); // 0-6 (Sun-Sat)

  // перетворюємо в формат масиву бекенду (Mon-Sun)
  const index = today === 0 ? 6 : today - 1;

  const todayData = workDays?.[index];

  if (!todayData || !todayData.isOpen) {
    return 'Closed';
  }

  return `${todayData.from} - ${todayData.to}`;
};
