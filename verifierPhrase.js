function verifierPhrase(phrase) {
    if (phrase.toLowerCase().includes("bonjour")) { // Convertit la phrase en minuscules
        return "✅ Mot trouvé";
    } else {
        return "❌ Mot non trouvé";
    }
}

module.exports = verifierPhrase;
 //tekou phrase en entre , tchouf ken bonjour mawnjouda ou nn 