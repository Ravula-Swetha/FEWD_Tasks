import React from 'react';
import { useState } from 'react';

const FormConfig = [
        {"id" : 1, "name" : "firstName", "type": "text", "placeholder" : "firstName"},
        {"id" : 2, "name" : "email", "type": "email", "placeholder" : "email"},
        {"id" : 3, "name" : "message", "type": "textarea", "placeholder" : "message"},
]


function Input({name, type, placeholder, value, onChange}){
    if(type === "textarea"){
        return(
            <textarea
               name = {name}
               value={value}
               placeholder={placeholder}
               onChange={onChange}
               id={name}
               required
            >
            </textarea>
        )
    }
     return(
            <input
               type={type}
               name = {name}
               value={value}
               placeholder={placeholder}
               onChange={onChange}
               id={name}
               required
            >
            </input>
        )
}

const ContactForm = () =>{
    const [FormData, setFormData] = useState({
        firstName : '',
        email : '',
        message : ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevData) =>({
            ...prevData,
            [name] : value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log("Data: ", FormData);

        setFormData(
            {
                "firstName" : '',
                "email" : '',
                "message" : ''
            }
        )

        alert("Form Submition Successful");
    }
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                {FormConfig.map((field) =>(
                    <div id={field.id} key={field.id}>
                        <label for={field.name}>{field.name}</label>
                        <Input 
                           type={field.type}
                           name={field.name}
                           placeholder={field.placeholder}
                           value={FormData[field.name]}
                           onChange={handleChange}
                        />
                    </div>
                ))}

                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm;
