import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function Datepicker() {
  const [value, onChange] = useState(new Date());
  console.log(value.date);
  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={value}
      />
      
    </div>
  );
}
export default Datepicker;