export const asyncLocalStorage = {
    setItem: (key, value) => {
        return new Promise((resolve, reject) => {
            localStorage.setItem(key, JSON.stringify(value));
            resolve();
        });
    },
    getItem: key => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(localStorage.getItem(key))
            }, 500);
        });
    }
};