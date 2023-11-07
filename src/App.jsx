const Header = ({course}) => {
  //console.log(props.course.name)
  return(
    <>
      <h1>{course.name}</h1>
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
      <p>Number of exercises {totalExercises}</p>
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
        exercises: 14,
        id: 3
      },
      {
        name: 'A very hard part',
        exercises: 42,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App