import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import "./Directory.styles.scss"

const Directory = ({categories}) => {
  return (
    <div className="directory-container">      
      {
        categories.map((category) => (
          <CategoryItem category={category} key={category.id}  />
        ))
      }    
    </div>
  )
}

export default Directory