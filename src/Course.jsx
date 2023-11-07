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

export default Course