export default function SelectComponent({data, isGender}){

  return (
    <>
  
      {isGender ? (
        //radio buttons
        data.map((item) => (
          <div key={item.value}>
            <input id={item.label} type="radio" />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))
      ) : (
        //select
        <select required={true}>
          {data.map((item) => (
            <option key={item.value}>{item.label}</option>
          ))}
        </select>
      )}
    </>
  )
}