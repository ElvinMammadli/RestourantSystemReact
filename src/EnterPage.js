import React from 'react';





const  Enter = props =>{
    const { history } = props;
    const { push } = history;
    const onClickUser= async event => { push('/UserLogin');}
    const onClickRestourant= async event => { push('/RestourantLogin');}


    return (
        <div>
                     <button onClick={onClickUser}  >User Login</button>
                     <button onClick={onClickRestourant}  >Resoturant Login</button>
        </div>
    )
}

export default Enter;