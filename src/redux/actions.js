
//{type:"FILTER", data:"Americas"}
//{type:"FILTER", data:"Europe"} ...
export const FilterTable = filter => {
debugger;
   return ({ type: "FILTER", data: filter });
}

//{type:"START", data:[contries arr....]} 
export const StartReduxState = countriesData => {
    debugger;
       return ({ type: "START", data: countriesData });
}

//{type:"RESET", data: null } 
export const ResetTable = () => { 
       return ({ type: "RESET", data: null });
}




































export const RemovePost = index => ({ type: "REMOVE", data: index });