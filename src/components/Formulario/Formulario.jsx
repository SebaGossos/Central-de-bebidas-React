import { useState, useEffect } from "react"
import Form from "./Form"
import { formWhitValidation } from "./formWhitValidation"

// const FormWhitValidation = form mejorados <- formWhitValidation(Form)
const FormWhitValidation = formWhitValidation(Form)

export function Formulario (){
    // estado
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
   
    useEffect(() => {
        console.log(formData);
      }, [formData])

    const handleOnChange = (evt) => {
        // console.log('name: ', evt.target.name)
        // console.log('value: ', evt.target.value)
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    

    return  (
        <FormWhitValidation 
            formData={formData} 
            handleOnChange={handleOnChange} 
        />
    )
}