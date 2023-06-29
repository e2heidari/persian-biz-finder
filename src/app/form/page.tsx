import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

const page: React.FC = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [hours, setHours] = useState('');
    const [image, setImage] = useState('');
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted:', { name, address, hours, image });
    };
  
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value);
    };
  
    const handleHoursChange = (event: ChangeEvent<HTMLInputElement>) => {
      setHours(event.target.value);
    };
  
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
      // Handle file upload logic here
      const file = event.target.files?.[0];
      if (file) {
        // Do something with the file
        console.log('Uploaded file:', file);
        setImage(file.name);
      }
    };
  
    return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input type="text" value={name} onChange={handleNameChange} />
          </Label>
          <Label>
            Address:
            <Input type="text" value={address} onChange={handleAddressChange} />
          </Label>
          <Label>
            Operating Hours:
            <Input type="text" value={hours} onChange={handleHoursChange} />
          </Label>
          <Label>
            Image:
            <Input type="file" onChange={handleImageChange} />
          </Label>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>
    );
  };

export default page;
