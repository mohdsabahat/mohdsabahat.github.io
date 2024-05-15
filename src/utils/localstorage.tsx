
const EXPIRATION_TIME = 24; // 24 hours

// Save data to local storage
const saveToLocalStorage = (key: string, data: any, checkExpiration: boolean = false): void => {
    try {
        const expirationKey = `${key}_expiration`;
        const expirationDate = new Date();

        // Set expiration date
        expirationDate.setHours(expirationDate.getHours() + EXPIRATION_TIME);

        // Save data and expiration date to local storage
        localStorage.setItem(key, JSON.stringify(data));
        localStorage.setItem(expirationKey, expirationDate.toISOString());
    } catch (error) {
        console.error('Error saving data to local storage:', error);
        // Handle error here (e.g., show error message to user)
    }
};

// Get data from local storage
const getFromLocalStorage = (key: string): any => {
    try {
        const expirationKey = `${key}_expiration`;
        const expirationDate = localStorage.getItem(expirationKey);

        // Check if data has expired
        if (expirationDate && new Date(expirationDate) < new Date()) {
            // Data has expired, remove it from local storage
            localStorage.removeItem(key);
            localStorage.removeItem(expirationKey);
            return null;
        }

        // Data is still valid, return it
        let data = localStorage.getItem(key);
        data = data ? JSON.parse(data) : null;
        // https://stackoverflow.com/questions/42494823
        // Parsing twice to account for overstringified JSON data.
        if (typeof data === 'object') {
            return data;
        } else {
            try {
                return JSON.parse(data);
            } catch (error) {
                return data;
            }
        }
        
    } catch (error) {
        console.error('Error getting data from local storage:', error);
        // Handle error here (e.g., show error message to user)
        return null;
    }
};

export const localStorageUtils = {
    saveToLocalStorage,
    getFromLocalStorage,
};