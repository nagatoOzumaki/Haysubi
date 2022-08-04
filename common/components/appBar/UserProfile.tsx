import { PersonPinCircleOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';

function UserProfile() {
  const { getUserData }: any = {};
  const userData = getUserData('userData');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleAvatarClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  // console.log("Avatar Dropped", isDropdownOpen);

  return (
    <div className="user-profile">
      <div className="login-icon" onClick={handleAvatarClick}>
        <PersonPinCircleOutlined />
        <p>{userData.userName}</p>
      </div>
      {isDropdownOpen && (
        <div className="user-avatar">
          <Link href="/orders">
            <p>Orders</p>
          </Link>
          <Link href="/wishlist">
            <p>Wishlist</p>
          </Link>
          <p>Gift Cards</p>
          <p>Contact Us</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
