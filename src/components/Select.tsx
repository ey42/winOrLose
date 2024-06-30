import React from 'react'
import { chooses } from './obj'

const Select = () => {
    const choose = chooses
  return (
    <div className=" border-2 stroke-none px-2 hover:rotate-2 hover:translate-x-3 duration-300 hover:border-gray-500 rounded-sm w-auto ">
     
<select className="focus:outline-none text-gray-500 hover:text-black rounded-md">
  {choose.map((choose) => (

  <option className="hover:cursor-pointer bg-gray-100 text-black-500" key={choose.name} value={choose.name}>{choose.name}</option>

  ))}
 </select>

    </div>
  )
}

export default Select