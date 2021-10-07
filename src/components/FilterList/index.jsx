import React, { Fragment } from "react";
import PropTypes from "prop-types";
import InputWithHeader from "components/InputWithHeader/index";
import { useStyles } from "./styles";
import clsx from "clsx";

const FilterList = ({ fullWidth = true, filterfields }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div
        className={clsx({
          [classes.FlexContainer]: true,
        })}
      >
        {filterfields.map((inputField, index) => {
          return (
            <div
              className={clsx(classes.FlexElement, {
                [classes.FlexGrow]: fullWidth,
              })}
              key={index}
              style={{
                width:
                  !fullWidth && inputField.field.width
                    ? inputField.field.width
                    : 200,
              }}
            >
              <InputWithHeader element={inputField} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

FilterList.propTypes = {
  filterfields: PropTypes.array,
  fullWidth: PropTypes.bool,
};

export default FilterList;
