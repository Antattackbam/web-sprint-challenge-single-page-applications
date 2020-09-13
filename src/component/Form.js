import React from 'react';

const Form  = props => {

    return ( 
    <>
    <h2>Build Your Own Pizza</h2>
        <form >
            <label>Name:&nbsp;
                <input
                    type='text'
                    placeholder='name'
                    maxLength='30'
                    name='first_name'
                />
            </label>  
            <label>Size:&nbsp;
                <select name='size'>
                    <option> Select a Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </label>
            <div>
                <label>Pepperoni&nbsp;
                    <input
                        type='checkbox'
                        name='pepperoni'
                    />
                </label>
                <label>Chicken&nbsp;
                    <input
                        type='checkbox'
                        name='chicken'
                    />
                </label>
                <label>Onions&nbsp;
                    <input
                        type='checkbox'
                        name='onions'
                    />
                </label>
                <label>Tomatoes&nbsp;
                    <input
                        type='checkbox'
                        name='tomatoes'
                    />
                </label>
            </div>
            <label>Special Instructions:&nbsp;
                <input
                    type='text'
                    placeholder='instructions'
                    maxLength='200'
                    name='instructions'
                />
            </label> 
            <button>Submit</button>
        </form>
    </>

)
}
export default Form