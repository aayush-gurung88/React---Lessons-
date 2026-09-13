import UserGreeting from "./UserGreeting4";

function App ()
{
    return(
        <>
        {/* <UserGreeting isLoggedIn = {false} username  = "Harryboss"/> */}
        <UserGreeting isLoggedIn = {true} />
        </>
    );

}
export default App