import React from 'react'
import Input from './Fields/Input';

const FormikController = (props) => {
    const { control, ...rest } = props;

    switch(control){
        case 'input' :
            return <Input {...props} ></Input>
    }



}

export default FormikController