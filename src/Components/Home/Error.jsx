import React from 'react'
import { Alert} from 'antd';
const Error = () => {
  return (
    <Alert
    message="Error"
    description="This is an error message about wrong URL."
    type="error"
    showIcon
  />
  )
}

export default Error