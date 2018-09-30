let defaultCity = '上海';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) {
    console.warn(e);

}

export default {
    city: defaultCity
};
