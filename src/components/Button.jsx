
const Button = ({ color, text, bgColor, borderRadius, size }) => {
  return (
    <button style={{
      backgroundColor: bgColor, color, borderRadius
    }}
      type='button'
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button
