const config = {
    server: {
        path: 'https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/',
        port: ''
    },
    api: {
        login: 'login',
        signUp: 'signup',
        
        // getOtp: '/user/sendotp',
        // verifyOtp: '/user/verify?phoneNumber',
        // forgotpassword : '/forgotpassword',

        uploadMedia: 'upload',
        handlePost: 'postHandle',
        getApprovedPhotos: 'getApprovedPhotos',
        getPendingPhotos: 'getPendingPhotos',
        updatePostStatus: 'updatePostStatus'
    }
}
export default config

