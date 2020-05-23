import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
class Main extends Component {
 constructor() {
 super()
 this.state = {
 posts: [{
 id: 0,
 description: "Lion Roar ",
 imageLink: "https://i.pinimg.com/originals/62/b3/0a/62b30a6ae471c0e0132a89a3d238e971.jpg"
 }, {
 id: 1,
 description: "Chill Winter !!",
 imageLink: "https://20trendingwallpapers.com/wp-content/uploads/2019/06/Up7lYzU-1024x576.jpg"
 }, {
 id: 2,
 description: "Flower Garden",
 imageLink: "https://www.socwall.com/images/wallpapers/71932-1920x1080.jpg"
 }]
 }
 this.removePhoto = this.removePhoto.bind(this)
 }
 removePhoto(postRemoved) {
 console.log(postRemoved.description)
 this.setState((state) => ({
 posts: state.posts.filter(post => post !== postRemoved )
 }))
 }
 addPhoto(postSubmitted) {
 this.setState(state => ({
 posts: state.posts.concat([postSubmitted])
 }))
 }
 componentDidMount() {
 }
 
 componentDidUpdate(prevProps, prevState) {
 console.log(prevState.posts)
 console.log(this.state)
 }
 render() {
 console.log(this.state.posts)
 return ( 
 
 <div>
 <Route exact path = "/" render={() => (
 <div>
 <Title title={'My Memories'}/>
 <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
 </div>
 )}/> 
 <Route path= "/AddPhoto" render = {({history}) => (
 <AddPhoto onAddPhoto={(addedPost) => {
 this.addPhoto(addedPost)
 history.push('/')
 }}/>
 )}/>
 </div>
 )
 }
}
export default Main