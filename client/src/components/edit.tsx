// importing styles from edit.styles
import { EditButton, EditButtonContainer,
        EditProfileContainer, EditProfileHeader,
        EditProfileInput, EditProfileInputCont,
        EditProfileLeft, EditProfileSmallerCont } 
        from "../styles/profile/edit.styles"
import { InputLabel } from "../styles/form/input-field.styles";


//importing nessecary react modules
import { useState } from "react";

//importing types from component.types
import { editProfileProps, signUpInputChangeTypes } from "../types/components.types";
import { interestOptions } from "../utils/interest-list";



// import select 
import Select from 'react-select';


const EditProfile: React.FC<editProfileProps> = ({setIsOpen, isOpen}) => {


  const [intVal, setIntVal] = useState("")


    const [email, setEmail] = useState<string>("SegunFaozan112@gmail.com")
    const [name, setName] = useState<string>("Segunmaru Faozan")
    const [address, setAddress] = useState<string>("No 23, Openifoluwa Street")
    const [phone, setPhone] = useState<string>("+2348078752415")

     // initial values
  const [values, setValues] = useState({
    username : "",
    email : "",
    password : "",
    confirm_password : "",
    phone : "",
    textReveal : "",
    interests : []
  } as signUpInputChangeTypes)

  return (
    <EditProfileContainer>
        <EditProfileHeader>Edit Profile</EditProfileHeader>


        <EditProfileInputCont>
            <EditProfileSmallerCont>
                <EditProfileLeft>Email : </EditProfileLeft>
                <EditProfileInput type = "text" value = {email} />
            </EditProfileSmallerCont>

            <EditProfileSmallerCont>
                <EditProfileLeft>Name : </EditProfileLeft>
                <EditProfileInput type = "text" value = {name} />
            </EditProfileSmallerCont>

            <EditProfileSmallerCont>
                <EditProfileLeft>Phone Number : </EditProfileLeft>
                <EditProfileInput type = "text" value = {phone} />
            </EditProfileSmallerCont>

            <EditProfileSmallerCont>
                {/* <img className="img" src="/assets/svg/intercom-alt (1).svg"/> */}
                <EditProfileLeft>Interests : </EditProfileLeft>
            <Select 
                onChange={(e : any) => {
                    setValues({
                    ...values,
                    interests : e
                    })

                }}
                onInputChange ={(e : any) => {
                    setIntVal(e) 
                }}
                className="interests"
                isMulti
                placeholder="Edit your interest"
                name="Interests"
                options={interestOptions}
                />
                <InputLabel 
                className="label" 
                htmlFor="input-field"
                >
                    {
                    intVal.length > 0 ?
                    "Interests" : 
                    values?.interests.length > 0 
                    && "Interests"
                }
                </InputLabel>
            </EditProfileSmallerCont>
        </EditProfileInputCont>

        <EditButtonContainer>
            <EditButton onClick={() => setIsOpen(!isOpen)}>Back</EditButton>
            <EditButton>Submit</EditButton>
        </EditButtonContainer>
    </EditProfileContainer>
  )
}

export default EditProfile