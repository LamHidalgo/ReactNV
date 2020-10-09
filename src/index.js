import React, {Component, useState} from "react";
import { render } from 'react-dom';
import {Text, Alert} from 'react';
import ReactDOM from "react-dom";
import './style.css';



class Formulario extends Component{
  constructor(props){
        super(props)
            this.state = {
                personId: '',
                supplierCode: '',
                companyName:'',
                CompanyCity: '',
                companyDirection:'',
                companyPhone1: '',
                companyPhone2:'',
                companyRTN:'',
                companyWebsite: '',
                companyLogo:'',
                title:'',
                workPosition:'',
                active: ''

            }

}
syncIDChanges(ID){
  this.setState({
    ID:ID
  })

}

    render(){
        return(
        <form>
        <input 
        onChange ={(ev)=>{this.syncIDChanges(ev.target.value)  }}
        type = "ID"
         value ={this.state.personId}
        placeholder = "Numero Identidad"/>
        <input type = "supplierCode" 
        value = {this.state.supplierCode}
         placeholder ="Codigo de proveedor"/> 
         <input type = "companyName"
          value = {this.state.companyName}
         placeholder ="Nombre de  la compa;ia"/> 
         <input type = "CompanyCity"
          value = {this.state.CompanyCity}
         placeholder ="Ciudad de la compa;ia"/> 
         <input type = "companyDirection" 
         value={this.state.companyDirection}
         placeholder ="Direccion de la compa;ia"/> 
         <input type = "companyPhone1" 
         value = {this.state.companyPhone1}
         placeholder ="Ingrese Numero de telefono de la compa;ia"/> 
         <input type = "companyPhone2" 
         value = {this.state.companyPhone2}
         placeholder ="Ingrese otro numero de telefono"/> 
        <input type = "companyRTN"
         value = {this.state.companyRTN}
         placeholder ="Ingrese el RTN de la empresa"/> 
         <input type = "companyWebsite" 
         value = {this.state.companyWebsite}
         placeholder ="Ingrese URL de la pagina web"/> 
         <input type = "companyLogo" 
         value = {this.state.companyLogo}
         placeholder ="Ingrese el logo de la empresa"/> 
         <input type = "supplierCode"
          value = {this.state.supplierCode}
         placeholder ="Codigo de proveedor"/> 


        <div>
            <input type ="submit" value = "Iniciar Sesion"/>
        </div>
        
        </form>

        )
    }
}
class App extends Component{
    constructor (){
        super();
        this.state = {
            name: 'React'
        
        };
    }

    render() {
        let nombre = 'L';
        return (
            <div>
                <Formulario/>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"));
