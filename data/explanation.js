var introduction = 'Welkom bij de studie Vertel iets over je weekend! <br><br>Geef aan wat je moedertaal is door op de juiste knop te klikken.';
var buttons1 = '<button id="lang_button_nl" class="simple_button" type="button" onclick="set_lang_nl()">Nederlands</button><button id="lang_button_other" class="simple_button" type="button" onclick="set_lang_other()">Andere taal</button>';
var ic = '<b>INFORMATIEBROCHURE VOOR DEELNEMERS AAN ‘Vertel iets over je weekend’</b><br><br>Beste deelnemer,<br>Voordat het onderzoek begint, is het belangrijk dat je op de hoogte bent van de procedure die in dit onderzoek wordt gevolgd en wat dit betekent voor jou. Neem de tijd om de procedure te lezen en te beslissen of je wil deelnemen aan het onderzoek of niet. Het onderzoek zal ongeveer 30 minuten duren en volledige deelname zal worden beloond met 0,5 participatiepunt.<br><br><b>Doel van het onderzoek</b><br>Het onderzoek is geïnitieerd door Bruno Verschuere van de programmagroep Klinische Psychologie, afdeling Psychologie, FMG, Universiteit van Amsterdam om te onderzoeken of het mogelijk is om ware en gelogen statements over weekendplannen van elkaar te onderscheiden. <br><br><b>Vertrouwelijkheid van gegevens</b><br>Alle onderzoeksgegevens zullen vertrouwelijk worden behandeld. Alleen de verantwoordelijke personen van de afdeling Psychologie hebben toegang tot de geanonimiseerde data. De toestemmingsverklaring die je tekent zal deze mensen toestemming geven om over deze data te beschikken. De data die wordt verkregen tijdens het onderzoek zal tot 5 jaar na afronding van het onderzoek op de computer blijven opgeslagen. Als resultaten van dit onderzoek worden gepubliceerd of gepresenteerd bij wetenschappelijke bijeenkomsten, zal jouw naam nooit genoemd worden.<br><br><b>Vrijwilligheid</b><br>Als je nu besluit af te zien van deelname aan dit experiment, zal dit op geen enkele wijze gevolgen voor je hebben. Als je tijdens het onderzoek zelf besluit je medewerking te staken, zal dat eveneens op geen enkele wijze gevolg voor je hebben. Tevens kun je 24 uur na dit onderzoek alsnog je toestemming om gebruik te maken van je gegevens intrekken. Je kunt jouw medewerking dus te allen tijde staken zonder opgave van redenen. Mocht je jouw medewerking staken, of achteraf, zij het binnen 24 uur, je toestemming intrekken, dan zullen je gegevens worden verwijderd uit onze bestanden en vernietigd.<br><br><b>Verzekering</b><br>Omdat dit onderzoek geen risico’s voor de gezondheid of veiligheid met zich meebrengt, gelden de voorwaarden van de reguliere aansprakelijkheidsverzekering van de UvA.<br><br><b>Nadere inlichtingen</b><br> Mocht je vragen hebben over dit onderzoek, vooraf of achteraf, dan kun je je wenden tot de verantwoordelijke onderzoeker, Dr. Bruno Verschuere, tel. +31-205256799, email b.j.verschuere @uva.nl, Roeterseilandcampus gebouw G, kamer 1.31, Amsterdam. Voor eventuele klachten over dit onderzoek kun je je wenden tot het lid van de Commissie Ethiek, Dr. A. van Emmerik, tel. +20 525 8604, email a.a.p.vanemmer@uva.nl, Roeterseilandcampus gebouw G, kamer 1.41, Amsterdam.<br><br>Klik op de pijl om door te gaan.';

// language
var instructions_general1_nl = 'We zijn bij deze studie ook geïnteresseerd in de rol die taal speelt bij liegen. De ene helft van de deelnemers zal deze studie daarom in het Nederlands afleggen, terwijl de andere helft een Engelse versie zal maken. Jij bent ingedeeld in de Nederlandse conditie. Al je instructies zullen verder in het Nederlands zijn. Het is belangrijk dat je altijd in het Nederlands antwoord geeft op de vragen die je verder bij deze studie zullen worden gesteld. ';
var instructions_general1_en = 'In this study, we are also interested in the role of language when people lie. Half of our participants will do the experimental task in Dutch, whereas the other half will do it in English. You have been allocated to the English language condition. From now on, all instructions will be in English. It is important that you always answer the questions in this study in English.';

// manipulations
var instructions_general2_nl = 'Zoals we eerder al stelden zijn we bij dit onderzoek geïnteresseerd in hoe we onderscheid kunnen maken tussen mensen die liegen over hun weekendplannen en mensen die hier de waarheid over vertellen. <br><br>We vragen je zo om een verklaring te schrijven over wat je het aankomende weekend zal gaan doen. De ene helft van de deelnemers wordt hierbij gevraagd om de waarheid te vertellen over hun weekendplannen. De andere helft vragen we om hierover te liegen. Om vervolgens een goede vergelijking te kunnen maken tussen de twee groepen deelnemers, is het belangrijk dat we eerst van iedereen zeker weten wat ze <i>echt</i> voor weekendplannen hebben. <br><br>Klik op de pijl om door te gaan.';
var instructions_general2_en = As mentioned before,
    in this study we are interested in whether we can tell
if someone is lying about their weekend plans or telling the truth. < /br></br > Later in this experiment we will ask you to write a statement about your plans
for next weekend.Half of the participants in this study will be instructed to tell the truth.The other half is told to lie about their weekend activities.To be able to differentiate between the two groups, it is important that we know from each participant what their true plans are
for next weekend. < br > < br > Click on the arrow to proceed.
';

// var instructions_pastweekend_nl = 'Geef nu aan wat je hebt gedaan in het afgelopen weekend. In de lijst staan een aantal opties die je aan kunt klikken. Je kunt hier meerdere opties selecteren. Dit doe je door de Ctrl (Windows) of Cmd (Mac) toets ingedrukt te houden terwijl je met je muis op de opties klikt.<br><br> Geef in het tweede veld ook aan wat je absoluut niet hebt gedaan in het afgelopen weekend. Hier moet je minstens drie opties selecteren.';
// var instructions_pastweekend_en = 'Please indicate which activities you did last weekend. You can select several options from the list below. You can do this by pressing the Ctrl (Windows) or Cmd (Mac) button while simultaneously clicking with your mouse on the options. br><br> In the second field you can indicate what you absolutely did not do last weekend. Please select at least three options here. ';
// var slider_text_pastweekend_do_nl = 'Geef nu aan voor onderstaande opties hoe vaak je deze activiteiten in het verleden hebt gedaan.';
// var slider_text_pastweekend_do_en = 'Please indicate for the options below how often you have carried them out in the past';
// var slider_text_pastweekend_notdo_nl = 'Geef nu voor onderstaande opties aan hoe vaak je deze activiteiten in het verleden <i>wel</i> hebt gedaan.';
// var slider_text_pastweekend_notdo_en = 'Please indicate for the options below how often you have carried them out in the past.';

var instructions_nextweekend_nl = 'Geef nu aan wat je gaat doen in het komende weekend. In de lijst staat een aantal opties die je aan kunt klikken. Je kunt meerdere opties selecteren. Dit doe je door de Ctrl (Windows) of Cmd (Mac) toets ingedrukt te houden terwijl je met je muis op de opties klikt.<br><br>Geef ook aan wat je absoluut niet gaat doen in het komende weekend. Selecteer hier <b>ten minste drie</b> activiteiten die je niet gaat doen dit weekend.';
var instructions_nextweekend_en = 'Please indicate what you are going to do next weekend. There are some options provided in the list. You can select several options from the list below. You can do this by pressing the Ctrl (Windows) or Cmd (Mac) button while simultaneously clicking with your mouse on the options.<br><br> In the second field you can indicate what you are absolutely not going to do next weekend. Please select <b>at least three</b> activities that you will not carry out next weekend.';

var slider_text_nextweekend_do_nl = 'Geef nu aan hoe vaak je de hieronder vermelde activiteit in het verleden al hebt gedaan.<br><br>Geef ook aan hoe zeker het is dat je deze activiteit echt gaat doen komend weekend en hoe goed je deze activiteit op dit moment al hebt gepland.';
var slider_text_nextweekend_do_en = 'Please indicate for the activity below how often you have carried this out in the past. <br><br>Also indicate how certain it is that you will truly carry out this activity next weekend, and how well you have prepared the activity at this moment already.';
var slider_text_nextweekend_notdo_nl = 'Geef nu aan hoe vaak je de hieronder vermelde activiteiten in het verleden <i>wel</i> hebt gedaan.<br><br>Geef ook aan hoe zeker het is dat je deze activiteiten echt niet gaat doen komend weekend.';
var slider_text_nextweekend_notdo_en = 'Please indicate for the options below how often you have carried out these activities in the past.<br><br> Also indicate how certain it is that you will truly not carry out these activities next weekend.';

var instructions_deceptive_future_nl = 'We vragen je over een paar minuten om een verhaal te schrijven over je plannen voor volgend weekend. Het is de bedoeling dat je hier over <i>liegt</i>. De activiteit waar jij over gaat liegen zie je onder deze instructies staan. Jij bedenkt verder een verhaal om deze activiteit heen. Maak je verhaal zo plausibel mogelijk, en probeer in je verhaal zo veel mogelijk verifieerbare details te gebruiken. Dit maakt je verhaal namelijk geloofwaardiger. <br> <br> Een detail is verifieerbaar wanneer het waarheidsgehalte door ons kan worden gecheckt en wanneer: <ul> <li> het een actie betreft die gedocumenteerd is en daardoor te checken valt (bijvoorbeeld telefoongesprekken of acties die zijn vastgelegd op beveiligingscamera’s) </li> <li> het een actie betreft die is ondernomen met een ander, identificeerbaar persoon, bijvoorbeeld een vriend of een collega </li> <li> het een actie betreft die is waargenomen door een ander, identificeerbaar persoon </li> </ul> <br><br>Klik op de pijl om door te gaan.';
// + repeat choice!


var instructions_truthful_future_nl = 'We vragen je over een paar minuten om een verhaal te schrijven over je plannen voor volgend weekend. Het is de bedoeling dat je hier <i>de waarheid</i> over spreekt. Beschrijf de activiteit waarvan je net hebt aangegeven dat deze centraal in je komende weekend zal staan. De activiteit waar jij over gaat schrijven staat onder deze instructies. Maak je verhaal zo plausibel mogelijk, en probeer in je verhaal zo veel mogelijk verifieerbare details te gebruiken. Dit maakt je verhaal namelijk geloofwaardiger.<br> <br>Een detail is verifieerbaar wanneer het waarheidsgehalte door ons kan worden gecheckt en wanneer: <ul> <li> het een actie betreft die gedocumenteerd is en daardoor te checken valt (bijvoorbeeld telefoongesprekken of acties die zijn vastgelegd op beveiligingscamera’s) </li> <li> het een actie betreft die is ondernomen met een ander, identificeerbaar persoon </li> <li> het een actie betreft die is waargenomen door een ander, identificeerbaar persoon </li> </ul> <br><br>Klik op de pijl om door te gaan.';
// + repeat choice!


var instructions_deceptive_future_en = 'In a few minutes we ask you to write a statement about your plans for next weekend. It is important that you will <i>lie</i> about this. You can find the activity that you will tell a lie about below. You have to make up a further story around this activity yourself. Try to make your story as plausible as possible and include as many verifiable details as possible. This makes your statement more convincing. Details that can be verified are details of which the truthfulness can be checked by us. Such details describe activities that are: <ul> <li> documented and therefore checkable, such as phone calls and presence at places with closed-circuit television </li> <li> carried out with another person that can be identified, such as a friend or a colleague </li> <li> witnessed by another person that can be identified </li> </ul> <br><br>Click on the arrow to proceed.';
// + repeat choice!


var instructions_truthful_future_en = 'In a few minutes we ask you to write a statement about your plans for next weekend. It is important that you will <i>tell the truth</i> about this. In your statement, please describe the activity that you previously indicated to be central in your next weekend. Try to make your story as plausible as possible and include as many verifiable details as possible. This makes your statement more convincing. Details that can be verified are details of which the truthfulness can be checked by us. Such details describe activities that are: <ul> <li> documented and therefore checkable, such as phone calls and presence at places with closed-circuit television </li> <li> carried out with another identified person </li> <li> witnessed by another person that can be identified </li> </ul> <br><br>Click on the arrow to proceed.';
// + repeat choice!

// var instructions_deceptive1_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier over <i>liegt</i>. De activiteit waar je over gaat liegen is gegeven. Jij bedenkt dus het verhaal om deze activiteit heen. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.<br><br>Klik op de pijl om door te gaan';
// // + repeat choice!
// var instructions_truthful1_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier <i>de waarheid</i> over vertelt. Beschrijf hierbij de activiteit waarvan je net hebt aangegeven die te gaan doen of die je hebt gedaan. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.';
// // + repeat choice!
//
//
// var instructions_deceptive1_en = 'You are now asked to write a statement about your activities on the last weekend and about your plans for next weekend. Your task is to <i>lie</i> about this. We will give you the activity that you have to lie about. Make up a convincing story around this event. To be convincing, try to be as detailed and as plausible as possible in your statement.<br><br>Click on the arrow to proceed.';
// // + repeat choice!
// var instructions_truthful1_en = 'You are now asked to write a statement about your activities on the last weekend and abut your plans for next weekend. Your task is to <i>tell the truth</i> about this. In your statement, please describe the activity stated below. This event was selected from the list of activities that you indicated previously. To be convincing, try to be as detailed and as plausible as possible in your statement.<br><br>Click on the arrow to proceed.';
// // + repeat choice!
//
//
// var instructions_deceptive2_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier over <i>liegt</i>. De activiteit waar je over gaat liegen is gegeven. Jij bedenkt dus het verhaal om deze activiteit heen. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.<br><br>Klik op de pijl om door te gaan';
// // + repeat choice!
// var instructions_truthful2_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier <i>de waarheid</i> over vertelt. Beschrijf hierbij de activiteit waarvan je net hebt aangegeven die te gaan doen of die je hebt gedaan. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.';
// // + repeat choice!
//
//
// var instructions_deceptive2_en = 'ENGLISH!!!!! Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier over <i>liegt</i>. De activiteit waar je over gaat liegen is gegeven. Jij bedenkt dus het verhaal om deze activiteit heen. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.<br><br>Klik op de pijl om door te gaan';
// // + repeat choice!
// var instructions_truthful2_en = 'ENGLISH!!! Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier <i>de waarheid</i> over vertelt. Beschrijf hierbij de activiteit waarvan je net hebt aangegeven die te gaan doen of die je hebt gedaan. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.';
// // + repeat choice!


var instructions_modelstatement_nl = 'Uit eerder onderzoek is gebleken dat het voor veel mensen moeilijk is om in te schatten hoe veel details ze moeten noemen wanneer ze een verklaring schrijven. Om deze reden zal je eerst een voorbeeld van een gedetailleerde verklaring te lezen krijgen. Lees deze verklaring aandachtig door en let goed op de manier waarop de auteur details in haar verhaal heeft gebruikt. Na het lezen dien je een aantal vragen over het verhaal te beantwoorden. Je kunt pas door met de rest van het onderzoek nadat je deze vragen goed hebt beantwoord.';
var instructions_modelstatement_en = 'Previous research has suggested that many people find it difficult to estimate how many details they have to include when writing a statement. For this reason, you will first read an example of a detailed statement. Read this statement carefully and pay attention to the way the author included details in her story. After reading this, you will have to answer a few questions about the story. Only after answering these questions correctly, you will be able to proceed.';

// input field
var instructions_inputfield_nl = 'Geef nu een verklaring waarin je je plannen voor komend weekend beschrijft. Denk bij het schrijven van je verklaring goed aan het model statement, en gebruik zo veel mogelijk verifieerbare details. <br><br> Doe goed je best! Experts in leugendetectie zullen later je verklaring lezen en beslissen of ze je geloven. Als ze je geloven, verdien je <b> één extra UvA participatiepunt </b>.';

var instructions_inputfield_en = 'Now write a statement about your plans for next weekend. Keep the model statement in mind when writing your story, and use as many verifiable details as possible. <br><br> Give it your all! Experts in deception detection will later read your statement and decide whether they believe you or not. If they believe you, you will receive <b>one extra UvA research credit point.</b>';


// language tasks
// see lextale and vocab_task directoties

// outro
var debriefing_nl = '';
var debriefing_en = '';

var outro_nl = 'Je deelnemerscode: <span id=partcode style="color: red">9871NO</span></br></br>' +
    '<span id="debr">' + debriefing_nl + '</span></br></br>' +
    'Om je deelname te kunnen valideren, is het noodzakelijk dat je je UvA studentnummer in het linkerveld en je deelnemerscode in het rechterveld invult. ' +
    'De toekenning van extra participatiepunten voor geloofwaardige statements zal meteen aan het einde van de dataverzameling gebeuren. ' +
    'Als je vragen hebt over dit onderzoek, kun je contact met ons opnemen via verbaldeceptiondetection@gmail.com' +
    '<input type="text" id="crowdf" name="crowdf" class="select_menu" maxlength="40" size="16" style="text-align: center; left: 20%; top: 85%; height: 10%; width: 25%;" placeholder="JE UVA STUDENTNUMMER">' +
    '<input type="text" id="unidin" name="unidin" class="select_menu" maxlength="6" size="16" style="text-align: center; left: 50%; top: 85%; height: 10%; width: 25%; color: red" placeholder="JE DEELNEMERSCODE">';
var outro_en = 'Your participation code: <span id=partcode style="color: red">9871NO</span></br></br>' +
    '<span id="debr">' + debriefing_en + '</span></br></br>' +
    'In order to validate your participation, it is necessary that you provide your UvA Student number below in the left hand-field and confirm your participation code in the middle text field.' +
    'The allocation of extra research credit points for believable statements will happen directly after we finished data collection.' +
    'If you have any questions about this study, please contact us via verbaldeceptiondetection@gmail.com' +
    '<input type="text" id="crowdf" name="crowdf" class="select_menu" maxlength="40" size="16" style="text-align: center; left: 20%; top: 85%; height: 10%; width: 25%;" placeholder="YOUR UVA STUDENT NUMBER">' +
    '<input type="text" id="unidin" name="unidin" class="select_menu" maxlength="6" size="16" style="text-align: center; left: 50%; top: 85%; height: 10%; width: 25%; color: red" placeholder="YOUR PARTICIPATION CODE">';

// credits
var credits = '<div id="credits">' +
    'University of Amsterdam // Bennett Kleinberg: <a href="mailto:b.a.r.kleinberg@uva.nl?Subject=Online%20Experiment" target="_top">b.a.r.kleinberg@uva.nl</a>' +
    '</div>';
