function getMsg() {
    const ip_url = 'https://ip.generic-w.workers.dev';
    var ip_result = '';
    const messages = ['Министерство обороны Украины взяло на себя обязанности Министерства обороны России. С сегодняшнего дня заработала горячая линия Минобороны Украины, где родственники российских военных, которые потеряли связь с родными, могут узнать их судьбу.','Еда была отличной! К сожалению, Путин испортил наш аппетит, вторгшись в Украину. Восстаньте против своего диктатора, прекратите убивать невинных людей! Ваше правительство лжет вам. Вставай!', 'Добрый день. Я никогда не был в вашем ресторане, и к сожалению, никогда не буду. Ваш президент начал войну против Украины и, следовательно, против всего остальногонормального мира. На Украине уже погибли 5300 российских солдат, и каждый час количество погибших увеличивается.', 'нет войне','спроси у путина где наши солдаты','Путин убивает мирных жителей Украины.','Путин убивает украинских детей.','Наше правительство лжет нам.','Наше правительство врет про войну.','Путин хуйло','Путлер','Российская армия разбомбила госпиталь в Украине.'];
    var msg_box = '<div id="message_for_russia" style="position: absolute; z-index: 1000; background-color: #ffd700; border-style: solid; border-width: 10px; border-color: #0057b7; right: 0px; left: 0px; top: 0px; padding: 10px; font-family: Trebuchet MS; color: black; text-align: center">{message}</div>'
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            ip_result = xhttp.responseText;
            if (new String(ip_result).valueOf() === new String("true").valueOf()) {
                document.body.innerHTML = document.body.innerHTML + msg_box.replace('{message}',messages[Math.floor(Math.random() * messages.length)]);
                // alert('debug');
            }
        }
    };
    xhttp.open("GET", ip_url, true);
    xhttp.send();
}

window.onload = function () {
    getMsg();
}