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
      <h2>Contact Form</h2><br></br>
        <div className='form-control'>
        <label>Name:</label>
        <input id='name' type='text' {...register("name", {required: "Name is required",})} placeholder='Full Name'/>
        <p className='error'>{errors.name?.message}</p>
        </div>
        
        <div className='form-control'>
        <label>Email:</label>
        <input id='email' type='email' {...register("email",
          {required: {value: true, message: "Email is required"},
            pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          }

        })} placeholder='Your Email'/>
        <p className='error'>{errors.email?.message}</p>
        </div>
        
        <div className='form-control'>
        <label>Message:</label>
        <textarea id='message' {...register("message", {required: "Message is required"})} placeholder='Your Message' required/>
        <p className='error'>{errors.message?.message}</p>
        </div>
        <button className='button' type='submit'>Send</button>

        <DevTool control={control}/>


    </form>
    </div>
  )
};

export default contactForm;
