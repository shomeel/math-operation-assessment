'use client'
import Image from 'next/image'
// import React from 'react'
import React, { useState } from 'react';

import styles from './page.module.css'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';


const options = [
    { value: '30', label: 'Payment processing fee' },
    { value: '20', label: 'Payroll bonus cogs' },
    { value: '40', label: 'Payroll bonus G&A' },
    { value: '90', label: 'Payroll bonus R&D' },
    { value: '21', label: 'Payroll bonus S&M' },
    { value: '34', label: 'Payroll G&A' },
    { value: '89', label: 'Payroll S&M' },
]

export default function Home() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [result, setResult] = useState([]);

    const isValidNewOption = (inputValue, selectValue, selectOptions) => {
        if (inputValue == '*' || inputValue == '+' || inputValue == '-' || inputValue == '/' || inputValue == '(' || inputValue == ')' ) {
            return true;
        } else {
            return false;
        }
    };

    const handleSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        console.log(selectedOptions)
    };

    const calculate = () => {
        let rsStr = selectedOptions.reduce((str,obj)=>{
            str=str.concat(obj.value)
            return str
        },'')
            // console.log(eval(rsStr),'anish')
        setResult((eval(rsStr)));
            // return (eval(rsStr),'anish')
    }


  return (
    <main className={styles.main}>
      <div style={{width:'800px'}}>
          <CreatableSelect
              isMulti
              options={options}
              value={selectedOptions}
              onChange={handleSelectChange}
              isValidNewOption={isValidNewOption}
              placeholder="Select options"
          />
          <button className={styles.btn} onClick={calculate}>calculate</button>

          <h3>Result : {result}</h3>
      </div>
    </main>
  )
}
