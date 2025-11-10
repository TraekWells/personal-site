export const getTimeOfDay = () => {
  const timeOfDay = new Date().getHours();

  if (timeOfDay >= 5 && timeOfDay < 12) {
    return "morning";
  } else if (timeOfDay >= 12 && timeOfDay < 17) {
    return "afternoon";
  } else if (timeOfDay >= 17 && timeOfDay < 21) {
    return "evening";
  }

  return timeOfDay;
};
