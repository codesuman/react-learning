import Student from "./components/student/Student";

function App() {
  return(
    <>
      <Student name="Spongebob" age={25} isStudent={true}/>
      <Student name="Patrick" age={35} isStudent={false} />
      <Student name="Sandy" age={20} isStudent={true}/>
      <Student />
    </>
  );
}

export default App
