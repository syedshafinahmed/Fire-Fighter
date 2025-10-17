import React from 'react';

const MyLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => isActive ? 'text-purple-500' : `${className} font-semibold`}>
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;