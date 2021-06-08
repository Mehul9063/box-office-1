import React from 'react'
import PeopleCard from './PeopleCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const PeopleGrid = ({ data }) => {
  return (
    <div>
    {
      data.map (({ person })=> (
        <PeopleCard 
          key={person.id} 
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          summary={person.summary}
        /> 
      ))
    }
    </div>
  )
}

export default PeopleGrid
