import Select from 'react-select';
import PropTypes from 'prop-types';

const ReactSelectDropdown = (props) => {
    const {
        name,
        value,
        options,
        onChange = () => null,
        onInputChange = () => null,
        isMulti,
        closeMenuOnSelect = true,
        classes = {},
        isClearable=true
    } = props

    const selectStyles = {
        menu: styles => ({ ...styles, zIndex: 999 }),
        menuPortal: styles => ({ ...styles, zIndex: 9999 }),
        container: styles => ({...styles, width: "20rem"})
    };

    return (
        <Select
            name={name}
            value={value}
            options={options}
            onChange={onChange}
            onInputChange={onInputChange}
            isMulti={isMulti}
            closeMenuOnSelect={closeMenuOnSelect}
            menuPortalTarget={document.querySelector(
                "#select-dropdown-portal"
            )}
            styles={selectStyles}
            className={classes.root}
            // menuIsOpen={true}
            isClearable={isClearable}
        />
    )
}

ReactSelectDropdown.propTypes = {
    name: PropTypes.string,
    value: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
    }),
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func,
    onInputChange: PropTypes.func,
    isMulti: PropTypes.bool,
    closeMenuOnSelect: PropTypes.bool,
    className: PropTypes.shape({
        root: PropTypes.string
    })
};

export default ReactSelectDropdown