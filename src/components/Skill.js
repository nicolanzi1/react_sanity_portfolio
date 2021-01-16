import React from 'react'
import woods from '../images/woods.jpg'
import skills from '../images/skills.png'

const Skill = () => {
  return (
    <main className="relative">
      <img src={woods} alt="Woods" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              These are some of my{' '}
              <span className="text-green-100">Skills</span>
            </h1>
            <br />
            <p className="text-white">
              They include (but are not limited to): JavaScript, React, Redux,
              Flux, Jest, Mongoose, MongoDB, Node.js, Yarn, Express.js, Ruby,
              Ruby on Rails, RSpec, SQL, SQLite3, PostgreSQL, Webpack, jQuery,
              AJAX, Git, HTML5, CSS3, Sass, Bootstrap, Heroku, Google Firebase
              and AWS.
            </p>
            <br />
            <img
              src={skills}
              className="object-none rounded justify-center"
              alt="Skills"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Skill
