import { useEffect } from "react";

export default function WidgetWrapper() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d16hu9b8od5tjo.cloudfront.net/main.js";
    script.async = true;
    script.id = "test-widget-script-id";
    document.body.appendChild(script);

    return () => {
      const script = document.getElementById("test-widget-script-id");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="test-widget" style={{ width: "400px" }}></div>;
}
