import { useId } from "react"; // do not use useId to make keys in loop (react recommended)

function InputBox({
    label,
    amount,
    onAmountChange,  //calculate currency when amount changed
    onCurrencyChange, // change the currecy of drop down list of currency name
    currencyOptions = [], // list out all the currenccies
    selectCurrecy = "usd", // currecy which user selected from list
    amountDisable = false, //user can change amount
    currencyDisable = false, // user can change currency
    className = "",
}) {
   
    const amountInputId = useId(); //generate unique id which can be used for accessibility attribute 
                                   // that means the attribute which we used to access using tab
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Number conversion is imp becaluse e.target take input as a string 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrecy}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
