import React from 'react'
import woods from '../images/woods.jpg'
import education from '../images/education.png'

const Education = () => {
  return (
    <main className="relative">
      <img src={woods} alt="Woods" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">Education</h1>
            <br />
            <img
              src={education}
              className="justify-center object-none rounded mb-5"
              alt="Education"
            />
            <h2 className="text-lg text-white flex">
              APPACADEMY | REMOTE | 2020
            </h2>
            <h3 className="text-sm text-white mb-2">SOFTWARE ENGINEER</h3>
            <ul>
              <li className="list-disc text-white">
                AppAcademy is a 1000-hour immersive full-stack web development
                intensive with less than 3% acceptance rate
              </li>
              <li className="list-disc text-white mb-5">
                Emphasis on code quality, design patterns, TDD, and pair
                programming
              </li>
            </ul>
            <h2 className="text-lg text-white flex">
              INSTITUTO DE ESTUDIOS SUPERIORES DE ADMINISTRACION (IESA) |
              VENEZUELA | 2014 - 2016
            </h2>
            <h3 className="text-sm text-white mb-5">MSC. IN FINANCE</h3>
            <h2 className="text-lg text-white flex">
              UNIVERSIDAD CATOLICA ANDRES BELLO (UCAB) | VENEZUELA | 2006 - 2011
            </h2>
            <h3 className="text-sm text-white">
              BSC. IN BUSINESS ADMINISTRATION
            </h3>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Education
