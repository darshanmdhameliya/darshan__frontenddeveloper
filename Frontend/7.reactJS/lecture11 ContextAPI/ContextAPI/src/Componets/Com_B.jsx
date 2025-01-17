import React from 'react'
import { data1, data2 } from './main'

import { useContext } from 'react'

const Com_B = () => {

  const a = useContext(data1)
  const b = useContext(data2)


  return (
    <div>
      <h1 className='bg-lime-200 font-bold text-center p-5 my-5'>This is compents B {a} {b} </h1>


      {/* {
        <data1.Consumer>
          {
            (name) => {
              return (
                <>
                  {
                    <data2.Consumer>
                      {
                        (surname) => {
                          return (
                            <>
                              <h1 className='bg-lime-200 font-bold text-center p-5 my-5'>This is compents B {name} {surname} </h1>
                            </>
                          )
                        }
                      }
                    </data2.Consumer>
                  }
                </>
              )
            }
          }
        </data1.Consumer>
      } */}

    </div>
  )
}

export default Com_B
