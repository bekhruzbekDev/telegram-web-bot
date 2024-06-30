export const TotalPrice=(item)=>{
    let sum=item.reduce((a,c)=>a+c.price*c.quantity,0)
return Math.round(sum)
}