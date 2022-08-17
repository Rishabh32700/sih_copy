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
        updatePostStatus: 'updatePostStatus',
        getPendingVideos:'getPendingVideos',
        getApprovedVideos:'getApprovedVideos',
        getCountOfApprovedPhotos:'getCountOfApprovedPhotos',
        getCountOfApprovedVideos:'getCountOfApprovedVideos',
        getPendingResearchWork:'getPendingResearchWork',
        getApprovedResearchWork:'getApprovedResearchWork',
        getUserDetails:'getUserDetails',
        getVideosForUserId:'getVideosForUserId',
        getPhotosForUserId:'getPhotosForUserId',
        getResearchWorkForUserId:'getResearchWorkForUserId',



    },
    role:{
        admin:'admin/'
    }
}
export default config

