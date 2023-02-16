export const nav = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "pages",
    url: "/pages",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
  },
];
export const category = [
  {
    id: 1,
    category: "Plan and Feedback",
    title: "Stay Calm And Surf",
    cover: [ "https://img00.deviantart.net/00d4/i/2009/025/8/7/crime_storyboard_by_nube.jpg",
             "../images/category/ca1.png"]
  },
  {
    id: 2,
    category: "Development and Code",
    title: "Stay Calm And Surf",
    cover: [ "https://live.staticflickr.com/1041/1162284306_0da7ed6b94_b.jpg",
             "../images/category/ca2.png"]
  },
  {
    id: 3,
    category: "Build",
    title: "Stay Calm And Surf",
    cover: [ "https://live.staticflickr.com/4320/35978238535_07e2bb6e8d_b.jpg",
             "../images/category/ca3.png"]
  },
  {
    id: 4,
    category: "Test",
    title: "Stay Calm And Surf",
    cover: [ " https://c.pxhere.com/photos/bf/fe/checklist_daily_report_data_desk_paper_paperwork_pen-1531329.jpg!d",
             "../images/category/ca4.png"]
  },
  {
    id: 5,
    category: "Release and Config",
    title: "Stay Calm And Surf",
    cover: [ "https://th.bing.com/th/id/OIP.DSZ8rX_hCzVcFOR_M788ZgHaF6?pid=ImgDet&rs=1",
           "../images/category/ca5.png" ]
  },
  {
    id: 6,
    category: "Deploy",
    title: "Stay Calm And Surf",
    cover: [ "https://th.bing.com/th/id/R.3c76baa082744019c2bb54204517b402?rik=zOmyu9ONW82S%2bg&pid=ImgRaw&r=0",
             "../images/category/ca6.png"]
  },
  {
    id: 7,
    category: "Operate",
    title: "Stay Calm And Surf",
    cover: [ "https://lh3.googleusercontent.com/-BnOmZDdxEPM/TdKv13mJE_I/AAAAAAAADGc/PrGTWlrZlZc/s400/DSC_0200.JPG",
             "../images/category/ca7.png"]
  },
  {
    id: 8,
    category: "Monitor and Observe",
    title: "Stay Calm And Surf",
    cover: [ "https://images.pexels.com/videos/7221187/pexels-photo-7221187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
             "../images/category/ca8.png"]
  },
]
  
/*
export const category = [
  {
    id: 1,
    category: "AgilesArbeiten",
    title: "Stay Calm And Surf",
    cover: "../images/category/ca1.png",
  },
  {
    id: 2,
    category: "CI/CD",
    title: "Becoming a Dragonfly",
    cover: "../images/category/ca2.png",
  },
  {
    id: 3,
    category: "Netwerken",
    title: "There's always light at the end of the tunnel",
    cover: "../images/category/ca3.png",
  },
  {
    id: 4,
    category: "Programierung",
    title: "Stay Calm And Surf",
    cover: "../images/category/ca4.png",
  },
  {
    id: 5,
    category: "SourceControlManagement",
    title: "There's always light at the end of the tunnel",
    cover: "../images/category/ca5.png",
  },
  {
    id: 6,
    category: "Tools",
    title: "Becoming a Dragonfly",
    cover: "../images/category/ca6.png",
  },
  {
    id: 7,
    category: "Test",
    title: "Stay Calm And Surf",
    cover: "../images/category/ca7.png",
  },
  {
    id: 8,
    category: "Technology",
    title: "There's always light at the end of the tunnel",
    cover: "../images/category/ca8.png",
  },
];
*/
export const blog = [
  {
    id: 1,
    title: "Behavior-Driven-Development",
    desc: "Da wir unsere Comics auch neuerdings in der Plasmagel anbieten möchten, nutzen wir die neuesten Methoden, hierzu möchte ich euch unser Vorgehen dabei beschreiben. Auf unserer Glaskugel-Website, auf der die Kunden Comics auswählen und kaufen können, bringen wir wöchentlich neue Funktionen heraus. In dieser Woche war es die Funktion die einzelnen Ausgaben in einer virtuellen Bibliothek zu speichern.\n\nOBevor wir die neue Funktion jedoch veröffentlichten, beschlossen wir, sie gründlich zu testen, um sicherzustellen, dass diese ordnungsgemäß funktionierte. Dazu verwendete unser Glaskugelteam Test-Driven Development (TDD), bei dem sie zunächst Tests schrieben, um die erwarteten Ergebnisse der neuen Funktion zu beschreiben, bevor sie die Funktion selbst schrieben. So konnten sie sicherstellen, dass die Funktion die Anforderungen erfüllte und keine Fehler aufwies.\n\nOSie verwendeten auch BDD(Behavior-Driven-Development), bei dem sie die Tests aus der Perspektive des Benutzers schrieben. Statt nur technische Tests zu schreiben, beschrieben sie das Verhalten, das sie von der Funktion erwarteten, z.B\n\n'Wenn der Benutzer einen Comic hinzufügt, sollte er in der virtuellen Bibliothek des Benutzers erscheinen'. Dies half uns, sicherzustellen, dass die Funktion so entwickelt wurde, dass sie für den Benutzer intuitiv und nützlich war.\n\nNachdem wir die Funktion getestet und überarbeitet hatten, veröffentlichten wir diese schließlich auf unserer Glaskugel-Website. Unsere treuen Leser waren begeistert von der neuen Funktion und so könnt ihr eure Comics auch in der Glaskugel speichern und lesen.",
    category: "BDD",
    author : "Felix",
    cover: "https://cucumber.io/img/bdd-practices-diagram.png",
    date: "APRIL 05, 2022",
  },

  {
    id: 2,
    title: "GPGkeys",
    desc: "In unserer Glaskugelwelt gibt es die weißen und die schwarzen Magier (IT-Security und Hacker). Diese kämpfen um die Kontrolle aller Glaskugeln, weshalb fast jedes Unternehmen auch unser Comicbuchverlag einen weißen Magier besitzt um die eigenen Glaskugeln und Nachrichten vor den schwarzen Magiern zu schützen. Die schwarzen Magier wollen nämlich alle Informationen der Welt lesen können um so die Gesellschaft kontrollieren und erpressen zu können. Mit ihren Mingeldings, kleinen pechschwarzen Wesen können sie Nachrichten klauen und Glaskugeln übernehmen. Haben die Mingeldings deine Glaskugel übernommen, wird diese ganz schwarz und einzig die weißen Magier wissen, wie man diese lästigen Biester vertreibt. Da die weißen Magier aber nicht immer da sein können, gibt es Vorkehrungen und Tools welche den weißen Magiern, den Schutz der Glaskugeln und des Nachrichtenverkehrs erleichtern, die sogenannten Doblinge. Das sind kleine Wesen innerhalb der Glaskugelwelt, welche besonderst wichtige Nachrichten verifizieren und das läuft folgendermaßen ab. Die Doblinge bekommen eine Liste mit Passwörtern und nützlichen Informationen(GPG keyring), womit sie die Nachrichten entschlüsseln und dir vorlesen können (Private key), wogegen jeder mit dem öffentlichen Papyrus dir welche schicken kann (GPGkeys Public Key). Dadurch können die schwarzen Magier deine Nachrichten nicht lesen, sollten diese von den Mingeldings gestohlen wurden sein. Natürlich gibt es noch viele weitere Bedrohungen, womit die schwarzen Magier versuchen ihr Ziel zu erreichen aber das erzählen wir euch in einer anderen Geschichte.",
    category: "GPGkeys",
    cover: "http://0ut3r.space/2019/02/13/easy-gpg/gpgprocess.jpg",
    date: "MARCH 15, 2022",
  },
  {
    id: 3,
    title: "Reddit",
    desc: "JHallo ihr Lieben, heute möchte ich euch etwas mehr über Roman erzählen. Roman ist einer unser besten Mitarbeiter in der Glaskugelabteilung. Es ist immer pünktlich und begeistert sich auch in seiner Freizeit für die Glaskugelwelt und ihre Orte, wie der Pyramide, dem Zoo und vielen weiteren. Eine weitere Leidenschaft von ihm ist das erzählen und schreiben von Witzen über Arbeitsthemen, mit denen er jedem Menschen ein Lächeln zaubert. Leider kann sein Freund, Pierfrancesco diese nie hören, da er taub gebohren wurde. Deshalb hatte Roman eine Idee, wie wäre es wenn er Bilder mit Witzen verbindet damit man diese sehen und lesen kann und jeder Mensch über seine Witze lachen kann. Gesagt, getan nach einem halben Jahr intensiver Arbeit, hatte er es geschafft. Das Comedyhaus, von allen Lachhausen (Reddit) genannt wurde in der Glaskugelwelt gefeiert, wodurch Roman von einem auf den anderen Moment ein Star wurde. Er kündigte und wurde Vollzeitcomedian aber das wichtigste für ihn war, dass sein Freund Pierfrancesco über seine Witze lachen konnte.",
    category: "Reddit",
    cover:
      "https://preview.redd.it/z7iaedym7yn61.jpg?auto=webp&s=b3a44b9bac373a0ecb0c49a816e88caa961e656b",
    date: "MARCH 15, 2022",
  },
  {
    id: 4,
    title: "GitHub",
    desc: "Soviele von euch waren interessiert an einem tieferen Einblick in unsere Glaskugelabteilung dass wir uns entschlossen haben, euch von einem typischen Alltag von Fredie unserem Praktikanten zu erzählen. Abgesehen davon, dass Fredie ein kurioser Typ ist welcher jeden Morgen Kirschsaft mit einer Kirsch-Sahnetorte verspeist, lernt er täglich von unseren Mitarbeitern etwas Neues. Heute erklärt ihm Christoph, wie er an Projekten in der Glaskugelwelt zeitgleich mit Susan arbeiten kann ohne dass sie, die selbe Glaskugel benutzen. Dafür nutzt er das Programm Zoo (Git), in welchen es sehr viele Themengebiete gibt mit ganz speziellen Tieren. Da gibt es die Nashörner welche komische Projekte für die Bauindustrie entwerfen, die kurioser Weise funktionieren. Dadurch konnte letztens erst ein Haus ganz ohne Bauarbeiter gebaut werden, verrückt. Oder die Faultiere, sie lieben es in ihren Häusern und Betten zu sein und wollen sich möglichst nicht bewegen. Dafür haben sie intelligente Zwuckzwack erschaffen, nützliche Wesen die gerne einfache Aufgaben wie das Putzen oder das Anschalten vom Licht übernehmen. Sollten diese keine Aufgabe haben, schlafen sie sofort ein, ähnlich ihren Erschaffern. Christoph und Susan arbeiten aktuell an einem Bewertungssystem für unsere Comicsammlung in der Glaskugelwelt. Da Susan aber manchmal etwas langsamer als Christoph ist und beide verschiedene Musik beim arbeiten hören ist es gut dass wir den Zoo haben. Aber wie funktioniert das ganze? Ganz simpel, wenn Christoph mit einem Teil des Projektes fertig ist, muss er folgendes tun. Er zieht sein Projektteil in einen Wagon des Zoozugs (git add), manchmal braucht er dabei Unterstützung durch Elefanten wenn er einmal wieder besonderst hart gearbeitet hat und muss beim Zoowärter ein Ticket lösen damit dieser weiß, wohin er den Wagon liefern muss (git commit). Ist dies alles geschehen, kann der Zug zu dem passenden Gehege fahren (git push ins Repository), wo die Affenarbeiter schon warten um Christophs neuen Part in das Projekt zu integrieren. Will er aber dann das ganze Projekt einsehen oder das Projekt mit dem neuen Teilstück von ihm oder Susan, so muss er dies einfach nur sagen und der Zoowärter kommt mit seinem Sonderzug gezogen von der Dicker Bertha, einer großen Dampflokomotive angefahren (git pull). Da das Bewertungssystem neu ist und noch dran gearbeitet wird ist es auch noch gut abgedeckt von einer Plane (private Repository) und wenn Christoph und Susan fertig sind wird diese entfernt, dass alle ihre harte Arbeit bestaunen können (public Repository). Dann kommen meist sehr viele Leute mit Bananen um den Affenarbeitern zu danken. Fredie ist beeindruckt als Christoph ihm das alles erzählt und träumte in der Nacht von Affen mit Bananen und Zoowärten. ",
    category: "GitHub",
    cover:
      "https://www.legitsecurity.com/hs-fs/hubfs/Frame%201%20(1).png?width=1575&name=Frame%201%20(1).png",
    author:"Anis",
    date: "February 20, 2022",
  },
  {
    id: 5,
    title: "Stackoverflow",
    desc: "In einer Welt voller verschiedener Glaskugeln, gibt es ebenso verschiedene Menschen mit verschiedenen Meinungen. Zwei davon sind Marc und Eslam. Eslam ist ein Mitarbeiter unserer Glaskugelabteilung der immer einen guten Witz parat hat. Marc arbeitet dagegen in der berühmten Eiscremefabrik: 'Penguins', in welcher er sich um die Glaskugeln und Maschinen kümmert. Letztens hatte Marc während der Arbeit eine Frage zum Thema Glaskugeljustierung, welche ihn das Glaskugelnetzwerk (Internet) nicht beantworten konnte. Er wusste Eslam kannte sich deutlich besser damit aus aber wollte nicht Stunden warten bis sein Arbeitstag beendet war. Zum Glück gab es in der Glaskugelwelt, die Pyramide(Stackoverflow) ein Ort an welchem die hellsten Köpfe Fragen beantworteten und andere deren Antworten kommentieren, korrigieren und lesen konnten für alle Zeiten. Eslam war dort einer der Weisesten und Marc wusste dass Eslam sein Problem dort schon einmal beantwortet hatte. Nach langem Suchen fand er die Frage zu seinem Problem, ein gewisser Halim hatte sie gestellt und Eslam hatte geantwortet. Dadurch gelang es Marc die Glaskugeln zu justieren und fügte einige Verbesserungen hinzu, welche er in der Pyramide hinterlegte. Dadurch kann auch zukünftig anderen geholfen werden und glücklich ging Marc Nachhause.",
    category: "Stackoverflow",
    cover: "https://miro.medium.com/max/1280/0*ifjhcLyODu0nXjVx.jpg",
    date: "February 20, 2018",
  },
  {
    id: 6,
    title: "git",
    desc: "Ein Theaterstück ist ein interessantes Szenario, um die Konzepte von Git zu erklären. Das Theaterstück, das das Team produziert, heißt 'Der Ritter und die Prinzessin' und handelt von einem Ritter, der um die Hand einer Prinzessin kämpft. Das Team besteht aus dem Regisseur, dem Bühnenbildner, dem Kostümdesigner, den Schauspielern und dem Beleuchter. \n\n Der Regisseur, Max, hat das Konzept für das Theaterstück entwickelt und ist verantwortlich dafür, dass das Stück auf die Bühne gebracht wird. Er arbeitet eng mit dem Bühnenbildner, Tom, zusammen, um die Bühnenausstattung zu planen und zu entwerfen. Tom nutzt Git, um die Entwürfe auf eine zentrale Plattform hochzuladen und sie mit dem Rest des Teams zu teilen.\n\nDer Kostümdesigner, Sarah, ist verantwortlich für die Entwicklung der Kostüme für die Schauspieler. Sie nutzt ebenfalls Git, um die Entwürfe und Schnittmuster auf die Plattform hochzuladen und sie mit dem Rest des Teams zu teilen. Die Schauspieler, Mary und Anton, geben ihre Kleidergrößen bekannt und Sarah nutzt diese Informationen, um die Kostüme anzupassen. Die Fans des Theaterstücks können sich die Schnittmuster herunterladen und diese nachbauen, während die Lieferanten von Stoffen Feedback geben, um die Kostüme zu verbessern.\n\nDer Beleuchter, Peter, arbeitet eng mit dem Regisseur zusammen, um die Beleuchtung für das Theaterstück zu planen. Er nutzt Git, um die Beleuchtungspläne auf die Plattform hochzuladen und sie mit dem Rest des Teams zu teilen.\n\nWährend der Proben und der Vorstellungen arbeitet das Team eng zusammen, um sicherzustellen, dass alles reibungslos verläuft. Jeder bearbeitet und aktualisiert seine Arbeit mit Git, um sicherzustellen, dass alle auf dem neuesten Stand sind.\n\nEines Tages tritt jedoch ein Problem auf: Der Server, auf dem die zentrale Plattform von Git gehostet wird, fällt aus. Das Team muss schnell handeln, um eine Lösung zu finden. Sie entscheiden sich dafür, eine lokale Kopie der Arbeit jedes Mitglieds anzulegen, um sicherzustellen, dass sie weiterarbeiten können, während das Problem behoben wird. Sobald der Server wieder online ist, pusht das Team seine Arbeit zurück auf die zentrale Plattform, um sicherzustellen, dass alle auf dem neuesten Stand sind.\n\nEine andere Herausforderung tritt auf, als das Team beschließt, eine neue Funktion hinzuzufügen: Eine spektakuläre Szene, in der der Ritter auf einem Pferd eine beeindruckende Showeinlage vorführt. Der Bühnenbildner Tom und der Beleuchter Peter arbeiten eng zusammen, um die Szene zu entwerfen und zu planen. Sie nutzen Git, um ihre Arbeit auf die zentrale Plattform hochzuladen und sie mit dem Rest des Teams zu teilen.\n\nDas Theaterstück hat schließlich seine Uraufführung und wird von Publikum und Kritikern gleichermaßen gefeiert. Das Team ist stolz darauf, was es erreicht hat und dankbar für die Verwendung von Git, das ihnen ermöglicht hat, ihre Arbeit effektiv zu organisieren und zu teilen. Sie gehen auf Tournee und spielen das Stück in verschiedenen Städten. Durch die Verwendung von Git konnten sie schnell auf Probleme reagieren und Änderungen umsetzen, was zu einer erfolgreichen Tournee beigetragen hat. ",
    category: "git",
    cover: "https://miro.medium.com/max/650/0*J6mFVZxWbYwFTIJV",
    date: "February 20, 2018",
  },
  {
    id: 7,
    title: "MergeKonflikt",
    desc: "An der Heftreihe, der App, 'Phillip liebt Nancy', arbeiten zwei Teams von Autoren oder auch manchmal die Coder genannt. Das 'Action' Team mit Emma und Max ist gut darin Spannung aufzubauen und wilde Verfolgungsjagden und Kämpfe zu schildern, während das 'Romantik' Team aus Julia und David auf tiefgreifende Dialoge und gefühlvolle Beziehungen zwischen den einzelnen Charaktären spezialisiert ist. Da die Hefte wöchentlich erscheinen, herrscht stets großer Zeitdruck und beide Teams arbeiten parralel an der Geschichte.\n\nNun kommt es öfter zu einer Situation, dem Merge-conflict, wenn beide Teams versuchen die Geschichte wieder zusammen zuführen. Team 'Action' hat einen Kampf geschrieben in dem Phillip schwer verletzt wurde und nun im Krankenhaus liegt. Gleichzeitig hat Team 'Romantik' die Geschichte derart vorangetrieben, dass Phillip und Nancy endlich das langersehnte Rendevous haben.\n\nLeider kann Phillip nicht gleichzeitig im Krankenhaus und beim Candlelight-dinner sein. Dieser Konflikt muss aufgelöst werden. Es könnte der bessere Handlungsstrang, den Code beibehalten und der andere verworfen werden oder etwas geändert werden, so dass die Geschichte wieder passt.",
    category: "MergeKonflikt",
    cover: "https://pics.me.me/thumb_git-merge-69262734.png",
    date: "February 20, 2022",
  },
  {
    id: 8,
    title: "Bash",
    desc: "Ein weiteres Mal begrüßen wir euch zu unserer heutigen Ausgabe 'Traumwelten'. Unsere Mitarbeiterin Ulrike hatte mir letztens von einem unglaublichen Traum erzählt. Da sie drei Kinder hat ist sie immer sehr müde, weshalb sie sich vorgenommen hatte das letzte Wochenende durchzuschlafen. Gesagt, getan, ganze zwei Tage schlief sie und träumte dabei von einer Welt ganz anderst der Unseren. Menschen welche sogenannte Computer anstatt Glaskugeln nutzten, mit Programmen wovon Sie eines kennenlernte. Dieses hieß Bash und es erzählte ihr seine Geschichte: Es war einmal ein kleines Programm namens Bash. Bash lebte in einem Computer und seine Aufgabe war es, Befehle von den Menschen zu verstehen und sie auszuführen.\n\nEines Tages traf Bash ein neues Programm namens GUI (Graphical User Interface). GUI sah sehr hübsch aus mit all seinen bunten Knöpfen und Bildern, aber Bash war ein bisschen eifersüchtig, weil es nicht so hübsch aussah.\n\nDoch dann erkannte Bash, dass es etwas hatte, das GUI nicht hatte: die Macht, Befehle direkt einzugeben und so viel schneller zu arbeiten. Bash lernte, stolz darauf zu sein, wie es war und half den Menschen, ihre Computeraufgaben schneller und einfacher zu erledigen.\n\nVon da an lebten Bash und GUI glücklich zusammen und halfen den Menschen, ihre Computeraufgaben zu erledigen. Bash erkannte, dass es gut so war, wie es war und dass es wichtig war, stolz auf seine Einzigartigkeit zu sein.\n\nDas war die Geschichte von Bash, dem kleinen Programm, das lernte, stolz auf sich selbst zu sein.\n\nDiese Geschichte vom kleinen Bash, rührte Ulrike so sehr, dass sie dadrauf bestand das ich es euch erzähle aber schon merkwürdig eine Welt mit Computern anstatt Glaskugeln, wie soll man denn da seine Comics lesen können.",
    category: "Bash",
    cover: "https://miro.medium.com/max/735/1*ppClMWmgqyuXIuutxka-ZA.png",
    date: "February 20, 2022",
  },
  {
    id: 9,
    title: "CleanCoding",
    desc: "Hallo ihr Lieben und Willkommen zurück zu unserer heutigen Ausgabe. Klein Otto der Sohn von Frau Mainzel, eine fleißige Redakteurin bei uns lernt in der Schule die Regeln, der korrekten Rechtschreibung. Denn ohne diese, könnten wir einander nicht verstehen. Sowie es auf der Welt verschiedene Sprachen gibt und regionale Dialekte, so schreibt auch jede Person individuell. Damit wir uns alle besser verstehen können, gibt es Grundregeln welche man sich mit einigen Hilfswörter und Prinzipien besser merken kann. Beispielsweise sollte man es intuitiv verstehen und einfach ändern können, wie dieses ComicBook. Du solltest es nie zu kompliziert schreiben und möglichst viel Geschriebenes wieder verwenden. Desweiteren hilft es das Geschriebene erneut zu lesen und Korrekturen vorzunehmen um dieses verständlicher und kürzer zu gestalten. Ganz nach dem Motto:'KISS; Keep-it-simple-and-stupid'! Ebenso solltest du dich nicht nach dem Motto:'Dry; Don't-repeat-yourself', wiederholen und Code der ähnlich ist versuchen zusammen zu führen und wiederzuverwenden. 'YAGNI; You-arent-gonna-need-it', schreibe Aufgaben/Kapitel in kleineren Schritten und minimiere Überflüssiges! Aber denke immer dran, ein anderer liest dein Geschriebenes und muss es verstehen, sowie du gerade dieses Heft liest!",
    category: "CleanCoding",
    cover: "../images/blogs/b9.jpg",
    date: "February 20, 2018",
  },

  {
    id: 10,
    title: "Funktionen",
    desc: "Im Writing Room arbeitet das Team 'Aktion' unter der Leitung des Projektmanagers Michael an der Comic-Heftreihe 'Der verrückte Professor'. Michael hat eine enge Beziehung zu einer Person, die äußerst bewandert in der 'Lore' der Geschichten ist und Fragen zur Finanzsituation von Nancy oder dem Aufenthaltsort des verrückten Professors beantworten kann.\n\nWenn die Autoren des Teams eine Frage haben, die die Person sofort beantworten kann, ruft sie die Person synchron an und erhält sofort eine Antwort. Wenn die Frage jedoch komplexer ist und mehr Recherche erfordert, ruft die Person asynchron an und ruft zu einem späteren Zeitpunkt zurück, um die Autoren mit der notwendigen Information zu versorgen.\n\nDieser Ansatz ermöglicht es dem Team, effektiv zu arbeiten und gleichzeitig die Konsistenz und Logik der Geschichte sicherzustellen. Michael und das Team verwenden sowohl synchronen als auch asynchronen Ansätze, um sicherzustellen, dass sie die bestmöglichen Ergebnisse erzielen.",
    category: "Funktionen",
    cover:
      "http://www.codeadventurer.de/wp-content/uploads/2015/04/Funktionsaufruf.jpg",
    date: "February 20, 2022",
  },
];
