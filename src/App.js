import React, { useState, useEffect } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Pizza from './components/Pizza';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './components/formSchema';
import { useForm } from 'react-hook-form';




const App = () => {
	
	
	const [formErrors, setFormErrors] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [formData, setFormData] = useState();
	const [formValues, setFormValues] = useState(formData);
	


	const inputChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const inputChangeName = (name, value) => {
		yup
			.reach(formSchema, name)

			.validate(value)

			.then((valid) => {
				setFormErrors({
					...formErrors,
					[name]: '',
				});
			})

			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	

	useEffect(() => {
		formSchema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);
	
	return (
		<>
			<div>
				<Switch>
				

					<Route path="/pizza">
						<Pizza
							validinputChange={inputChangeName}
							inputChange={inputChange}
							values={formValues}
						
							errors={formErrors}
							disabled={disabled}
						/>
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</>
	);
};
export default App;