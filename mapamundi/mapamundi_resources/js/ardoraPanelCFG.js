//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=31; attempts=0; attemptsMax=1;
var score=0; scoreMax=31; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[298,145,247,33,-3,-9,-25,463,450,447,446,469,355,180,317,161,278,327,464,500,484,303,301,301,494,151,4,106,294,337,306]; var posY=[91,122,37,331,43,101,225,115,91,65,40,147,202,236,178,184,297,224,238,266,348,10,348,348,176,286,191,68,63,155,129];
var coorx=["Mjky", "Mjcz", "MzI5", "MTE0", "NzU=", "OTQ=", "MTMw", "Mzk4", "NDUz", "NDA4", "NDMz", "NDAx", "NDAx", "Mjc5", "MzA4", "MjU2", "Mjg4", "MzE4", "NDY2", "NTE2", "NTUy", "Mjk4", "Mjk2", "Mjk2", "NTQ0", "MjEy", "MTA2", "MjY0", "Mjg4", "MzE4", "MzE0"]; var coory=["MTEx", "MTEy", "MTI1", "MjUw", "OTY=", "MTI3", "MjI2", "MTQy", "MTMx", "MTE1", "NTg=", "MTU4", "MTU4", "MjE5", "MTY4", "MTcx", "MjY3", "MjA2", "Mjc0", "Mjk2", "MzIx", "MTA=", "MzQ4", "MzQ4", "MjA4", "Mjcz", "MTg0", "ODY=", "Nzg=", "MTcw", "MTE5"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Danubio", "Alpes", "Cáucaso", "Andes", "Rocosas", "Misisipi", "Amazonas", "Himalaya", "Amarillo", "Gobi", "Siberia", "Ganges", "Ganges", "Congo", "Nilo", "Sáhara", "Kalahari", "Rift", "Australia", "Divisoria", "Nueva Zelanda", "Ártico", "Antártico", "Antártico", "Pacífico", "Atlántico", "Caribe", "Norte", "Báltico", "Rojo", "Negro"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="bWFwYW11bmRp"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
