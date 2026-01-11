import React from 'react'


type Props = {
    name: string
    username: string;
}

const Home = ({name, username}: Props) => {

    console.log(name, username);
  return (
    <div>
        {
            !username && <h2>Hey, there this username isn't valid</h2>
        }
    </div>
  )
}

export default Home