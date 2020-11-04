import {useState} from 'react'

//use form se encarga de leer lo que esta en las cajas de texto 
//de los formularios 
export const useForm = (initialState={}) =>{

	const [values,setValues] = useState(initialState) 
	//funcion que limpia los campos de la caja de texto

	const reset=()=>{
		setValues(initialState)
	}


	const handleInputChange = ({target}) =>{
		/*console.log(e.target.name)
		console.log(e.target.value)*/
		setValues({
			...values,
			//obtenmos de la propiedad name
			//el target
			//ejemplo recibe el name de imput name='description'
			[target.name]:target.value
		})
	}
	//values sera el estado inicial y el hadleinputchange 
	//cambiara los valores del fomulario
	return [values,handleInputChange,reset]
}