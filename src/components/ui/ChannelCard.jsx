import React from 'react'

const ChannelCard = ({Icon , ChannelName , ChannelId , Icon2}) => {
  return (
    
          <div class="flex items-center gap-4 w-full max-w-sm p-4 border border-purple-950 rounded-2xl bg-white">
    
          <div class="flex items-center justify-center p-3 border border-purple-900 rounded-full bg-purple-50 shrink-0">
           {Icon}
        </div>
      
    
      <div class="flex flex-col min-w-0 flex-1">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">{ChannelName}</h3>
        <p class="text-base font-medium text-purple-900 truncate">{ChannelId}</p>
      </div>
      
    
      <button class="p-2 text-gray-700 hover:text-purple-900 hover:bg-purple-50 rounded-lg transition-colors shrink-0" aria-label="Copy email">
       {Icon2}
      </button>
    </div>
  )
}

export default ChannelCard
