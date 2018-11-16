import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./Kennel.css"

/*
State is simply the current values of the properties used to render a component. Your brain will try to make it more complex than that, so remember this statement.

State is simply the current values of the properties used to render a component.

You initialize state by defining a state at the top of your class definition. Let's take a look at how to implement state for our Kennel component.

Also note that you're importing a single CSS file directly into this component. No need to worry about <link> tags in your HTML any more. All of the styles in the imported CSS should only apply to the JSX elements you are making in this component.
*/
export default class Kennel extends Component {
    /*
      Although you will eventually be pulling your objects from your json-server API, for this chapter, we're faking it and just creating those arrays in the component itself
    */
   employeesFromAPI = [
     { id: 1, name: "Jessica Younker"},
     { id: 2, name: "Jordan Nelson"},
     { id: 3, name: "Zoe Leblanc"},
     { id: 4, name: "Blaise Roberts"}
   ]

  //  This will eventually get pulled from the API
   locationsFromAPI = [
     { id: 1, name: "Nashville North", address: "500 Circle Way"},
     { id: 2, name: "Nashville South", address: "10101 Binary Court"}
   ]

   animalsFromAPI = [
     {id: 1, name: "Monkey"},
     {id: 2, name: "Dolphin"},
     {id: 3, name: "Rhinocerous"},
     {id: 4, name: "Jaguar"},
   ]

   state = {
     employees: this.employeesFromAPI,
     locations: this.locationsFromAPI,
     animals: this.animalsFromAPI
   }

   render() {
     return (
       <article className="kennel">
          <LocationList locations={this.state.locations} />
          <EmployeeList employees={this.state.employees} /> 
          <AnimalList animals={this.state.animals} />
       </article>
     )
   }
}