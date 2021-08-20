import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

function Timepicker() {
  const [value, onChange] = useState('10:00');

  return (
    <div>
      <TimePicker
      disableClock='true'
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default Timepicker;