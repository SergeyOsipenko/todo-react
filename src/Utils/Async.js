export const asyncLocalStorage = {
    setItem: (key, value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                localStorage.setItem(key, JSON.stringify(value));
                resolve();
            }, 300);
        });
    },
    getItem: key => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(localStorage.getItem(key))
            }, 300);
        });
    }
};