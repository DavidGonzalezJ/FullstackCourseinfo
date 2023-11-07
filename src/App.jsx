const Header = ({course}) => {
  //console.log(props.course.name)
  return(
    <>
      <h2>{course.name}</h2>
    </>
  )
}

const Part = ({part}) => {
  //console.log(props.part.exercises);
  return(
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Content = ({course}) => {
  return(
    <>
      {course.parts.map((part)=>
        <Part key={part.id} part = {part} />
      )}
    </>
  ) 

}

const Total = ({course}) => {
  //Reduce loop for getting the total
  let totalExercises = course.parts.reduce((sum,part)=>
    sum + part.exercises,0)

  return(
    <>
      <h3>Number of exercises {totalExercises}</h3>
    </>
  )
}

const Course = ({course}) => {
  return(
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

const CourseList = ({list}) => {
  return(
    <>
      <h1>Web development curriculum</h1>
      {list.map((course)=>
        <Course key={course.id} course= {course}/>
      )}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 15,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'New section',
      id: 3,
      parts: [
        {
          name: 'Continue',
          exercises: 9,
          id: 1
        },
        {
          name: 'Coding',
          exercises: 4,
          id: 2
        }
      ]
    }
  ]

  return <CourseList list={courses} />
}

export default App