import React from 'react'

const page = () => {
  return (
    <div>
      About Page
      <Button color="primary" onClick={throwError()}>
        Error Button
      </Button>
    </div>
  )
}

export default page
