import React from 'react'
import Select, { StylesConfig } from 'react-select'

const SearchForm = () => {


   
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const customStyles: StylesConfig = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#ff8c00', // Установите здесь цвет фона, который вам нужен
        }),
    };


    const formats = [];
    return <form className="flex gap-16">
        <label className="text-neutral-50 opacity-30 flex flex-col">
            Title Starts With
            <input type="text" placeholder="Enter text" />
        </label>
        <label className="text-neutral-50 opacity-30 flex flex-col">
            Format
            <select>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
            </select>
        </label>
        <label className="text-neutral-50 opacity-30 flex flex-col">
            Order by
            <select>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
            </select>
        </label>
        <label className="text-neutral-50 opacity-30 flex flex-col">
            Start Year
            <select></select>
        </label>
        <label>
            Format
            <Select styles={customStyles} options={options} />
        </label>
    </form>
}

export default SearchForm;