// props =     short for properties 
//         readonly properties that are shared betwn componets 
//         a parent componet can send data to a child component 
//         <Component key=Value />

import Student from "./Student";


function App()
{
    return(
        <>
        <Student name ="Thanos" age ={30} isStudent={false}/>
        <Student name ="ram" age ={90} isStudent={true}/>
        <Student name ="son" age ={79} isStudent={false}/>
        {/* // so if I add thirty instead of 33 in age then (error is seen in console of the browser) */}
                <Student name ="hung" age ={33} isStudent={true}/>

        {/* this value is used to test the default props */}
        <Student name = "Harry" />
        </>
    );
}
export default App