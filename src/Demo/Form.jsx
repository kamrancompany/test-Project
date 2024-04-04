import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <>
            <div className='form'>
                <h3>What can us do for you?</h3>
                <div>We are ready to work on a project of any complexity,</div> <div>whether it’s commercial or residential.</div>
                <form>
                    <div><input type='text' placeholder='Your Name *' required className='input-form' />
                        <input type='email' placeholder='Email *' className='input-form' />
                    </div>
                    <div>
                        <label for="cars" ></label>

                        <select name="cars" id="cars" className='input-form'>
                            <option value="volvo" >Reason for Contacting *</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input type='email' placeholder='Phone' className='input-form' />
                    </div>
                    <textarea    placeholder='Message' className='input-form' id='textarea'>

                    </textarea>
                   
                    <p className='alert'>* indicates a required field</p>
                </form>
                <div><button className='submitbt'>Submit</button></div>
            </div>
        </>
    )
}

export default Form