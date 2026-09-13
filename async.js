// 1. File Upload
//    Create: uploadFile(fileName, callback)
//    Simulate a file upload that takes 5 seconds.
//    While uploading:
//    Uploading profile.jpg...
//    You can continue using the application.
//    After uploading:
//    File uploaded successfully!
//    Then the callback should display:
//    Updating profile...

function uploadFile(fileName, callback){
    callback()
}

// 2. OTP Verification
    // Create: sendOTP(phoneNumber, callback)
    // Requirements:
    // Print "Sending OTP to 9876543210..."
    // Wait 3 seconds.
    // Generate a random 4-digit OTP.
    // Print "OTP sent successfully!"
    // Pass the generated OTP to the callback.
    // Then create:
    // verifyOTP(otp)
    // which prints:
    // OTP received: 4832
    // Please enter the OTP to continue.
    // Additional requirement
    // While the OTP is being sent:
    // You can continue browsing the website...
    // should be printed immediately.

function sendOTP(phoneNumber,callback){
    console.log(`Sending OTP to ${phoneNumber}`);
    let otp = Math.floor(Math.random()*10000);
    setTimeout(()=>{console.log("OPT sent successfully");
        callback(otp)},3000);
    console.log("You can browse the application");
}

function verifyOTP(opt){
    console.log(`OTP received : ${opt}`);
}

sendOTP(9876543210,verifyOTP);