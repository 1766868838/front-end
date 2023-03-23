async function a(){  
    console.log("1")  
     console.log("2")
  }
  a()
  console.log("3")
  //打印： 1 2 3 
  
  async function a1(){  
    await 1  
    console.log("4")  
    console.log("5")
  }
  a1()
  console.log("6")
  //打印：6 5 4