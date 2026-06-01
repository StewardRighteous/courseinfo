const Header = (props) => {
  return <h1>{props.headerName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  console.log(props);
  let totalExercises = 0;
  props.parts.forEach(
    (part) => (totalExercises = totalExercises + part.exercises),
  );
  return <p>Number of Exercises {totalExercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack Application Devlopment",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using Props to pass data",
        exercises: 7,
      },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header headerName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
