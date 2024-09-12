export const mockSubmit = async () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Simulate random success/failure
      isSuccess
        ? resolve()
        : reject(new Error("Your last name is just not the right one!"));
    }, 1500);
  });
};
