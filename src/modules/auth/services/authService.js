export const fakeLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@test.com" && password === "123456") {
        resolve({ name: "Admin User", role: "admin" });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};
