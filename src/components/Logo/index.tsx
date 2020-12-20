import React from 'react'

const Logo = ({ className }: any) => {
   return (
      <div className={`text-2xl sm:text-4xl font-bold ${className}`}>
         <span>
            <span role="img" aria-label="chick">🐣</span>
            {' '}Hatchy
                     <span className="text-xs font-thin tracking-widest ml-1">Beta</span>
         </span>
      </div>
   )
}

export default Logo