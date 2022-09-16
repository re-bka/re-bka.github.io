function anteprimaFile(evt) {
	var file = evt.target.files;
	var f = file[0];
	if (!f.type.match('image.*')) {
		alert("Attenzione: il file selezionato deve essere una immagine");
		return false;
	}

	var reader = new FileReader();

	reader.onload = (function(theFile) {
		return function(e) {
		  document.getElementById('output').innerHTML = '<img class="thumb" title="'+escape(theFile.name)+'" src="'+e.target.result+'" />';
		};
	})(f);

	reader.readAsDataURL(f);
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('myfile').value='';
	document.getElementById('output').value='';
	document.getElementById('myfile').addEventListener('change', anteprimaFile, false);
});


showSol9 = function () {
    input = document.querySelector('.cat-img1 input');
    input.style.display = 'none';
    dark = document.querySelector('.dark-session');
    dark.style.display = 'block';

    input = document.querySelector('.cat-img2 input');
    input.style.display = 'none';
    dark = document.querySelector('.dark-session1');
    dark.style.display = 'block';

    input = document.querySelector('.cat-img3 input');
    input.style.display = 'none';
    dark = document.querySelector('.dark-session2');
    dark.style.display = 'block';

    bottone = document.querySelector('.verifica .ghost');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';

    text = document.querySelector('.cat-img1 h4');
    text.style.display = 'none';
    text1 = document.querySelector('.cat-img2 h4');
    text1.style.display = 'none';
    text2 = document.querySelector('.cat-img3 h4');
    text2.style.display = 'none';

    riquadro1 = document.querySelector('.cat-img1');
    riquadro1.style.backgroundImage = 'none';

    riquadro2 = document.querySelector('.cat-img2');
    riquadro2.style.backgroundImage = 'none';

    riquadro3 = document.querySelector('.cat-img3');
    riquadro3.style.backgroundImage = 'none';
}

hideSol9 = function () {
    input = document.querySelector(".cat-img1 input");
    input.style.display = 'block';
    dark = document.querySelector(".dark-session");
    dark.style.display = 'none';
    input.value = '';

    input = document.querySelector(".cat-img2 input");
    input.style.display = 'block';
    dark = document.querySelector(".dark-session1");
    dark.style.display = 'none';
    input.value = '';

    input = document.querySelector(".cat-img3 input");
    input.style.display = 'block';
    dark = document.querySelector(".dark-session2");
    dark.style.display = 'none';
    input.value = '';

    bottone = document.querySelector(".verifica .ghost");
    bottone.style.display = 'block';
    bottone1 = document.querySelector(".verifica .ghost1");
    bottone1.style.display = 'none';

    text = document.querySelector(".cat-img1 h4");
    text.style.display = "block";
    text1 = document.querySelector(".cat-img2 h4");
    text1.style.display = "block";
    text2 = document.querySelector(".cat-img3 h4");
    text2.style.display = "block";

}

selectCat = function () {
    opzione1 = document.querySelector('.prima');
    opzione1.classList.add('prima1');

    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat1 = function () {
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.add('seconda1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat3 = function () {
    opzione3 = document.querySelector('.terza');
    opzione3.classList.add('terza1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
}


selectCat = function () {
    opzione1 = document.querySelector('.prima');
    opzione1.classList.add('prima1');

    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat1 = function () {
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.add('seconda1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat3 = function () {
    opzione3 = document.querySelector('.terza');
    opzione3.classList.add('terza1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
}

changeColorInput = function () {
    code = document.querySelector('#input-text-color').value;
    code1 = document.querySelector('#input-text-color1').value;
    input = document.querySelector('#input-text');
    input1 = document.querySelector('#input-background');
    input.value = code;
    input1.value = code1;
    handleColorChange();
  }
  
  
  const WCAG_MINIMUM_RATIOS = [
      ['AA Large', 3],
      ['AA', 4.5],
      ['AAA', 7],
  ]
  
  
  let container = document.querySelector('.container1')
  let statusText = document.getElementById('status-text')
  let statusRatio = document.getElementById('status-ratio')
  let statusLevel = document.getElementById('status-level')
  let textColorInput = document.getElementById('input-text')
  let bgColorInput = document.getElementById('input-background')
  let livelloContrasto = document.getElementById('livello-contrasto')
  
  /* Attach the event listener */
  textColorInput.addEventListener('input', handleColorChange)
  bgColorInput.addEventListener('input', handleColorChange)
  
  /* Fire the listener once to initialize the app */
  handleColorChange()
  
  
  function handleColorChange() {
      let textColor = textColorInput.value
      let bgColor = bgColorInput.value
  
      container.style.color = textColor
      container.style.backgroundColor = bgColor
  
      let ratio = checkContrast(textColor, bgColor)
      let { didPass, maxLevel } = meetsMinimumRequirements(ratio)
  
      statusText.classList.toggle('is-pass', didPass)
      statusRatio.innerText = formatRatio(ratio)
      statusLevel.innerText = didPass ? maxLevel : 'Fail'
    if (ratio < 3) {
     statusRatio.style.backgroundColor = 'red';
     statusRatio.style.color = 'white';
     livelloContrasto.innerText = 'SCARSO'
    } else if (ratio < 4.5) {
     statusRatio.style.backgroundColor = 'orange';
     livelloContrasto.innerText = 'BUONO'
    } else {
      statusRatio.style.backgroundColor = "green";
      statusRatio.style.color = 'white';
      livelloContrasto.innerText = 'OTTIMO'
    }
  }
  
  
  function luminance(r, g, b) {
      let [lumR, lumG, lumB] = [r, g, b].map(component => {
          let proportion = component / 255;
  
          return proportion <= 0.03928
              ? proportion / 12.92
              : Math.pow((proportion + 0.055) / 1.055, 2.4);
      });
  
      return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
  }
  
  function contrastRatio(luminance1, luminance2) {
      let lighterLum = Math.max(luminance1, luminance2);
      let darkerLum = Math.min(luminance1, luminance2);
  
      return (lighterLum + 0.05) / (darkerLum + 0.05);
  }
  
  
  function checkContrast(color1, color2) {
      let [luminance1, luminance2] = [color1, color2].map(color => {
          /* Remove the leading hash sign if it exists */
          color = color.startsWith("#") ? color.slice(1) : color;
  
          let r = parseInt(color.slice(0, 2), 16);
          let g = parseInt(color.slice(2, 4), 16);
          let b = parseInt(color.slice(4, 6), 16);
  
          return luminance(r, g, b);
      });
  
      return contrastRatio(luminance1, luminance2);
  }
  
  
  function formatRatio(ratio) {
      let ratioAsFloat = ratio.toFixed(2)
      let isInteger = Number.isInteger(parseFloat(ratioAsFloat))
      return `${isInteger ? Math.floor(ratio) : ratioAsFloat}:1`
  }
  
  
  function meetsMinimumRequirements(ratio) {
      let didPass = false
      let maxLevel = null
  
      for (const [level, minRatio] of WCAG_MINIMUM_RATIOS) {
          if (ratio < minRatio) break
  
          didPass = true
          maxLevel = level
      }
  
      return { didPass, maxLevel }
  }
