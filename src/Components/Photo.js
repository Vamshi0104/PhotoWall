import React from 'react';
import PropTypes from 'prop-types'
function Photo(props) {
 const post = props.post
 return <figure className="figure"> 
 <img className= "photo" src={post.imageLink} alt={post.description} />
 <figcaption> <h2> {post.description} </h2> </figcaption>
 <div className = "button-container">
 <button title="DELETE POST" onClick = {() => {
 props.onRemovePhoto(post)
 }}> Remove Post </button>
 </div>
 </figure>
}
Photo.propTypes = {
 post: PropTypes.object.isRequired,
 onRemovePhoto: PropTypes.func.isRequired
}
export default Photo