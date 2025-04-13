const ProfilePic = () => {
    const imageUrl = './src/assets/logo.svg';
    const imageClickHandler = () => {console.log('Image clicked')}

    return(
        <img src={imageUrl} onClick={imageClickHandler}></img>
    );
};

export default ProfilePic;