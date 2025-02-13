'use client'

const Checkbox = ({checked}) => {
  return (
    <div>
      <input type="checkbox" checked={checked} className="w-5" onChange={(e) => e.target.form.requestSubmit()}/>
    </div>
  )
}

export default Checkbox
