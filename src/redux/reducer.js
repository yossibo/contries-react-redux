const initialState = {
    countries: []
};

var allCountriesStart = [];
//when state is undefined it wil get default param initialState
const countriesReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        //when we get the countris array at the start from Countries component
        case 'START':
            let newState = { countries: action.data }
            allCountriesStart = action.data;
            return newState;

        case 'FILTER':
            debugger;
            let filteredCountries = new Array();
            //filter slects one item at a time and checks if true keep in array (creates a new array)
            filteredCountries = state.countries.filter((country) => country.region == action.data);
            newState = { countries: filteredCountries };
            return newState;


        case 'RESET':
            newState = { countries: allCountriesStart} 
            return newState;

        default:
            return state;
    }
};
export default countriesReducer;