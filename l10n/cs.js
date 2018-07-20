OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Nastavení ochrany proti útokům hrubou silou",
    "Whitelist IPs" : "IP adresy ze kterých je umožněn přístup",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Brute Force Ochrana slouží k ochraně Nextcloud serveru proti pokusům o uhádnutí uživatelského hesla. Kromě zřejmého útoku \"vyzkoušíme všechna běžně používaná hesla\" umí aplikace ochránit i před sofistikovanějšími útoky, jako resetování hesla pomocí formuláře, nebo zjištění tokenu aplikace.\n\nPokud aplikace zaregistruje útok, na 24 hodin zpomalí odesílání požadavků z útočníkovo IP adresy na stejnou API.\n\nS touto aplikací může administrátor vyloučit IP adresu nebo jejich rozsah z této ochrany. To může být užitečné k testovacím účelům nebo pokud více uživatelů používá stejnou IP adresu.",
    "Brute-force IP whitelist" : "IP whitelist pro ochranu proti útokům hrubou silou",
    "Add new whitelist" : "Přidat nový seznam těch, kterým je umožněn přístup"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
