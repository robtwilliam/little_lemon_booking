import { fetchAPI } from "./api";

export const initializeTimes = (date) => {
    return fetchAPI(date);
};

export const updateTimes = (date) => {
    return fetchAPI(date);
};

export const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}