import { Input } from 'antd';
import style from './Input.module.scss';


const CustomInput = ({placeholder, value, onChange}) => {

    return (
        <div>
            <Input 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={style.search}
            />
        </div>
    )
}

export default CustomInput