const apiLoading = async (time = 10000) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, time);
  });
};

export default apiLoading;
