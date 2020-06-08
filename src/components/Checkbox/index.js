import React, { Component } from "react";

const CheckBox = ({ title, text, onChange, defaultValue }) => {
  return (
    <div class="form-group form-group-lg">
      <label class="control-label">{text}
        <input
          type="checkbox"
          id={title + text}
          onChange={onChange}
          defaultChecked={defaultValue} />
      </label>
    </div>
  )
};
export default CheckBox;
