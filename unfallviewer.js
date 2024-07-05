
var UART_map = { '0': 'Unfall anderer Art',
'1': 'Zusammenstoß mit anderem Fahrzeug, das anfährt, anhält oder im ruhenden Verkehr steht',
'2': 'Zusammenstoß mit anderem Fahrzeug, das vorausfährt oder wartet',
'3': 'Zusammenstoß mit anderem Fahrzeug, das seitlich in gleicher  Richtung fährt', 
'4': 'Zusammenstoß mit anderem Fahrzeug, das entgegenkommt',
'5': 'Zusammenstoß mit anderem Fahrzeug, das einbiegt oder kreuzt',
'6': 'Zusammenstoß zwischen Fahrzeug und Fußgänger',
'7': 'Aufprall auf Hindernis auf der Fahrbahn',
'8': 'Abkommen von der Fahrbahn nach rechts',
'9': 'Abkommen von der Fahrbahn nach links'};

var UKATEGORIE_map = { '1': 'Unfall mit Toten',
'2': 'Unfall mit Schwerverletzten',
'3': 'Unfall mit Leichtverletzten'};

var UTYP_map = { '1': 'Fahrunfall',
'2': 'Abbiege-Unfall',
'3': 'Einbiegen/Kreuzen-Unfall',
'4': 'Überschreiten-Unfall',
'5': 'Unfall durch ruhenden Verkehr',
'6': 'Unfall im Längsverkehr',
'7': 'Sonstiger Unfall'};





function expand_labels() {
	for (i=0; i<=9; i++) {
		id = 'UART'+i;
		labeltext = '['+i+'] ' + UART_map[i.toString()];
		$('label[for="' + id + '"]').text(labeltext);
	}
	
	for (i=1; i<=3; i++) {
		id = 'UKATEGORIE'+i;
		labeltext = '['+i+'] ' + UKATEGORIE_map[i.toString()];
		$('label[for="' + id + '"]').text(labeltext);
	}
	
	for (i=1; i<=7; i++) {
		id = 'UTYP'+i;
		labeltext = '['+i+'] ' + UTYP_map[i.toString()];
		$('label[for="' + id + '"]').text(labeltext);
	}
 /*   
	for (i=0; i < JAHRE_map.length ; i++) {
		id = 'JAHRE'+i;
		labeltext = '['+i+'] ' + JAHRE_map[i.toString()];
		$('label[for="' + id + '"]').text(labeltext);
	}    */
}

function addMyInfoControl() {
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info leaflet-control-layers');

		return this._div;
	};


	info.addTo(map);
	return info;
}

function updateMyInfoControl(info, count,countDD) {
	info._div.innerHTML = '<h4>' + count + ' Unfälle SN (davon ' + countDD + ' DD)</h4>' ;
}