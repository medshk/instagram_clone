import Image from "next/image";
import React from "react";
import pic from "../../assets/profilePic.jpg";

function Story() {
  return (
    <div>
      <Image src={pic} className="rounded-full w-14 h-14" alt="profile pic" />
    </div>
  );
}

export default Story;
