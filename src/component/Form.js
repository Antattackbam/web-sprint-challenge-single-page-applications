import React from 'react'

const Form = (props) => {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        errors,
        disabled,
    } = props

    return (
        <>
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <h3>Bulid Your Own Pizza</h3>
                <label>Name:&nbsp;
                    <input
                        type='text'
                        data-cy='name-input'
                        placeholder='name'
                        maxLength='30'
                        name='first_name'
                        value={values.first_name}
                        onChange={onInputChange}
                    />
                </label>  
                <label>Size:&nbsp;
                    <select name='size' data-cy='size' value={values.size} onChange={onInputChange}>
                        <option value=''> Select a Size</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>
                <div>
                    <label>Pepperoni&nbsp;
                        <input
                            type='checkbox'
                            name='pepperoni'
                            data-cy='pepp'
                            checked={values.toppings.pepperoni}
                            onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Chicken&nbsp;
                        <input
                            type='checkbox'
                            data-cy='chick'
                            name='chicken'
                            checked={values.toppings.chicken}
                            onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Onions&nbsp;
                        <input
                            type='checkbox'
                            name='onions'
                            checked={values.toppings.onions}
                            onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Tomatoes&nbsp;
                        <input
                            type='checkbox'
                            data-cy='tom'
                            name='tomatoes'
                            checked={values.toppings.tomatoes}
                            onChange={onCheckboxChange}
                        />
                    </label>
                </div>
                <label>Special Instructions:&nbsp;
                    <input
                        type='text'
                        data-cy='instructions'
                        placeholder='instructions'
                        maxLength='200'
                        name='instructions'
                        value={values.instructions}
                        onChange={onInputChange}
                    />
                </label> 
                <div className='errors'>{errors.first_name}</div>
                <button disabled={disabled} data-cy='submit' className='submit' >Submit</button>
            </form>
        </>

    )
}
export default Form