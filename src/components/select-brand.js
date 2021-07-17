import React from "react";
import useBrands from "../hooks/use-brands";
import Select from "./select";
import PropTypes from "prop-types";

function SelectBrand ({ value, onChange }) {
const { brands } = useBrands();

    return(
        <Select 
        value={value}
        onChange={(brandId) => {
            onChange(brands.find((brand) => brand.id == brandId));
        }}
        options = {brands.map((brand) =>({
            value: brand.id,
            label: brand.name,
        }))}
        />
    )
}

SelectBrand.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SelectBrand;