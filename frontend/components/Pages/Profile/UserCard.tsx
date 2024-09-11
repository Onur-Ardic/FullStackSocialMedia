import React from 'react'

const UserCard = () => {
  return (
    <div className="user-profile-card flex justify-around items-center border p-10">
      <div className="user-card-left w-[200px] h-[200px]">
        <img src="https://via.placeholder.com/200" alt="Profile Picture" className="w-full" />
      </div>

      <div className="user-card-right flex flex-col gap-4">
        <div className="username">Onur Ardıç</div>
        <div className="email">onurardc@outlook.com</div>
      </div>
    </div>
  )
}

export default UserCard
