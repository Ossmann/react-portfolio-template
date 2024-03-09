// New Subpage for the Privacy Policy of SearchLight App

import "../styles/globals.css";
import Image from 'next/image';
import { ThemeProvider } from "next-themes";

const NewSubpage = () => {
    const imageSrc = "/images/SearchLight_icon.jpg"; // Provide the correct path to your image
  
    return (
      <div>
        <Image src={imageSrc} alt="App Icon" className="app-icon" />
        <h3>Privacy Policy</h3>
        <p>
          Thank you for considering using the application named &quot;SearchLight&quot;.
          The app does not collect or access remotely any form of data.
        </p>
        <p>
          Data that is processed to generate customized investment ideas for the user, is stored only on the user&apos;s device and will be automatically deleted when the user chooses to remove the application.
        </p>
        <p>
          Should the app be updated to include any form of data collection, users will be informed and the privacy policy here updated.
        </p>
        <p>
          Responsible for the data of this app is Mr. Jakob Ossmann. Contact via office@softwaresuccess.com.au.
        </p>
      </div>
    );
};

export default NewSubpage;
