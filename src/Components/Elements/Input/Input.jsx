import { Input } from 'antd';
import style from './Input.module.scss';


const CustomInput = ({placeholder, value, onChange, mailing}) => {

    return (
        <div>
            {
                mailing ? (
                    <Input 
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={style.mailing}
                    />
                ) : (
                    <Input 
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={style.search}
                    />
                )
            }
        </div>
    )
}

export default CustomInput