import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from "yup";
import styled from "styled-components"
import './Form.css';


const formSchema = yup.object().shape({
    name: yup.string().required("Select a name."),
    size: yup.string().required("Select a Size"),
    pepperoni: yup.boolean().defined(),
    mozzarella: yup.boolean().defined(),
    basil: yup.boolean().defined(),
    pineapple: yup.boolean().defined(),
    specInstr: yup.string().notRequired()
});

const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: black;
    padding: 10px 0px;
    text-align: center;
`

export default function Pizza(){

    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: false,
        ham: false,
        bacon: false,
        pineapple: false,
        specInstr: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        pepperoni: "",
        mozzarella: "",
        basil: "",
        pineapple: "",
        specInstr: ""
    })
    
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
        });
    }, [formState]);


    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [post, setPost] = useState([]);

    const inputChange = e => {
        e.persist();
        const newFormData = {
        ...formState,
        [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setFormState(newFormData);
    };


    const validateChange = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
            ...errors,
            [e.target.name]: ""
            });
        })
        .catch(err => {
            setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
            });
        });
    };
    

    const formSubmit = e => {
        e.preventDefault();
        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
            setPost(res.data);
            console.log("success", post);
            console.log(res.data.size)
            setFormState({
                name: "",
                size: res.data.size,
                pepperoni: false,
                mozzarella: false,
                basil: false,
                pineapple: false,
                specInstr: ""
            });
        })
        .catch(err => console.log(err.response));
    };

    return(


        <form onSubmit = {formSubmit}>
        <Display>
            <h1 id="order">Order now!</h1>
            <label htmlFor = 'name'>
                <h1>Name</h1>
                <br/>
                <input
                type = 'text'
                name = 'name'
                id = 'nameinput'
                placeholder = 'Name'
                value={formState.name}
                onChange={inputChange}
                />
            </label>


            <label htmlFor = 'size'>
                <h1>Size?</h1>
                <br/>
                <select name = 'size' id = 'sizeinput' onChange = {inputChange}>
                    <option name="default" value={null}></option>
                    <option name="Sm" value='Sm'>Small</option>
                    <option name="Md" value='Md'>Medium</option>
                    <option name="Lg" value='Lg'>Large</option>
                    <option name="XL" value='XL'>XL-Large</option>
                </select>
            </label>
            <br/>

            <div className = 'toppingsChecklist'>

                <p>Toppings?</p>

                <label htmlFor = 'pepperoni'>
                    <input
                        type='checkbox'
                        name='pepperoni'
                        id = 'pepperoniCheckBox'
                        checked={formState.pepperoni} 
                        onChange={inputChange}
                    /> 
                    Pepperoni
                </label>
                <br/>

                <label htmlFor = 'mozzarella'>
                    <input
                        type='checkbox'
                        name='mozzarella'
                        id = 'mozzarellaCheckBox'
                        checked={formState.mozzarella} 
                        onChange={inputChange}
                    />
                    Mozzarella 
                </label>
                <br/>

                <label htmlFor = 'basil'>
                    <input
                        type='checkbox'
                        name='basil'
                        id = 'basilCheckBox'
                        checked={formState.basil} 
                        onChange={inputChange}
                    /> 
                    Basil
                </label>
                <br/>

                <label htmlFor = 'pineapple'>
                    <input
                        type='checkbox'
                        name='pineapple'
                        id = 'pineappleCheckBox'
                        checked={formState.pineapple} 
                        onChange={inputChange}
                    />
                    Pineapple
                </label>
                <br/>

            </div>

            <label htmlFor = 'Special Instructions'>
                <h1>Any else you would like us to know?</h1>
                <br/>
                <textarea
                name = 'specInstr'
                id = 'specInstrInput'
                placeholder = 'Type instructions here...'
                value={formState.specInstr} 
                onChange={inputChange}
                />
            </label>
            <button name = 'submit' disabled={buttonDisabled}>Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </Display>

        </form>

    )

}