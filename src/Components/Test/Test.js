            import React, { useState } from 'react';

            const Test = () => {
                const [count, setCount] = useState(0);
// /এই কোড টাকে ছোট করে বসাতে পারছি
/*
                const plus = ()=>{
                    setCount(count +1);
                }
 */
// কিন্তু নিচের কোড টাকে ছোট করতে পারছি না দয়া করে কেউ  আমাকে সাহায্য করেন।
               
const minus = ()=>{
                    if(count<=0){
                        setCount(0);
                    }else{
                        setCount(count-1);
                    }   
                }

                return (
                    <div>
                        <h2>Count : {count} </h2>
                        <button onClick={()=>setCount(count+1)}  className='btn btn-warning p-3 ms-3' > +</button>
{/*                         
                        এখানে অন ক্লিক বসাতে হচ্ছে
                এখানেও এনোনিমাস ফাংশন দিতে চাচ্ছিলাম। */}
                        <button onClick={minus} className='btn btn-warning p-3 ms-3' > -</button>
                    </div>
                );
            };
            export default Test;