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

const Total = (props) => {
  let totalExercises = 0;

  props.course.parts.forEach(value =>{ 
    // console.log(value.exercises);
    totalExercises+=value.exercises; })

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
      }
    ]
  }

  return <Course course={course} />
}

export default App