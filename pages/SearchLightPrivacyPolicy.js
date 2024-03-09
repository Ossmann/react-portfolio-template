// New Subpage for the Privacy Policy of SearchLight App

import { ThemeProvider } from "next-themes";
import Image from 'next/image';


const SearchLightPrivacyPolicy = () => {
    const imageSrc = "/images/SearchLight_icon.png"; // Provide the correct path to your image
  
    return (
      <ThemeProvider>
        <div style={{ position: 'relative' }}>
          <div className="app-icon">
            <Image src={imageSrc} alt="App Icon" width={40} height={40} />
          </div>
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
      </ThemeProvider>
    );
};

export default SearchLightPrivacyPolicy;


