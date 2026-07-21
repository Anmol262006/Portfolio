import React from 'react'

const platformLogo = ({Logo , url}) => {
  return (
   <a href={url} target='_blank'  rel="noopener noreferrer" className="border-2 border-purple-700 rounded-full p-2">
       {Logo}
     </a>
  )
}

export default platformLogo;
