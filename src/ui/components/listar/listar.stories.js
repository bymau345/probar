import React from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import { AiFillCaretRight } from 'react-icons/fa';
import { Listar } from "./listar";

const data = {
    isLoading: true,
    label: "Enviar", 
    errors: false
}
storiesOf('Listar', module)
.add('default', () => <Listar {...data} isLoading={false}/>)
