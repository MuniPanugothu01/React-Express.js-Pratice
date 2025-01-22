import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({ name: "", age: "" });

  const updateName = (e) => setProfile({ ...profile, name: e.target.value });
  const updateAge = (e) => setProfile({ ...profile, age: e.target.value });

  return (
    <div>
      <input
        type="text"
        value={profile.name}
        onChange={updateName}
        placeholder="Enter name"
      />
      <input
        type="number"
        value={profile.age}
        onChange={updateAge}
        placeholder="Enter age"
      />
      <p>
        Name: {profile.name}, Age: {profile.age}
      </p>
    </div>
  );
}

export default Profile;
