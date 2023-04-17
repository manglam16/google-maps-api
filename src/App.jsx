import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [cityName, setCityName] = useState("Shikohabad");

  function handleClick() {
    setCityName(inputText);
    console.log(cityName);
  }
  var url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAJXQPIUvMgitpBpr93rEtzX8_PZYh-zQ8&q=${cityName}`;

  return (
    <div className="App">
      <input
        type="enter city"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={handleClick}> search for maps</button>
      <iframe
        style={{ width: "600px", height: "450px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={url}
      ></iframe>
    </div>
  );
}

export default App;
