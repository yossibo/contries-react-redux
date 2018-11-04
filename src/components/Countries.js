import React, { Component } from 'react';
import { connect } from "react-redux";
import {FilterTable} from '../redux/actions'
import {StartReduxState } from '../redux/actions'
import {ResetTable } from '../redux/actions'

class Countries extends Component {
  constructor(props)
  {
    super(props);
    this.state={ countries:[] };
  }


  componentDidMount()
  {
    let url= "https://restcountries.eu/rest/v2/all";
    fetch(url).then(response=> response.json())
    .then((data)=>
    {
       // this.setState({countries:  data });
       this.props.StartReduxState(data);
    });
  } 

  render() {
    return (
     <div> 
       <div>
         <button onClick={this.props.FilterTable.bind(null, 'Europe')} >Europe</button>
         <button onClick={this.props.FilterTable.bind(null, 'Americas')} >Americas</button>
         <button onClick={this.props.FilterTable.bind(null, 'Asia')} >Asia</button>
         <button onClick={this.props.ResetTable } >RESET</button>
       </div>
      <table> 
        {
          this.props.countries.map((country) => {
          return  <tr>
            <td>{country.name}</td>
            <td>{country.region}</td> 
          </tr> 
        }  )
        }
       
      </table> 
     </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  debugger;
  let contriesComponentNewProps= {
      FilterTable: filter => dispatch(FilterTable(filter)) ,
      StartReduxState: countriesData=>dispatch(StartReduxState(countriesData)),
      ResetTable: () => dispatch(ResetTable()) 
    }
return contriesComponentNewProps;
};

const mapStateToProps = state => { 
  return { countries: state.countries };
};

//we export the edited component countries
//after we change its props using mapDispatchToProps
const countries = connect(mapStateToProps, mapDispatchToProps)(Countries);
export default countries;
