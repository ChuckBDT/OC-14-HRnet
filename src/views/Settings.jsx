import React, { useEffect } from "react";

function Settings() {
  useEffect(() => {
    document.title = "HRnet | Settings";
  }, []);

  return (
    <main className='bg-tertiary lg:ml-24'>
      <h1 className='text-center py-8 text-2xl font-bold text-primary'>
        Settings
      </h1>
    </main>
  );
}

export default Settings;
