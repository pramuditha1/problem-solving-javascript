import React from 'react'

const ObjectMethods = () => {
    const person = {
        name: 'John',
        age: 30,
        skills: ['react', 'typescript', 'redux']
    }

    const keysPerson = Object.keys(person)

    function getObjectEntries(obj) {
        const keysPerson = Object.keys(obj);

        const objectEntries = keysPerson.map((keyItem) => {
            //return an array of each key in the object
            return[keyItem, obj[keyItem]];
        })

        //return the object entries as an array, map function returned array
        return objectEntries;
    }

    const entries =getObjectEntries(person);
    console.log(entries);

  return (
    <div>ObjectMethods

        {
            //use javascript object.entries method
            // console.log(Object.entries(person))

            // console.log(keysPerson)
        }
    </div>
  )
}

export default ObjectMethods