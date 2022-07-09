import React from 'react'
import CloseButton from '../../CloseButton'

import { feedbackTypes, FeedbackType } from '..'

interface FeedbackTypeProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">
          Deixe seu feedback
        </span>
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button 
            className="bg-zinc-800 w-24 h-28 rounded-lg py-5 flex-1 flex flex-col items-center gap-2 border-2 border-transparent 
            hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
            key={key}
          >
            <img src={value.image.src} alt={value.image.alt} />
            <span className="text-[#f4f4f5] mt-2">{value.title}</span>
          </button>
        ))}
      </div>
    </>
    
  )
}

export default FeedbackTypeStep