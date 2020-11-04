import {useState,useEffect,useRef} from 'react'

export const useFetch =(url)=>{
/*ejemplo de useRef Solucionando este error
	 Warning: Can't perform a React state update on an 
 unmounted component. This is a no-op, 
but it indicates a memory leak in your application. 
To fix, cancel all subscriptions and asynchronous
 tasks in a useEffect cleanup function.*/
//aqui mantiene una referencia al valor
//y evitamos que se renderice nuevamente
const estaMontado =useRef(true) 

	const [state ,setState] = useState({date:null,loading:true,error:null});


	useEffect(()=>{
		return()=>{
			estaMontado.current = false;}
	},[])



	useEffect(()=>{

		setState({date:null,loading:true,error:null});

		fetch(url)
		.then(resp =>resp.json())
		.then(data=>{
				
				if(estaMontado.current){
				setState({
				loading:false,
				error:null,
				data
			});
	}
		
		});
	},[url])

	return state
	
}