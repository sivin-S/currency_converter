import { useId } from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    currencyDisabled=false,
    amountDisabled=false,
    className=''
}) {
    const id= useId()
 
  return (
    <div className={`border font-medium p-6 flex w-[38rem] h-[8rem] rounded-xl ${className}`}>
      
      <div className="w-1/2  h-full gap-5  flex justify-center flex-col ">
        <label htmlFor={id} >{label}</label>
        <input disabled={amountDisabled}
         placeholder="Amount"
         onChange={(e)=>onAmountChange&&onAmountChange(e.target.value)}
        className="p-2" min={0}  type="number"  id={id}/>
      </div>
      <div  className="w-1/2  h-full gap-5  flex items-end justify-center flex-col">
        <label htmlFor={id}>{'Currency Type'}</label>
        <select 
        disabled={currencyDisabled} 
        value={selectedCurrency} 
        className="w-1/3 p-2" 
        id={id}
        onChange={(e)=>{
            onCurrencyChange&&onCurrencyChange(e.target.value)
        }}
         >
            {currencyOptions.map((currency)=>(
              <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
      </div> 
    </div>
  )
}

export default InputBox