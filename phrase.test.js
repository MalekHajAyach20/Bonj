const verifierPhrase = require('./verifierPhrase');

test('Le mot "bonjour" est dans la phrase', () => {
    expect(verifierPhrase("Bonjour tout le monde")).toBe("✅ Mot trouvé");
});

test('Le mot "bonjour" n\'est pas dans la phrase', () => {
    expect(verifierPhrase(" tout le monde")).toBe("❌ Mot non trouvé");
});
