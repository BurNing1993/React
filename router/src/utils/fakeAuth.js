const fakeAuth={
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated=true;
        setTimeout(cb,100);
    },
    signout(cb){
        this.authenticate=false;
        setTimeout(cb,100)
    }
}

export default fakeAuth;