

const Button = ({handleSubit,class_name}) => {
  return (
    <div>
      <button onClick={handleSubit} className={class_name}></button>
    </div>
  )
}

export default Button
