import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { PatternFormat } from 'react-number-format';
import { StyledForm } from './UserForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [tel, setTel] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const numericTel = tel.replace(/\D/g, '');

    if (!name || numericTel.length < 12) {
      toast.warn('Please, enter valid information');
      return;
    }

    dispatch(addContact(name, tel));
    form.reset();
    setTel('');
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <PatternFormat
        format="+38 (###) ### ####"
        allowEmptyFormatting
        mask="_"
        name="tel"
        value={tel}
        onValueChange={values => {
          setTel(values.formattedValue);
        }}
      />
      <button>Add</button>
    </StyledForm>
  );
}