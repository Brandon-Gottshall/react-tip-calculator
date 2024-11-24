import { useState } from 'react'

export default function TipCalculator () {

  const [mealCost, setMealCost] = useState(0)
  return (
    <>
    <img src='tip-1200.png' alt='tip' className='tip_image' />
      <h1 className='title'>Tip Calculator</h1>
      <div className='input_container'>
        <label htmlFor='mealCost'>Meal Cost</label>
        <input type='number' id='mealCost' onChange={(e) => setMealCost(e.target.value)}/>
      </div>

      {/* Tip Percentage Table */}
      {/* Columns: Rating, Tip, Amount */}
      <table className='tip_table'>
        <thead>
          <tr>
            <th className='rating'>Rating</th>
            <th className='tip'>Tip</th>
            <th className='amount'>Amount</th>
          </tr>
        </thead>
        <tbody className='table_content'>
          <tr>
            <td className='rating'>Poor</td>
            <td className='tip'>10%</td>
            <td className='amount'>{(mealCost * 0.10).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='rating'>OK</td>
            <td className='tip'>15%</td>
            <td className='amount'>{(mealCost * 0.15).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='rating'>Good</td>
            <td className='tip'>18%</td>
            <td className='amount'>{(mealCost * 0.18).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='rating'>Great</td>
            <td className='tip'>20%</td>
            <td className='amount'>{(mealCost * 0.20).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='rating'>Excellent</td>
            <td className='tip'>22%</td>
            <td className='amount'>{(mealCost * 0.22).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      </>
  )
}