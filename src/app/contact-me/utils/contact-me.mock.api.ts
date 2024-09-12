export const mockSubmit = async () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Simulate random success/failure
      isSuccess
        ? resolve()
        : reject(new Error("Here is a huge huge huge big ol' server error!"));
    }, 1500);
  });
};
