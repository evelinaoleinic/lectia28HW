const userUrl='https://jsonplaceholder.typicode.com/users'

const data = async()=>{
    const userList=document.getElementById('user-list')

    try{
        const backResponse = await fetch(userUrl)
        const response = await backResponse.json()
        response.forEach(user => {
            const li = document.createElement('li')
            li.textContent = `Nume: ${user.name}`
            userList.appendChild(li)
        })
    }catch(err){
        console.log(err)
    }
}
////////////////////////////////////////

///metoda some
Array.prototype.testSome=function(callback){
    for (let index =0; index<this.length;index++){
if(callback(this[index],index,this)){
    return true
}
    }
return false
}

//reduce some
//  return this.reduce((acc,curr,index,array)=>{
//     return acc===false ?callback(curr,index,array): true
//  }, false)


const arr2=[1,2,3,4,5].testSome((item,index)=>{
    return item >3
})
console.log(arr2)

///metoda every
Array.prototype.testEvery= function(callback){
    for(let index=0; index<this.length;index++){
        if (callback(this[index], index, this) === false) {
            return false;
    }
return true
}

}
//reduce every
// return this.reduce((acc,curr,index,array)=>{
//     return acc===true ? callback(curr,index,array):true
// },false)


const arr3=[1,2,3,4,5,6].testEvery((item,index)=>{
    return item > 5

})
console.log(arr3)
//metoda slice