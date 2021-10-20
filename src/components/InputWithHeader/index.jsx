import React, { Fragment } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import { useStyles } from "./styles";
import { Button, Select } from "@mui/material";

function returnComponent(item) {
  return item.component === "TextField" ? (
    <TextField
      label={item.label}
      placeholder={item.placeholder}
      id={item.id}
      type={item.type ? item.type : "text"}
      size="small"
      icon={item.icon}
      iconPosition={item.iconPosition}
      value={item.value}
      disabled={item.disabled}
      onKeyUp={item.onKeyUp}
      onChange={item.onChange}
    />
  ) : item.component === "SelectField" ? (
    <Select
      label={item.label}
      id={item.id}
      name={item.name}
      items={item.options}
      value={item.value}
      onChange={item.handleChange}
    />
  ) : (
    item.component === "IconButton" && (
      <Button
        label={item.label}
        variant={item.variant}
        color={item.color ? item.color : "primary"}
        startIcon={item.icon}
        onClick={item.handleClick}
        fullWidth={true}
        size={item.size ? item.size : "large"}
        disabled={item.disabled ? item.disabled : false}
      />
    )
  );
}

const InputWithHeader = ({ element }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.FlexContainerColumn}>
        <ListItemText>
          <div className={classes.TextBold}>
            {element.title} {console.log(element)}
          </div>
        </ListItemText>
        {returnComponent(element.field)}
      </div>
    </Fragment>
  );
};

InputWithHeader.propTypes = {
  element: PropTypes.object,
};

export default InputWithHeader;
