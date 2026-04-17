let launchURL = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("open browser and launch url");
        resolve("Resolve message---Successfully launch browser")
        reject("Reject message---Unable to launch browser")
    },3000)
})

launchURL.then(resolvedLaunchMsg=>{
    console.log(resolvedLaunchMsg);
    let selectElement = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("identify element and select");
            resolve("Resolve message---element found")
            reject("Reject message---element not found")
        }, 2000);
    })
    selectElement.then(resolveSelectElemetMsg=>{
        console.log(resolveSelectElemetMsg);
        let closeBrowser = new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("close browser");
                resolve("Resolve message---Successfully closed")
                reject("Reject message---not able to close the browser")
            }, 1000);
        })
        closeBrowser.then(resolvedCloseBrowserMsg=>{
            console.log(resolvedCloseBrowserMsg);
        }).catch(rejectCloseBrowserMsg=>{
            console.log(rejectCloseBrowserMsg);
        })
    }).catch(rejectSelectElementMsg=>{
        console.log(rejectSelectElementMsg);
    })
}).catch(rejectLaunchMsg=>{
    console.log(rejectLaunchMsg);
})




