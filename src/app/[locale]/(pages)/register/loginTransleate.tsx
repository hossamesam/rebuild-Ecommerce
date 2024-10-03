
"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form"
import * as z from "zod";
import axios from 'axios';
import { baseUrl } from '@/baseUrl';
import { useDispatch } from 'react-redux';
import { signNow } from '@/Redux/HeaderSlice';
import GoogleOAuth from '../../(components)/GoogleOAuth/GoogleOAuth';
import { RegisterIcon } from '../../../../../public/svg';

type trans = {
  dir: string,
  signUp: string,
  join: string,
  signUpGoogle: string,
  signUpEmail: string,
  haveAccount: string,
  email: string,
  password: string,
  LoginHere: string,
  login: string,
  firstName: string,
  lastName: string,
  langKey: string
}

export default function LoginTransleate(props: trans) {
  const dispatch = useDispatch()
  const Router = useRouter()

  const signupSchema = z.object({
    email: z.string().min(1, { message: "required" }).email({ message: 'not vaild email' }),
    login: z.string().min(1, { message: "username must be at least 2 characters" }),
    firstName: z.string().min(1, { message: "firstName must be at least 2 characters" }),
    lastName: z.string().min(1, { message: "lastName must be at least 2 characters" }),
    password: z.string().min(8, { message: "password must be at least 8 characters and strong (small and capital ,number characters)" }).max(20, { message: 'mixmum caracters is 20' })
      .refine(
        (value) => /^(?!.*(.)\ {1,})(?=(.*[\d]){1,})(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?:[\da-zA-Z\^@#$%!]){8,20}$/gm.test(value ?? "ok"), { message: "password must be strong" }),
  })
  type FormData = z.infer<typeof signupSchema>

  const { handleSubmit, register,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: zodResolver(signupSchema)
  })

  // const router = useRouter();
  // const [registers, setregisters] = useState<FormData>();
  // useEffect(() => {
  //   // http://localhost:8001/api/ahmed123456789
  //   // https://tarmeezacademy.com/api/v1//logout
  //   axios.post("http://localhost:8001/api/registers", registers)
  //   console.log(registers);
  // }, [registers]);

  async function onSubmit({ email, firstName, lastName, login, password }: FormData) {
    const users = { email, firstName, lastName, login, password, langKey: props.langKey }
    console.log("data:");
    console.log(users);

    axios.post(`${baseUrl}/api/register`, users,
      {
        'headers': {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    )
      .then(() => Router.replace("/"))
      .catch((err) => console.log(err))
  }


  return (
    <div className=''>
      {/* <!-- component --> */}
      <div className="flex  ">
        {/* <!-- Left Pane --> */}
        <div className="hidden  lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center ">
            <RegisterIcon />
          </div>
        </div>
        {/* <!-- Right Pane --> */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center" dir={props.dir}>
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">{props.signUp}</h1>
            <h1 className="text-md font-semibold mb-6 text-black text-center">{props.join} </h1>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1 mb-2 lg:mb-0">
                <GoogleOAuth />
              </div>
            </div>
            <div className="mt-4 text-md font-semibold text-black text-center">
              <p>{props.signUpEmail}</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="space-y-4  h-[640px]"
            >
              {/* <!-- Your form elements go here --> */}
              <div>
                <label htmlFor="login" className="block text-sm font-medium text-gray-700">{props.login}</label>
                <input {...register("login")}
                  id="login"
                  name="login"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                {errors.login && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.login.message}</span></p>)}
              </div>

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{props.firstName}</label>
                <input {...register("firstName")}
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                {errors.firstName && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.firstName.message}</span></p>)}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{props.lastName}</label>
                <input {...register("lastName")}
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                {errors.lastName && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.lastName.message}</span></p>)}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{props.email}</label>
                <input {...register("email", { required: true })}
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                {errors.email && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email.message}</span></p>)}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">{props.password}</label>
                <input  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                {errors.password && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password.message}</span></p>)}
              </div>

              <button
                type="submit"
                disabled={!isDirty || !isValid || isSubmitting}
                className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 hover:cursor-pointer"
              >
                {props.signUp}
              </button>

            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>{props.haveAccount} <span onClick={() => { dispatch(signNow()) }} className="text-black hover:underline  hover:cursor-pointer font-semibold ">{props.LoginHere}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
