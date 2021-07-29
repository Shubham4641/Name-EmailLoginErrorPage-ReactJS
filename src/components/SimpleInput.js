// import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
     hasError: nameInputHasError,
      valueChangeHandler: nameChangedHandler,
       inputBlurHandler: nameBlurHandler,
       reset:resetNameInput,
      } = useInput((value) => value.trim() !== '');

      const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
         hasError: emailInputHasError,
          valueChangeHandler: emailChangedHandler,
           inputBlurHandler: emailBlurHandler,
           reset:resetEmailInput,
          } = useInput((value)  => value.includes('@'));



  // const nameInputRef = useRef();
  // const[enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // useEffect(() => {
  //   if(enteredNameIsValid)
  //   console.log("Name input is valid!");

  // }, [enteredNameIsValid]);
  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsValid = !enteredNameIsValid && enteredNameTouch;

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const enteredEmailIsInvalid = !enteredEmailIsValid &&enteredEmailTouched;

  // useEffect(() => {
  //   if(enteredNameIsValid)
  //   {
  //     setFormIsValid(true);
  //   }
  //   else{
  //     setFormIsValid(false);
  //   }

  // }, [enteredNameIsValid]);


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  //   // if(event.target.value.trim() !=='') {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);

  // }

//  const nameInputBlurHandler = (event) => {
//     setEnteredNameTouch(true);
//     // if(enteredName.trim() ==='') {
//     //   setEnteredNameIsValid(false);
//     // }
//   }; 

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetEmailInput();

    // setEnteredNameTouch(true);
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);

    if (!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      return;
    }
    // setEnteredNameIsValid(true);
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = '';  // not ideal dont manipulate the DOM.
    // setEnteredName('');
    // setEnteredNameTouch(false);
  };




  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef} 
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}

        />
        {nameInputHasError && <p className="error-text">Name Must Not Be Empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          // ref={nameInputRef} 
          type='email'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}

        />
        {emailInputHasError&& <p className="error-text">Please Enter a Valid Email</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;