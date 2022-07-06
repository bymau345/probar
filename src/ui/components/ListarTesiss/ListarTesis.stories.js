import React from "react";
import { ListarTesis } from "./ListarTesis";
export default {
    title: 'ui/components/Listartesiss',
    component: ListarTesis,
    //argTypes: { handleClick: {action: 'handleClick'}}
}


const Template = args => <ListarTesis {...args}/>
export const DefaultButton = Template.bind({});