function calcularNumeroSuerte(fecha) {
    // Obtener día, mes y año de la fecha
    var dia = fecha.getDate() + 1;
    var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, por eso sumamos 1
    var año = fecha.getFullYear();

    // Calcular la suma de los dígitos de día, mes y año
    var sumaDigitos = sumarDigitos(dia) + sumarDigitos(mes) + sumarDigitos(año);

    // Reducir la suma a un solo dígito
    while (sumaDigitos > 9) {
        sumaDigitos = sumarDigitos(sumaDigitos);
    }

    return sumaDigitos;
}

function sumarDigitos(numero) {
    // Convertir el número a cadena para poder sumar sus dígitos
    var cadenaNumero = numero.toString();
    var suma = 0;
    // Sumar los dígitos de la cadena
    for (var i = 0; i < cadenaNumero.length; i++) {
        suma += parseInt(cadenaNumero.charAt(i), 10);
    }
    return suma;
}

function calcularCompatibilidad() {
    var fecha1 = new Date(document.getElementById("fecha1").value);
    var fecha2 = new Date(document.getElementById("fecha2").value);

    // Calcular el número de la suerte para cada fecha
    var numeroSuerte1 = calcularNumeroSuerte(fecha1);
    var numeroSuerte2 = calcularNumeroSuerte(fecha2);

    // Mostrar números de la suerte de las fechas de nacimiento
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El número de la suerte para la fecha de nacimiento 1 es: <strong>${numeroSuerte1}</strong></p>`;
    resultado.innerHTML += `<p>El número de la suerte para la fecha de nacimiento 2 es: <strong>${numeroSuerte2}</strong></p>`;

    // Determinar tipo de pareja
    var tipoPareja = determinarTipoPareja(numeroSuerte1, numeroSuerte2);
    resultado.innerHTML += `<p> <strong>${tipoPareja}</strong></p>`;
}

function determinarTipoPareja(numeroSuerte1, numeroSuerte2) {
    if (numeroSuerte1 === 1 && numeroSuerte2 === 1) {
        return "Pareja complemento: Ambos buscarán ejercer el poder sobre el otro, pero encontrarán formas de salir adelante utilizando sus diferencias como ventajas.";
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 2) || (numeroSuerte1 === 2 && numeroSuerte2 === 1)) {
        return "Pareja conexión: Se apoyarán y acompañarán mutuamente, transmitiéndose seguridad para alcanzar sus objetivos.";
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 3) || (numeroSuerte1 === 3 && numeroSuerte2 === 1)) {
        return "Pareja conexión: Llevarán una relación con iniciativas, buscando nuevos desafíos y conectando con la diversión y el disfrute.";
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 4) || (numeroSuerte1 === 4 && numeroSuerte2 === 1)) {
        return "Pareja complemento: Excelentes compañeros de salidas y para divertirse juntos. Ambos creativos y comunicativos. Uno de ustedes hará que el otro se comprometa para llegar a establecer una pareja sólida y con el tiempo, una familia. Han aprendido a comunicarse mejor aunque falta pulir algunos detalles. Tuvieron una racha de días malos en su relación pero lo mejor está por venir.";    
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 5) || (numeroSuerte1 === 5 && numeroSuerte2 === 1)) {
        return "Pareja complemento: Mucha atracción entre ustedes, pero deberán esforzarse para lograr algún acuerdo. Llegarán a vivir grandes romances aunque la convivencia no siempre sea la mejor. Logren un equilibrio entre ambos y una vez que lo encuentren, pasarán momentos maravillosos juntos.";
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 6) || (numeroSuerte1 === 6 && numeroSuerte2 === 1)) {
        return "Pareja conexión: Buena compatibilidad. Mucho amor y cariño. Aunque alguno de los dos está aportando un poco más de romance que el otro, cuidado ahí porque puede generar conflictos que dañen la energía positiva que poseen. Tómense un break para disfrutar de ustedes mismos, no dejen que la rutina dañe el amor que se tienen.";
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 7) || (numeroSuerte1 === 7 && numeroSuerte2 === 1)) {
        return "Pareja complemento: Son considerados una pareja incompatible por algunas personas de su círculo social, ya se imaginarán por quienes, aunque no están muy alejados de la realidad. En esta relación deberán trabajar mucho para desarrollar sus puntos fuertes si quieren mantenerse juntos y reconstruir su confianza por las situaciones que han logrado sobrepasar. Consideren que es mejor para ambos, de manera individual y si lograrán utilizar las situaciones  a su favor para ser la pareja complemento que tanto desean.";
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 8) || (numeroSuerte1 === 8 && numeroSuerte2 === 1)) {
        return "Pareja complemento: Esta unión es muy aconsejable para relaciones comerciales, más que de parejas. Mejor hagan business juntos JAJAJ no se crean, aunque tampoco está mal la idea, pero no siempre sale bien. De todas maneras, uno de ustedes es el que podrá poner freno a ciertas actitudes egoístas del otro, pero tomando sus límites para no afectar su salud emocional.";
    } else if ((numeroSuerte1 === 1 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 1)) {
        return "Pareja complemento: No son muy compatibles en un principio; ya que la energía de uno de ustedes es muy seductora, es decir, que tiene una personalidad muy 'coqueta' y servicial (no siempre es apropósito, aunque algunas otras veces sí lo es, cuidado ahí), por lo que el otro pide mayor atención y ser centro en la relación (como debe ser por ambas partes, algo recíproco). Pero la agilidad mental de ambos los llevará a compartir ciertos intereses donde su relación se fortalecerá.";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 2) || (numeroSuerte1 === 5 && numeroSuerte2 === 5)) {
        return "Pareja conexión: En principio, establecerán una relación de armonía que los hará sentir muy bien pero con el tiempo no se verán incentivados. Para sostener la relación, deberán tener otras actividades en las que se acompañen pero no compartan y, por otro lado, trabajar en conjunto para que la relación no se estanque.";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 3) || (numeroSuerte1 === 3 && numeroSuerte2 === 2)) {
        return "Pareja complemento: Relación de baja compatibilidad de pareja. Uno de ustedes necesita un apoyo que el otro no está dispuesto a dar porque no quiere perder su libertad. Se entenderán más compartiendo actividades que los hagan sentir plenos. No dejen que todo el estrés abrume su amor.";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 4) || (numeroSuerte1 === 4 && numeroSuerte2 === 2)) {
        return "Pareja conexión: Relación complicada para pareja. Deberán evitar estancarse como pareja, comparten ciertos intereses en común pero, ¿por qué no los disfrutan juntos? Para cada problema encuentren una solución y no a cada solución le generen otro problema.";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 5) || (numeroSuerte1 === 5 && numeroSuerte2 === 2)) {
        return "Pareja complemento: Deténganse un momento y reflexionen, ¿con quién se encuentra mi lealtad? ¿Qué es lo que quiero para mi vida? No, no te estás haciendo ideas, podría haber alguna infidelidad. No son compatibles como pensaban y es difícil sostener esta relación en el tiempo. Alguno de los dos debe sentir esa sensación de inseguridad para establecer un vínculo duradero. Si en serio quieren que la relación funcione, deben saber que es lo que realmente quieren. Si no lo saben no le hagan perder el tiempo al otro ni le causen dolor. Una vez sepan a donde quieren dirigir su vida todo parecerá más sencillo y no tendrán que estar sintiendo esa angustia constante de ¿realmente me amará?";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 6) || (numeroSuerte1 === 6 && numeroSuerte2 === 2)) {
        return "Pareja complemento: Buena relación, siempre y cuando priorices tus sentimientos y tu propia libertad. Sí, te hablo a ti. Te estás volviendo muy dependiente de tu pareja. Ten cuidado ahí, te va a costar mucho salir si sigues por el mismo camino.";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 7) || (numeroSuerte1 === 7 && numeroSuerte2 === 2)) {
        return "Pareja complemento: Energías muy dispares para un vínculo. Un encuentro que es muy difícil que perdure en el tiempo, pero no imposible. Antes de seguir avanzando en su relación, procuren tener buenos cimientos. No queremos que todo acabe en un derrumbe.";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 8) || (numeroSuerte1 === 8 && numeroSuerte2 === 2)) {
        return "Pareja conexión: Decidirán si llevan la relación a otro nivel. Ustedes saben sobre que hablo. Tomen una buena decisión, no apresurada. De esto dependerá su futuro.";
    } else if ((numeroSuerte1 === 2 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 2)) {
        return "Pareja conexión: Establecerán un vínculo en que ambos se sentirán cómodos. Se adaptarán, se comprenderán y buscarán la forma de compartir. Una buena racha se aproxima. ¿A caso acaban de encontrar la fórmula para la felicidad?";
    } else if ((numeroSuerte1 === 3 && numeroSuerte2 === 3) || (numeroSuerte1 === 6 && numeroSuerte2 === 6)) {
        return "Pareja conexión: Gran unión amorosa de pareja que logrará una base familiar muy fuerte. Establecerán vínculos estables que no se cortarán fácilmente. Los dos estarán dispuestos a priorizar la relación y la familia.";
    } else if ((numeroSuerte1 === 3 && numeroSuerte2 === 4) || (numeroSuerte1 === 4 && numeroSuerte2 === 3)) {
        return "Pareja complemento: Relación en la que deberán poner mucho de sí para lograr una convivencia o vida cotidiana juntos. Uno de ustedes deberá flexibilizar al otro y el otro transmitir orden en la vida de ambos. De esta manera, podrán llegar a un vínculo complementario.";
    } else if ((numeroSuerte1 === 3 && numeroSuerte2 === 5) || (numeroSuerte1 === 5 && numeroSuerte2 === 3)) {
        return "Pareja conexión: Se divierten mucho juntos. Han tenido días de gloria. Su romance ha sido como de película. Pero en toda película, el caos tiende a arruinarlo todo. Mucho disfrute aunque poca estabilidad. No descuiden algunas áreas de su relación por darle prioridad a otras. Hablen de los problemas que tienen y resuélvanlos antes de que comiencen a acumularse o alguno de ustedes explotará y su relación podría terminar.";
    } else if ((numeroSuerte1 === 3 && numeroSuerte2 === 6) || (numeroSuerte1 === 6 && numeroSuerte2 === 3)) {
        return "Pareja complemento: Una compatibilidad donde la energía de uno aportará a las iniciativas y creatividad, mientras el otro dará estabilidad y orden. Excelentes para la convivencia.";
    } else if ((numeroSuerte1 === 3 && numeroSuerte2 === 7) || (numeroSuerte1 === 7 && numeroSuerte2 === 3)) {
        return "Pareja complemento: Esta unión es complicada. Uno es solitario y el otro muy sociable. Introvertido con extrovertido a veces puede parecer buena idea pero, ¿hasta qué punto? Deberán tratar de encontrar puntos en común para conectarse y potenciarlos. Y entre esos puntos están los juegos. Y no, no hablo de juegos de mesa...";
    } else if ((numeroSuerte1 === 3 && numeroSuerte2 === 8) || (numeroSuerte1 === 8 && numeroSuerte2 === 3)) {
        return "Pareja complemento: Son una pareja magnética, se atraerán fácilmente y luego tendrán que buscar otro tipo de conexiones para mantener la relación. Romance con mucha intensidad. ¡Wow! No tendrán que batallar tanto, casi podría asegurar que son perfectos el uno para el otro. Eso sí, hagan una tormenta dentro de un vaso de agua, sobre todo tú. Sí tú. Sabes de quien de los dos estoy hablando.";
    } else if ((numeroSuerte1 === 3 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 3)) {
        return "Pareja conexión: Relación profunda. Buscarán la forma de entenderse y complementarse porque disfrutan de estar juntos. Compartirán en su mayoría los mismos gustos y con lo que no, usarán la creatividad para atesorarlo aunque no sea mucho de su agrado. Mucha pasión en la relación, aunque tendrán algunos tropiezos.";
    } else if ((numeroSuerte1 === 4 && numeroSuerte2 === 4) || (numeroSuerte1 === 8 && numeroSuerte2 === 8)) {
        return "Pareja conexión: ¿Cómo es posible que teniendo tan buena química estén dejado que los problemas se apoderen de la relación?  Es hora de tomar las riendas antes de que todo se salga de control.";
    } else if ((numeroSuerte1 === 4 && numeroSuerte2 === 5) || (numeroSuerte1 === 5 && numeroSuerte2 === 4)) {
        return "Pareja conexión: Esta relación no es compatible, en un principio. Uno quiere estabilidad pero el otro está indeciso porque quiere seguir con su libertad. Si ambos se entregan y están dispuestos a aprender uno del otro, lograrán un vínculo que les permita entenderse y complementarse.";
    } else if ((numeroSuerte1 === 4 && numeroSuerte2 === 6) || (numeroSuerte1 === 6 && numeroSuerte2 === 4)) {
        return "Pareja complemento: Relación muy estable sobre la base de puro sentimiento. Camino lleno de obstáculos que han logrado superar, ¡bien hecho! Sigan así.";
    } else if ((numeroSuerte1 === 4 && numeroSuerte2 === 7) || (numeroSuerte1 === 7 && numeroSuerte2 === 4)) {
        return "Pareja conexión: Sus energías buscan caminos distintos pero si ambos coinciden sentimentalmente encontrarán la forma de estar juntos y aprender el uno del otro. Ya dependerá de ustedes el continuar o abrirse paso a nuevos horizontes.";
    } else if ((numeroSuerte1 === 4 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 4)) {
        return "Pareja complemento: Buena compatibilidad. Aportarán sus energías para lograr estar juntos. A alguien le molesta mucho su relación, deberían tener cuidado con eso.";
    } else if (numeroSuerte1 === 5 && numeroSuerte2 === 5) {
        return "Pareja conexión: Relación sobre la base de libertad, movimiento y locura. Se comprenderán mutuamente y tendrán muy buen entendimiento en diversos ámbitos de su vida. Romances muy apasionados, pero también fugaces. Les costará la estabilidad.";
    } else if ((numeroSuerte1 === 5 && numeroSuerte2 === 6) || (numeroSuerte1 === 6 && numeroSuerte2 === 5)) {
        return "Pareja complemento: Buena relación, siempre y cuando priorices tus sentimientos y tu propia libertad. Sí, te hablo a ti. Te estás volviendo muy dependiente de tu pareja. Ten cuidado ahí, te va a costar mucho salir si sigues por el mismo camino.";
    } else if ((numeroSuerte1 === 5 && numeroSuerte2 === 7) || (numeroSuerte1 === 7 && numeroSuerte2 === 5)) {
        return "Pareja complemento: Energías muy dispares para un vínculo. Un encuentro que es muy difícil que perdure en el tiempo, pero no imposible. Antes de seguir avanzando en su relación, procuren tener buenos cimientos. No queremos que todo acabe en un derrumbe.";
    } else if ((numeroSuerte1 === 5 && numeroSuerte2 === 8) || (numeroSuerte1 === 8 && numeroSuerte2 === 5)) {
        return "Pareja conexión: Decidirán si llevan la relación a otro nivel. Ustedes saben sobre que hablo. Tomen una buena decisión, no apresurada. De esto dependerá su futuro.";
    } else if ((numeroSuerte1 === 5 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 5)) {
        return "Pareja conexión: Establecerán un vínculo en que ambos se sentirán cómodos. Se adaptarán, se comprenderán y buscarán la forma de compartir. Una buena racha se aproxima. ¿A caso acaban de encontrar la fórmula para la felicidad?";
    } else if (numeroSuerte1 === 6 && numeroSuerte2 === 6) {
        return "Pareja conexión: Gran unión amorosa de pareja que logrará una base familiar muy fuerte. Establecerán vínculos estables que no se cortarán fácilmente. Lo dos estarán dispuestos a priorizar la relación y la familia.";
    } else if ((numeroSuerte1 === 6 && numeroSuerte2 === 7) || (numeroSuerte1 === 7 && numeroSuerte2 === 6)) {
        return "Pareja conexión: No son muy compatibles inicialmente. Uno pondrá toda su energía queriendo conformar rápidamente una relación amorosa y familiar. Pero deberá respetar los tiempos y estilo de vida del otro. Relación de construcción lenta pero estable.";
    } else if ((numeroSuerte1 === 6 && numeroSuerte2 === 8) || (numeroSuerte1 === 8 && numeroSuerte2 === 6)) {
        return "Pareja complemento: Muy buena compatibilidad. Acá se unen las energías del amor y la estructura. Se establecerán relaciones estables; con un equilibrio entre lo material y amoroso. Todo marchará bien, no se preocupen. Solo priorícense el uno al otro.";
    } else if ((numeroSuerte1 === 6 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 6)) {
        return "Pareja complemento: Se sentirán increíblemente bien juntos. Querrán compartir todo lo que hagan sobre todo si se trata de ayudar y dar amor. Se potenciarán y animarán para lograr una gran unión. ¡Enhorabuena!";
    } else if (numeroSuerte1 === 7 && numeroSuerte2 === 7) {
        return "Pareja conexión: Gran unión, se elegirán continuamente. Se respetan entre ellos, se dan el tiempo necesario para que la relación crezca y se fortalezca sin presiones.";
    } else if ((numeroSuerte1 === 7 && numeroSuerte2 === 8) || (numeroSuerte1 === 8 && numeroSuerte2 === 7)) {
        return "Pareja complemento: Relación de gran armonía, lo que hace parecer que también sean pareja conexión. Ambos necesitarán un equilibrio entre lo amoroso y lo que desean lograr dentro y fuera de la pareja. Se necesitan y disfrutan juntos. Cuidado con las decisiones que toman fuera de la relación. Disfruten esta etapa de su vida.";
    } else if ((numeroSuerte1 === 7 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 7)) {
        return "Pareja conexión: Muy buen vínculo. Viven el amor como un aprendizaje para su crecimiento. Se respetan y siempre buscarán la forma de estar juntos. Quien los viera pensaría que son la pareja perfecta, aunque sabemos que han tenido que nadar contra la marea. Lo más difícil está pasando. No desistan. Trabajen en equipo y todo estará bien.";
    } else if (numeroSuerte1 === 8 && numeroSuerte2 === 8) {
        return "Pareja conexión: Vínculo de mucho poder. Deberán encontrar un equilibrio en la relación y darle el lugar a ese amor que seguramente sienten pero con el que les es difícil conectar. Uno de ustedes está desanimado y siente que no puede más. El otro tiene esperanza. Malos días para esta pareja, pero, ¿no dicen que después de la tormenta viene la calma?";
    }  else if ((numeroSuerte1 === 8 && numeroSuerte2 === 9) || (numeroSuerte1 === 9 && numeroSuerte2 === 8)) {
        return "Pareja complemento: Se entenderán y querrán saber lo que el otro necesita para poder dárselo. Armonía y equilibrio en la relación. O eso parece. No debes guardarte lo que te molesta, no está mal expresar tus sentimientos y emociones. Dile a tu pareja que escuche lo que tienes que decir. No se falten al respeto, eviten los reclamos.";
    } else if ((numeroSuerte1 === 9 && numeroSuerte2 === 9)) {
        return "Pareja complemento: Muy linda relación. Sin embargo, ambos siempre estarán pendientes de lo que necesitan los otros. No les será fácil conformar una pareja. Su unión será más para ayudar a los demás que para establecer un vínculo entre ellos. No prioricen otras situaciones por sobre su relación. Y no minimicen los sentimientos del otro.";
    } else {
        return "Las compatibilidades de las parejas se basan en los números de la suerte de cada uno. Por favor, proporciona dos números del 1 al 9 para determinar el tipo de relación.";
    }
}