document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const hShadowInput = document.getElementById("h-shadow");
    const vShadowInput = document.getElementById("v-shadow");
    const blurInput = document.getElementById("blur");
    const spreadInput = document.getElementById("spread");
    const colorInput = document.getElementById("color");
    const borderWidthInput = document.getElementById("border-width");
    const borderStyleInput = document.getElementById("border-style");
    const borderColorInput = document.getElementById("border-color");
    const boxWidthInput = document.getElementById("box-width");
    const boxHeightInput = document.getElementById("box-height");
    const borderRadiusInput = document.getElementById("border-radius");
    const textColorInput = document.getElementById("text-color");
    const boxTextBgColorInput = document.getElementById("box-text-bg-color");
    const textIndentInput = document.getElementById("text-indent");
    const textDecorationInput = document.getElementById("text-decoration");
    const boxPaddingInput = document.getElementById("box-padding");
  
    // Function to update box properties
    function updateBoxProperties() {
      const hShadow = hShadowInput.value + "px";
      const vShadow = vShadowInput.value + "px";
      const blur = blurInput.value + "px";
      const spread = spreadInput.value + "px";
      const color = colorInput.value;
  
      const borderWidth = borderWidthInput.value + "px";
      const borderStyle = borderStyleInput.value;
      const borderColor = borderColorInput.value;
  
      const width = boxWidthInput.value + "px";
      const height = boxHeightInput.value + "px";
  
      const borderRadius = borderRadiusInput.value + "px";
  
      const textColor = textColorInput.value;
      const boxTextBgColor = boxTextBgColorInput.value;
      const textIndent = textIndentInput.value + "px";
      const textDecoration = textDecorationInput.value;
      const boxPadding = boxPaddingInput.value + "px";
  
      // Update box styles
      box.style.boxShadow = `${hShadow} ${vShadow} ${blur} ${spread} ${color}`;
      box.style.border = `${borderWidth} ${borderStyle} ${borderColor}`;
      box.style.width = width;
      box.style.height = height;
      box.style.borderRadius = borderRadius;
      box.style.color = textColor;
      box.style.backgroundColor = boxTextBgColor;
      box.style.textIndent = textIndent;
      box.style.textDecoration = textDecoration;
      box.style.padding = boxPadding;
  
      // Update the displayed box properties
      document.querySelector(".box-properties-value").innerHTML = `
        box-shadow: ${hShadow} ${vShadow} ${blur} ${spread} ${color};<br>
        border: ${borderWidth} ${borderStyle} ${borderColor};<br>
        width: ${width};<br>
        height: ${height};<br>
        border-radius: ${borderRadius};<br>
        color: ${textColor};<br>
        background-color: ${boxTextBgColor};<br>
        text-indent: ${textIndent};<br>
        text-decoration: ${textDecoration};<br>
        padding: ${boxPadding};<br>
      `;
    }
  
    // Attach event listeners to input elements
    const inputElements = [
      hShadowInput,
      vShadowInput,
      blurInput,
      spreadInput,
      colorInput,
      borderWidthInput,
      borderStyleInput,
      borderColorInput,
      boxWidthInput,
      boxHeightInput,
      borderRadiusInput,
      textColorInput,
      boxTextBgColorInput,
      textIndentInput,
      textDecorationInput,
      boxPaddingInput,
    ];
  
    inputElements.forEach((input) => {
      input.addEventListener("input", updateBoxProperties);
    });
  
    // Initialize the box properties
    updateBoxProperties();
  });
  const copyButton = document.getElementById("copy-properties");
  const boxPropertiesValue = document.querySelector(
    ".box-properties-value"
  );

  copyButton.addEventListener("click", () => {
    // Create a textarea element to temporarily hold the text
    const textarea = document.createElement("textarea");
    textarea.value = boxPropertiesValue.innerText;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea
    document.body.removeChild(textarea);

    // Change the button text to "Copied"
    copyButton.innerText = "Copied";
  });