import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const _handleOnChange = (e) => {
        setinputValue(e.target.value)
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories((c) => [ inputValue, ...c]);
            setinputValue('');
        }
    }

    return (
        <>
        <form onSubmit={_handleSubmit}>
            <input
                type="text"
                className="input is-rounded"
                value={inputValue}
                onChange={_handleOnChange}
                placeholder='Gif'
            />
        </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}