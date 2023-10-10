import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the location icon
import './Body.css';

const Body = () => {
    const [username, setUsername] = useState(''); // State to store the GitHub username
    const [userData, setUserData] = useState(null); // State to store the user data
    const [error, setError] = useState(null); // State to handle errors

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const gitfinder = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(response.data);
            setError(null);
            setUsername(''); // Clear the input field

        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
            setUserData(null);
        }
    }

    return (
        <>
            <div>
                <form onSubmit={gitfinder} className='body-container'>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            type="text"
                            placeholder='Enter GitHub Username'
                            className="search-input"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            value={username}
                        />
                    </div>
                    <button type='submit' className="search-button">
                        Search
                    </button>
                </form>
            </div>

            {/* Display user data if available */}
            {userData && (
                <div className='body-container-2'>
                    <div className='bodyNestedImg'>
                        <img className='userdataimg' src={userData.avatar_url} alt="User Avatar" />
                    </div>
                    <div className='bodynestedformat'>
                        <div className='userdataheading'>
                            <h1>{userData.name || 'N/A'}</h1>
                            <h3 style={{ marginTop: '10px' }}>Joined At : {formatDate(userData.created_at)}</h3>
                        </div>
                        <h4 className='username'>Username : {userData.login}</h4>
                        <p className='userBio'>{userData.bio} </p>
                        <div className='userdatafollowing'>
                            <p>Followers <br /> {userData.followers}</p>
                            <p>Following <br /> {userData.following}</p>
                            <p>Public Repositories <br /> {userData.public_repos}</p>
                        </div>
                        <div className='userlocation' style={{ display: 'flex', color: "#fff", margin: "20px 20px", justifyContent: "space-between", alignItems: 'center', marginTop: '10px' }}>

                            <h3><FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> Location : {userData.location || 'N/A'}</h3>
                            <div>
                                <a style={{ color: "#fff", textDecoration: "none", }} href={userData.blog}>{userData.blog}</a>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            {/* Display error message if there's an error */}
            {error && (
                <div className='body-container-2'>
                    <p className="error-message">{error}</p>
                </div>
            )}
        </>
    );
}

export default Body;
