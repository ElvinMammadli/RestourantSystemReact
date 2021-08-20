import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from "react";


const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;