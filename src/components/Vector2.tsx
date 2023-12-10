

import React, { useEffect } from 'react';

interface DataType {
  AboutDevTypeText: string;
}

const Vector2: React.FC = () => {
  useEffect(() => {
    var data: DataType[] = [
      {
        AboutDevTypeText:
          "<span>About Dev Quest<br/><br/>Do you want to go on an epic quest to uncover the magic of coding? Seize the chance to learn about web development and get a scholarship or an internship.</span><br/><br/><br/><span>Are you a developer?<br/> Y / N</span><br/>",
      },
    ];

    var allElements = document.getElementsByClassName('typeing');
    for (var j = 0; j < allElements.length; j++) {
      var currentElementId = allElements[j].id;
      var currentElementIdContent = (data[0] as any)[currentElementId]; 
      var element = document.getElementById(currentElementId);

      if (element) {
        var devTypeText = currentElementIdContent;

        
        var i = 0,
          isTag,
          text;
        (function type() {
          text = devTypeText.slice(0, ++i);
          if (text === devTypeText) return;
          element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
          var char = text.slice(-1);
          if (char === '<') isTag = true;
          if (char === '>') isTag = false;
          if (isTag) return type();
          setTimeout(type, 60);
        })();
      }
    }
  }, []); 

  return (
    <>
      <span id="AboutDevTypeText" className="typeing"></span>
      <span className='blinker'>&#32;</span>
    </>
  );
};

export default Vector2;
