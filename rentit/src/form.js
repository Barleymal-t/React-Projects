function Form(){
    return  <div className='col span-1-of-2 right'>
    <form action="">
            <input type="text" placeholder="Username/Email"/>
            <input type="text" placeholder="Password"/>
            <input type="submit" value="Login"></input>
            <p>Forgot Password <a href="facebook.com">Sign Up</a></p>
</form>
    </div>
}

export default Form;