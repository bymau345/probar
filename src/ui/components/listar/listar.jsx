import { React } from "react";
import PropTypes from 'prop-types';
import '../../../App.css';
import useForm from "../../../hooks/useForm";
import DataTable from 'react-data-table-component';



import { FaEdit , FaFilter , FaSortAmountUp  } from 'react-icons/fa';
export const Listar = ({}) => {
    return (
        <ul>
        <li><FaEdit/></li>
        <li><FaFilter/></li>
        <li><FaSortAmountUp/></li>
        </ul>
    )
}

