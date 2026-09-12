// import profileImg from './assets/profile.jpg';


function ProfilePicture()
{
    const imageURL = './src/assets/profile.png';

    const handleClick  = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageURL} alt="profileho"></img>);
}

export default ProfilePicture