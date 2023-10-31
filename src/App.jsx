const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  //console.log(props.part.exercises);
  return(
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  ///////////This is the component made with a foreach loop/////////////

  // const contents = [];

  // props.parts.forEach(value =>
  //   contents.push(<Part part={value.name} exercises={value.exercises}/>)
  // )
  
  // return (
  //   <>
  //     {contents}
  //   </>
  // );

  ///////////This is the component made with a map loop/////////////
  return(
    <>
      {props.parts.map((value)=>
        <Part part = {value} />
      )}
    </>
  )

}

const Total = (props) => {
  let totalExercises = 0;

  props.parts.forEach(value =>{ 
    // console.log(value.exercises);
    totalExercises+=value.exercises; })

  return(
    <>
      <p>Number of exercises {totalExercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>

      <Content parts = {parts} />

      <Total parts={parts}/>
    </div>
  )
}

export default App