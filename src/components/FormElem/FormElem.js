import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
import Button from "../../UI/Button/button"
import Input from "../../UI/Input/input"
import s from "./FormElem.module.css"


function FormElem(props){

    const {title, button, link, type, input, infoText} = props

    const {
        register,
        reset, 
        watch,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{title}</h2>

                <p>{input.email}</p>
                <Input {...register('email',{
                    required: 'EMail should be filled',
                    pattern:{
                        value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                        message: 'Chosen Email is incorrect'
                    }
                })}/>
                {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}


{/* {'Password'} */}
{type!=='reset' &&
<>
                <p>{input.password}</p>
                <Input type={type=== 'login' ? 'password' : 'text'} {...register('password',{
                    required: 'Password should be filled',
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: 'Пароль должен содержать минимум 8 букв и хотя бы 1 цифру'
                    }
                })}/>
                {errors.password && <p className={s.warning_text}>{errors.password.message}</p>}
                
</>
}

{/* {'Repeat Password'} */}
{type==='reg' &&
<>
                <p>{input.secondPassword}</p>
                <Input type='text' {...register('secondPassword',{
                    required: 'Please, verificate your password',
                    validate: (value) => value === watch('password') || 'Passwords should be similar'
                })}/>
                {errors.secondPassword && <p className={s.warning_text}>{errors.secondPassword.message}</p>}
                
</>
}




                <p className={s.info_text}>{infoText}</p>

                {type === 'login' && (
                    <Link to={'/reset'}>
                        <p>RESET PASSWORD</p>
                    </Link>
                )}

                <Link to={link}>
                <Button onClick={() => reset()} title={button.redirect} color={'white'}/>
                </Link>
                <Button title={button.submit} color={'yellow'}/>
            </form>
        </div>
    )
}
export default FormElem