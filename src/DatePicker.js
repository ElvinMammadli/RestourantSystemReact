import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export default function Datepicker() {
  const [value, onChange] = useState(new Date());

  function cahgend(){
    /*value.setHours(11,40,10);
    console.log(value)
    */
  }
  return (
    <div>
      <DatePicker
        onChange={onChange}
      
        value={value}
      />
    </div>
  );
}
