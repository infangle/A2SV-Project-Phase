import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

type formValues = {
  name: string
  email: string
  message: string
}
export const contactForm = () => {
  const form = useForm<formValues>();
  const {register, control,  handleSubmit, formState} = form;

  const {errors} = formState;


  const onSubmit = (data: formValues) => {
    console.log("submit", data);
  }

  return (
    <div className='contact-form-container'>
    <form className='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Contact Form</h2>
        <div className='form-control'>
        <label>Name:</label>
        <br></br>
        <input id='name' type='text' {...register("name", {required: "Enter you name or I am not Leaving, Enter Name!",})} placeholder='Full Name'/>
        <p className='error'>{errors.name?.message}</p>
        </div>
        
        <div className='form-control'>
        <label>Email:</label>
        <br></br>
        <input id='email' type='email' {...register("email",
          {required: {value: true, message: "What's your return address, Enter Email!"},
            pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Where did you buy this email address, Invalid email address!",
          }

        })} placeholder='Your Email'/>
        <p className='error'>{errors.email?.message}</p>
        </div>
        
        <div className='form-control'>
        <label>Message:</label>
        <br></br>
        <textarea id='message' {...register("message", {required: "What do you want me to tell ther, Enter your Message!"})} placeholder='Your Message' required/>
        <p className='error'>{errors.message?.message}</p>
        </div>
        <button className='button' type='submit'>Send</button>

        <DevTool control={control}/>


    </form>
    </div>
  )
};

export default contactForm;
