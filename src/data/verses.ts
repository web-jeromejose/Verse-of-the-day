export type Verse = {
  day: number;
  ref: string;
  version: "NIV" | "NKJV";
  text: string;
  theme: string;
  why: string;
  explain: string;
  today: string;
  fact: string;
  question: string;
  challenge: string;
};

// Source: "30 Famous Bible Verses Explained" reading plan by Life.Church (Bible App / YouVersion).
// Verse text is NIV unless noted. Explanations rewritten in Taglish.
export const verses: Verse[] = [
  {
    day: 1,
    ref: "Genesis 1:1",
    version: "NIV",
    text: "In the beginning God created the heavens and the earth.",
    theme: "May Purpose Ka",
    why: "Ito ang pinaka-unang words ng pinaka-popular na libro sa buong human history. Literal na opening line ng Bible.",
    explain:
      "Noong unang panahon, maraming origin stories ang ibang kultura — at sa karamihan, aksidente lang daw ang mundo, at ang tao ay pinagkakatuwaan o ginagamit lang ng mga diyos. Pero iba ang kwento ng Bible. Dito, si God ay maingat na nag-design ng mundo para mag-flourish, at sinadya Niyang gawin ang tao bilang partner Niya. Hindi ito science textbook — ang point niya: hindi ka mistake. Mahalaga ka kay God at may purpose ka.",
    today:
      "Sa panahon ng likes, views at comparison sa social media, ang dali maramdaman na 'wala akong kwenta.' Pero bago ka pa nag-post ng kahit ano, may halaga ka na. Hindi algorithm ang nagde-define sa'yo — ang Creator mo.",
    fact: "Ang Hebrew word para sa 'created' dito ay 'bara' — at sa buong Hebrew Bible, si God lang ang ginagamitang subject ng word na 'yan. Ang Genesis sa Hebrew ay tinatawag na 'Bereshit,' ibig sabihin 'In the beginning.'",
    question: "Kailan mo huling naramdaman na parang hindi ka mahalaga? Ano ang sasabihin ng verse na ito sa'yo noon?",
    challenge: "Isulat ang isang bagay na gusto mong gawin ngayong buwan na tingin mo ay part ng purpose mo.",
  },
  {
    day: 2,
    ref: "Exodus 14:14",
    version: "NIV",
    text: "“The Lord will fight for you; you need only to be still.”",
    theme: "Hindi Ka Nag-iisa sa Laban",
    why: "Favorite ito ng mga taong may anxiety, takot o uncertainty. Simple pero malakas ang reminder: hindi ka mag-isa sa laban.",
    explain:
      "Kakalabas lang ng Israelites sa pagiging alipin sa Egypt — tapos biglang naipit sila: dagat sa harap, army sa likod. Imagine mo 'yung panic! Tapos sabi ni Moses: 'Ang Lord ang lalaban para sa inyo. Kailangan n'yo lang tumahimik.' Hindi sinasabi ng verse na huwag ka nang kumilos kahit kailan. Pero may mga moment na ang tamang move ay mag-trust at hayaang si God ang kumilos.",
    today:
      "Deadline sa work, bayarin, problema sa pamilya — minsan feeling mo ikaw lang ang may hawak ng lahat. Huminga ka muna. Hindi mo kailangang i-solve lahat ngayong gabi. Kasama mo si God, at hindi pa tapos ang kwento mo.",
    fact: "Ang Hebrew word na isinalin bilang 'be still' ay pwede ring ibig sabihin ay 'be silent' o 'tumahimik.' Parang sinasabing: 'Tahan na, Ako na ang bahala.'",
    question: "Anong 'laban' ang hawak mo ngayon na parang ikaw lang ang lumalaban?",
    challenge: "Mag-5 minutes ng tahimik ngayong araw — walang phone. I-surrender kay God 'yung isang alalahanin mo.",
  },
  {
    day: 3,
    ref: "Psalm 23:1",
    version: "NIV",
    text: "The Lord is my shepherd, I lack nothing.",
    theme: "May Nag-aalaga sa'yo",
    why: "Nagbibigay ito ng comfort at assurance na si Lord ang ating pastol — Siya ang gumagabay, nagpo-protect at kasama natin.",
    explain:
      "Galing ito sa Psalms, isang ancient collection ng mga kanta at tula. Ano ba ang trabaho ng shepherd? Inaalagaan niya ang tupa, ginagabayan, sinasamahan at pinoprotektahan. Sabi ni Jesus, Siya ang Good Shepherd. At ang 'I lack nothing' — hindi ibig sabihing makukuha mo lahat ng gusto mo, kundi hindi ka pababayaan sa kung ano talaga ang kailangan mo.",
    today:
      "Kahit gaano kadilim ang season mo — nawalan ng trabaho, may sakit sa bahay, malayo sa pamilya bilang OFW — may Shepherd na hindi umaalis sa tabi mo.",
    fact: "Ang Psalm 23 ay attributed kay David — na mismong shepherd boy bago naging hari. Kaya alam niya talaga ang ibig sabihin ng pag-aalaga ng tupa! Isa rin ito sa pinaka-madalas basahin sa mga lamay at libing.",
    question: "Saang area ng buhay mo kailangan mong maramdaman ngayon na may nag-aalaga sa'yo?",
    challenge: "Basahin ang buong Psalm 23 (6 verses lang!) bago matulog ngayong gabi.",
  },
  {
    day: 4,
    ref: "Psalm 46:1",
    version: "NIV",
    text: "God is our refuge and strength, an ever-present help in trouble.",
    theme: "Safe Place",
    why: "Napakaraming tao na ang na-comfort nito sa panahon ng sakit at takot. Short pero powerful: si God ay protector at source of strength natin.",
    explain:
      "Sa Psalm 46, after ng line na ito, dine-describe ang mga lindol, bagyo at gulo ng mga bansa. Sa ancient world, ang 'refuge' ay parang walled city o kuta — safe place tuwing may giyera. Kaya sabihing si God ang refuge mo ay sabihing Siya ang matatakbuhan mo kapag magulo ang lahat. At 'strength' — hindi ka lang Niya itatago, bibigyan ka pa Niya ng lakas para harapin ito.",
    today:
      "Bilang Pinoy, sanay tayo sa bagyo, baha at lindol. Pero may mga 'bagyo' rin sa loob — anxiety, heartbreak, burnout. Sa lahat ng 'yan, may matatakbuhan ka na hindi gumuguho.",
    fact: "Ang Psalm 46 ang nag-inspire kay Martin Luther na isulat ang sikat na hymn na 'A Mighty Fortress Is Our God' noong 1529 — isa sa pinaka-kilalang hymns sa history.",
    question: "Saan ka usually tumatakbo kapag stressed ka — phone, pagkain, tulog? Paano kung kay God muna?",
    challenge: "Next time na ma-overwhelm ka, ulitin nang dahan-dahan: 'God, Ikaw ang refuge at lakas ko.'",
  },
  {
    day: 5,
    ref: "Psalm 119:105",
    version: "NIV",
    text: "Your word is a lamp for my feet, a light on my path.",
    theme: "Liwanag sa Daan",
    why: "Favorite ito kasi pinapakita kung paano tayo ginagabayan ng Word ni God (ang Bible). Madalas itong i-quote ng mga taong nagde-decide sa buhay.",
    explain:
      "Noong isinulat ito, ang 'Your word' ay ang Scriptures noon — 'yung tinatawag nating Old Testament ngayon. Para sa writer, ang Word ni God ay reminder kung sino Siya at guide kung paano mamuhay. Ngayon, iniisip natin ang buong Bible na nagtuturo kay Jesus. Ang picture ng lampara: hindi ipinapakita ni God ang buong mapa ng buhay mo — pero sapat ang liwanag para sa susunod na hakbang.",
    today:
      "Ang dami nating naririnig na opinion — TikTok, kapitbahay, group chat, mga 'expert.' Sa gitna ng ingay, may isang source ng truth na pwede mong sandalan. Isa sa pinaka-magandang paraan para makilala si Jesus ay basahin ang Word Niya.",
    fact: "Ang Psalm 119 ang pinaka-mahabang chapter sa Bible — 176 verses! Isa itong acrostic poem: 22 sections para sa 22 letters ng Hebrew alphabet, tig-8 verses bawat isa. At ang ancient oil lamp ay maliit na clay lamp na ilang hakbang lang ang naiilawan.",
    question: "Anong desisyon ang hinaharap mo ngayon na kailangan mo ng 'liwanag'?",
    challenge: "Pumili ng oras araw-araw (kahit 5 mins) para magbasa ng Bible ngayong linggo.",
  },
  {
    day: 6,
    ref: "Proverbs 3:5–6",
    version: "NIV",
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    theme: "Full Trust",
    why: "Isa ito sa pinaka-quoted sa Bible kasi para ito sa sinumang nalilito. Clear direction kung paano mamuhay with faith kapag magulo.",
    explain:
      "Ang Proverbs ay collection ng wisdom sayings. Itinuturo dito na ang trust ay hindi 'pa-minsan-minsan' o 'half-half.' 'With all your heart' — buong-buo, kahit hindi mo maintindihan ang sitwasyon. 'Lean not on your own understanding' — limited ang perspective natin; ang mukhang matalinong desisyon ngayon ay pwedeng hindi pala ang best. At 'submit to Him in all your ways' — hindi lang sa Linggo, kundi sa trabaho, relasyon, pera, lahat.",
    today:
      "Course na kukunin, trabaho abroad o dito, sasagutin ba siya o hindi — hindi mo kailangang i-figure out lahat mag-isa. Kapag binigay mo kay God ang buong tiwala mo at sumunod ka, gagabayan ka Niya sa tama.",
    fact: "Karamihan ng Proverbs ay attributed kay King Solomon. Ayon sa 1 Kings 4:32, nakapagsabi siya ng 3,000 proverbs at 1,005 na kanta!",
    question: "Saang part ng buhay mo ikaw pa rin ang 'boss' at hindi mo pa nabibigay kay God?",
    challenge: "Isulat ang isang desisyon na pinag-iisipan mo, at ipag-pray ito araw-araw ngayong linggo.",
  },
  {
    day: 7,
    ref: "Isaiah 40:31",
    version: "NIV",
    text: "…but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    theme: "Bagong Lakas",
    why: "Mahal ito ng marami dahil sa imagery at promise. Madalas itong i-quote ng mga pagod, discouraged o kailangan ng fresh energy.",
    explain:
      "Hindi umiiwas ang Bible sa mabibigat na tanong tulad ng 'Bakit hinahayaan ni God ang suffering?' Ang Isaiah ay isinulat para sa mga taong nasa matinding krisis — sinakop ang lungsod nila at malapit na silang ipatapon sa ibang bansa. Pero dito, may pangako: ang umaasa kay Lord ay bibigyan ng bagong lakas. Hindi dahil kaya mo, kundi dahil Siya ang nagbibigay.",
    today:
      "Pagod ka na ba sa commute, sa trabaho, sa pag-aalaga sa pamilya? Hindi ka nag-iisa. Kayang i-renew ni God ang lakas mo ngayon — one step at a time.",
    fact: "Sa Oscar-winning na pelikulang 'Chariots of Fire' (1981), binabasa ng Olympic runner na si Eric Liddell ang Isaiah 40 sa simbahan — kasama ang 'they will run and not grow weary.'",
    question: "Ano ang pinaka-nakakapagod sa'yo ngayon? Ano ang isang paraan para 'umasa kay Lord' dito?",
    challenge: "Magpahinga nang intentional ngayong araw. Ang rest ay hindi kahinaan.",
  },
  {
    day: 8,
    ref: "Jeremiah 29:11",
    version: "NIV",
    text: "“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”",
    theme: "Hindi Ka Nakalimutan",
    why: "Paalala ito na hindi tayo kinalimutan ni God. Kumikilos pa rin Siya para sa ikabubuti natin, kahit mahirap ang buhay.",
    explain:
      "Isinulat ito para sa mga taong nasa krisis — sinakop sila ng mas malakas na bansa at dinala bilang exiles malayo sa bahay. Nawalan sila ng mahal sa buhay, tahanan, at muntik pa ng identity. Tanong nila: 'Nandiyan ba talaga si God? Nakikita ba Niya kami?' Ang sagot ng verse: oo, nakikita Niya ang sakit mo at may plano Siya for good. Note: para sa isang grupo ito orihinal na isinulat, at hindi agad-agad ang katuparan — pero pinapakita nito ang puso ni God.",
    today:
      "Na-reject sa job application? Hindi natuloy ang plano? Feeling mo stuck ka habang ang iba ay umuusad? Hindi ka invisible kay God. Malapit pa rin Siya at may pakialam Siya.",
    fact: "Ito ay bahagi ng sulat ni Jeremiah sa mga exiles sa Babylon. Sa verse 10, sinabi ni God na tatagal ang exile ng 70 years — kaya ang 'hope and a future' ay pangakong pang-matagalan, hindi instant.",
    question: "Kailan mo naramdaman na parang nakalimutan ka ni God? Paano ka Niya inalalayan noon?",
    challenge: "Isulat ang 3 beses na nakita mong tinulungan ka ni God dati. Balikan ito kapag nagdududa ka.",
  },
  {
    day: 9,
    ref: "Lamentations 3:22–23",
    version: "NIV",
    text: "Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    theme: "Bagong Umaga",
    why: "Na-inspire nito ang mga kanta at panalangin sa loob ng maraming henerasyon, kasi para ito sa mga taong feeling nila nasa rock bottom na sila.",
    explain:
      "Ang Lamentations ay basically isang libro ng pagluluksa. Napapalibutan ang writer ng pagkawasak at kawalan ng pag-asa. Pero sa gitna ng dilim, may sinabi siyang nakakagulat: nandito pa rin ang love ni God. Bago ang mercy Niya tuwing umaga. Hindi ito denial — hinarap niya ang sakit, pero pinili pa rin niyang kumapit sa pag-asa.",
    today:
      "Nagkamali ka kahapon? Nag-away kayo? Bumagsak sa exam? Bagong araw ngayon, at bagong mercy din. Hindi pa ubos ang awa ni God para sa'yo.",
    fact: "Ang verses na ito ang nag-inspire sa sikat na hymn na 'Great Is Thy Faithfulness' (1923). Fun fact pa: ang Lamentations chapter 3 ay may 66 verses — triple acrostic ito ng 22-letter Hebrew alphabet!",
    question: "Ano ang gusto mong i-'reset' ngayong umaga?",
    challenge: "Bukas pag-gising mo, bago mag-check ng phone, sabihin: 'Salamat, Lord, sa bagong mercy ngayong araw.'",
  },
  {
    day: 10,
    ref: "Micah 6:8",
    version: "NIV",
    text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
    theme: "Ano ba Talaga ang Gusto ni God?",
    why: "Isa ito sa pinaka-kilalang summary ng gusto ni God sa atin. Madalas itong i-quote sa sermons at social justice movements.",
    explain:
      "Noong panahon ni Micah, akala ng mga tao sapat na ang 'religious checklist' — sacrifice, check; festival, check. Pero ang buhay nila? Nang-aapi sila, naghahabol ng power. Kaya diretsahan si God: ayaw Ko ng empty rituals. 'Act justly' — gawin ang tama kahit may kapalit. 'Love mercy' — maging mapagbigay ng awa, hindi lang paminsan-minsan. 'Walk humbly' — mamuhay nang malapit at mapagpakumbaba kasama Niya.",
    today:
      "Pwedeng nagsisimba ka linggo-linggo pero ang ugali sa kasambahay, sa rider, sa katrabaho? Doon din makikita ang faith. Integrity, compassion, humility — 'yan ang hinahanap ni God.",
    fact: "Si Micah ay kasabayan ni Isaiah noong 8th century BC. Siya rin ang nag-prophesy na sa Bethlehem ipapanganak ang Messiah (Micah 5:2) — mga 700 taon bago si Jesus!",
    question: "Sa tatlong ito — justice, mercy, humility — alin ang pinaka-kailangan mong i-practice?",
    challenge: "Gumawa ng isang tahimik na act of kindness ngayong araw na walang makakaalam.",
  },
  {
    day: 11,
    ref: "Luke 2:11",
    version: "NIV",
    text: "“Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.”",
    theme: "Dumating ang Pag-asa",
    why: "Ito ang puso ng Christmas story — ang announcement ng pagsilang ni Jesus, ang moment na naniniwala ang mga Christians na dumating ang pag-asa bilang isang Tao.",
    explain:
      "Ang Book of Luke ay isa sa apat na gospels (Matthew, Mark, Luke, John) na nagkukwento ng buhay ni Jesus. Kanino unang in-announce ang pagsilang Niya? Hindi sa mga hari o mayayaman — kundi sa mga simpleng shepherds sa bukid, na noon ay mababa ang tingin ng lipunan. Ibig sabihin: ang good news ay para sa lahat, lalo na sa mga ordinaryo at nakakalimutan.",
    today:
      "Sa Pilipinas, September pa lang Pasko na! Pero sa gitna ng ham, noche buena at Christmas party, ang totoong regalo: dumating si Jesus para sa'yo — hindi dahil karapat-dapat ka, kundi dahil mahal ka Niya.",
    fact: "Si Luke ay isang doktor (Colossians 4:14). Ang 'town of David' ay Bethlehem — na sa Hebrew ay ibig sabihing 'house of bread.' Bagay, kasi tinawag ni Jesus ang sarili Niya na 'Bread of Life.'",
    question: "Kung ikaw ang isa sa mga shepherd na nakarinig nito, ano ang mararamdaman mo?",
    challenge: "Ikwento sa isang kaibigan kung bakit mahalaga sa'yo si Jesus — kahit isang pangungusap lang.",
  },
  {
    day: 12,
    ref: "Matthew 5:14",
    version: "NIV",
    text: "“You are the light of the world. A town built on a hill cannot be hidden.”",
    theme: "Shine!",
    why: "Kilalang verse ito na nag-e-encourage sa followers ni Jesus na hayaang mag-shine ang faith nila para maipakita ang love ni Jesus.",
    explain:
      "Galing ito sa pinaka-sikat na teaching ni Jesus: ang Sermon on the Mount. Pansinin: hindi Niya sinabing 'subukan n'yong maging ilaw' — sinabi Niyang 'kayo ANG ilaw.' Identity ito, hindi task. Ang liwanag ay hindi tinatago; nakikita ito sa paraan ng pamumuhay mo — sa kabaitan, katapatan at pagmamahal sa kapwa.",
    today:
      "Hindi mo kailangan ng mic o stage. Ang ilaw mo ay makikita sa pagiging honest sa trabaho, pag-tulong sa classmate, o pagiging mabait online kahit toxic ang comment section.",
    fact: "Ang Sermon on the Mount ay nasa Matthew 5 hanggang 7 — at kaya mo itong basahin nang buo sa mga 15 minuto. Dito rin galing ang Lord's Prayer at ang 'Golden Rule.'",
    question: "Saan ka 'tinatago' ang ilaw mo dahil sa hiya o takot?",
    challenge: "Mag-iwan ng encouraging message sa isang tao online o offline ngayong araw.",
  },
  {
    day: 13,
    ref: "Matthew 7:1",
    version: "NIV",
    text: "“Do not judge, or you too will be judged.”",
    theme: "Puwing at Troso",
    why: "Isa ito sa pinaka-quoted na turo ni Jesus — at hinahamon tayo nito kung paano natin tinatrato ang iba.",
    explain:
      "Galing din ito sa Sermon on the Mount. Kapag sinabi ni Jesus na 'huwag manghusga,' hindi Niya sinasabing wala nang tama at mali o bawal nang maging wise sa pagpili. Ang tinutukoy Niya: ang pusong mabilis mamintas, nagmamagaling, at nakakalimot na tayo rin ay nangangailangan ng grace. Sunod na verses: bakit mo pinapansin ang puwing sa mata ng iba, pero hindi mo nakikita ang troso sa mata mo?",
    today:
      "Ang dali mag-judge sa comment section, sa chismis sa kanto, o sa group chat. Bago mag-type ng 'Ay grabe siya,' tingnan muna ang sariling puso.",
    fact: "Si Jesus ay lumaki bilang 'tekton' — karpintero o builder. Kaya hindi nakakagulat na gumamit Siya ng wood imagery: puwing (speck of sawdust) vs. troso (plank)!",
    question: "Sino ang taong madalas mong husgahan? Ano kaya ang hindi mo alam tungkol sa pinagdadaanan niya?",
    challenge: "Ngayong araw, palitan ang isang judgmental na isip ng isang prayer para sa taong 'yon.",
  },
  {
    day: 14,
    ref: "Matthew 11:28",
    version: "NIV",
    text: "“Come to me, all you who are weary and burdened, and I will give you rest.”",
    theme: "Pahinga",
    why: "Stress, exhaustion at burnout — sobrang common ngayon. Paalala ito na gusto tayong tulungan ni Jesus sa araw-araw nating laban.",
    explain:
      "Kinakausap ni Jesus ang mga taong pagod na sa religious expectations at hirap ng buhay. Marami ang naniniwala na matutuwa lang si God kung perfect nilang sinusunod ang napakaraming rules. Pero inimbitahan sila ni Jesus — at tayo: 'Lumapit kayo sa Akin.' Hindi 'ayusin mo muna ang sarili mo,' kundi 'halika, ikaw na pagod.' Ang pahingang inaalok Niya ay hindi lang tulog, kundi kapayapaan ng kaluluwa.",
    today:
      "Overtime, side hustle, hustle culture — 'Rest when you're dead' daw. Pero si Jesus mismo ang nag-iimbita: magpahinga ka sa Akin. Hindi mo kailangang buhatin lahat.",
    fact: "Sa sunod na verse, binanggit ni Jesus ang 'yoke' (pamatok) — kahoy na pinapasan ng dalawang kalabaw para magtulungan sa pag-araro. Noon, ang turo ng isang rabbi ay tinatawag ding 'yoke.' Sabi ni Jesus: 'magaan ang yoke Ko.'",
    question: "Anong 'pasan' ang gusto mong ibaba ngayon?",
    challenge: "I-off ang notifications ng 1 oras ngayong araw at gamitin ito para magpahinga o mag-pray.",
  },
  {
    day: 15,
    ref: "Matthew 22:37–39",
    version: "NIV",
    text: "Jesus replied: “‘Love the Lord your God with all your heart and with all your soul and with all your mind.’ This is the first and greatest commandment. And the second is like it: ‘Love your neighbor as yourself.’”",
    theme: "Ang Pinaka-Mahalaga",
    why: "Ito ang summary ng buong ministry ni Jesus. Tinatawag itong 'the Great Commandments' kasi ito ang core ng pamumuhay ng isang Christian.",
    explain:
      "Napakalaki ng Bible — maraming rules, kwento at turo. Kaya tinanong si Jesus: 'Alin ang pinaka-importante?' Ang sagot Niya ay dalawa pero magkadugtong: mahalin si God nang buong-buo, at mahalin ang kapwa gaya ng sarili. Lahat ng iba pang utos ay nakasabit sa dalawang ito. Kung nalilito ka sa faith, dito ka magsimula.",
    today:
      "Ang 'neighbor' mo ay hindi lang kapitbahay — kasama dito ang kakaibang katrabaho, ang nanay mong makulit, ang stranger sa jeep. Love God, love people. Simple, pero hindi madali.",
    fact: "Kinuha ni Jesus ang utos na ito sa Deuteronomy 6:5 — na sinusundan ng sikat na 'Shema' sa verse 4: 'Hear, O Israel: The Lord our God, the Lord is one.' Sa Mark 12:29, inuna pa ni Jesus banggitin ito: iisa lang ang Diyos! Ayon sa mga rabbi, may 613 commandments sa Torah — at sinummarize ni Jesus lahat sa dalawa.",
    question: "Sino ang 'neighbor' na pinaka-mahirap mong mahalin ngayon?",
    challenge: "Gumawa ng isang konkretong bagay para sa taong 'yon ngayong linggo.",
  },
  {
    day: 16,
    ref: "John 3:16",
    version: "NIV",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    theme: "Ganito Ka Kamahal",
    why: "Malamang ito ang pinaka-kilalang Bible verse sa buong mundo. Bakit? Kasi ipinapakita nito kung gaano tayo kamahal ni God.",
    explain:
      "Sinabi ito ni Jesus sa one-on-one conversation sa isang religious leader na si Nicodemus. Inihalintulad ni Jesus ang pananampalataya sa pagiging 'born again' — ipinanganak sa tubig at sa Espiritu (John 3:5). Ganito tayo kamahal: ang Diyos mismo ay nagpakita sa laman sa pamamagitan ni Jesus (1 Timothy 3:16) para iligtas tayo. 'Whoever' — kasama ka. Walang exception. At ang regalo: buhay na walang hanggan.",
    today:
      "Anuman ang nakaraan mo, anuman ang sinasabi ng iba tungkol sa'yo — kasama ka sa 'the world' na minahal ni God. Ang pag-trust kay Jesus ay pagpasok sa love na 'yon.",
    fact: "Noong 2009, isinulat ng football star na si Tim Tebow ang 'John 3:16' sa eye black niya sa isang championship game — at umabot daw sa halos 94 million ang nag-search nito sa Google! Si Nicodemus naman ay pumunta kay Jesus nang gabi, marahil para walang makakita.",
    question: "Paano magbabago ang araw mo kung talagang naniniwala kang ganito ka kamahal?",
    challenge: "I-memorize ang John 3:16 ngayong araw — sa English o Tagalog.",
  },
  {
    day: 17,
    ref: "John 14:6",
    version: "NIV",
    text: "Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.”",
    theme: "Ang Daan",
    why: "Madalas itong i-quote kasi maikli, simple at malinaw na paraan para maintindihan kung sino si Jesus.",
    explain:
      "Sinabi ito ni Jesus bago Siya mamatay. Takot at nalilito ang mga disciples, kaya kinomfort Niya sila: 'Maghahanda Ako ng lugar para sa inyo.' Tanong nila: 'Paano kami susunod?' Sagot Niya: 'Ako ang daan' — Siya mismo ang path papunta kay God. 'Ang katotohanan' — Siya ang totoong pagkakakilanlan ni God. 'Ang buhay' — Siya ang source ng tunay na buhay.",
    today:
      "Sa dami ng life coaches, self-help books at 'find yourself' advice, si Jesus ay hindi lang guide na nagtuturo ng daan — Siya mismo ang Daan para makilala si God at mabuhay nang buo.",
    fact: "Bago pa tinawag na 'Christians,' ang mga unang followers ni Jesus ay tinatawag na 'The Way' (Acts 9:2)! Isa rin ito sa pitong 'I am' statements ni Jesus sa Gospel of John.",
    question: "Naghahanap ka ba ng direksyon ngayon? Saan ka usually naghahanap?",
    challenge: "Basahin ang John 14:1–7 at i-highlight ang verse na pinaka-tumama sa'yo.",
  },
  {
    day: 18,
    ref: "Matthew 28:19–20",
    version: "NIV",
    text: "“Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.”",
    theme: "The Great Commission",
    why: "Kilala ito bilang 'the Great Commission' — ang huling bilin ni Jesus sa followers Niya pagkatapos ng resurrection at bago bumalik sa langit.",
    explain:
      "Sa pagtatapos ng buhay ni Jesus sa lupa, binigyan Niya ang followers Niya ng mission: ikwento ang Gospel sa lahat. Pansinin ang 'in the NAME' — singular, hindi 'names.' Ang Father, Son at Holy Spirit ay mga titulo ng iisang Diyos, at ang pangalan Niya ay JESUS. Kaya noong sinunod ito ng mga apostol sa Acts 2:38, nagbautismo sila 'in the name of Jesus Christ.' At ang pinaka-comforting na part? 'Kasama ninyo Ako palagi.'",
    today:
      "Hindi mo kailangang maging pastor o missionary abroad. Ang 'go' mo ay pwedeng ang opisina, ang school, ang barkada, o ang pamilya mo. Faith na ibinabahagi, hindi itinatago.",
    fact: "Sa Acts 2:38, sinabi ni Peter: 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.' At ayon sa Colossians 2:9, kay Jesus nananahan ang buong kapuspusan ng pagka-Diyos.",
    question: "Sino ang isang tao sa buhay mo na gusto mong makilala si Jesus?",
    challenge: "Ipag-pray ang taong 'yon araw-araw ngayong linggo.",
  },
  {
    day: 19,
    ref: "Romans 3:23–24",
    version: "NIV",
    text: "…for all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.",
    theme: "Pare-pareho Tayo",
    why: "Ito ang puso ng Christian faith — ipinapaliwanag ang problema nating lahat at ang pag-asang inaalok ni God kay Jesus. (Ito at ang susunod na siyam na verses ay galing lahat kay Paul!)",
    explain:
      "Hindi sugarcoated si Paul: lahat tayo ay nagkasala. Ang sin ay anumang gawa, isip o pagnanais na salungat sa identity natin bilang anak ni God. Parang nakaka-discourage, pero actually level playing field ito — walang perpekto, at walang lampas sa abot ng grace ni God. Ang good news: hindi tayo iniwan ni God sa pagkasira natin. Libre Niyang inaalok ang kapatawaran kay Jesus.",
    today:
      "Hindi mo kailangang mag-pretend na perfect ka — sa Instagram man o sa simbahan. Alam na ni God ang mga pagkukulang mo, at inaalok pa rin Niya ang grace. Forgiven, loved, made new.",
    fact: "Ang Greek word para sa 'sin' (hamartia) ay madalas iugnay sa archery — 'missing the mark,' parang palasong hindi tumama sa target. Isinulat ang Romans mga AD 57.",
    question: "Mayroon ka bang bagay na pakiramdam mo ay 'hindi na mapapatawad'?",
    challenge: "Sabihin kay God nang tapat ang isang bagay na pinagsisisihan mo, at tanggapin ang grace Niya.",
  },
  {
    day: 20,
    ref: "Romans 8:28",
    version: "NIV",
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    theme: "Walang Sayang",
    why: "Favorite ito ng mga dumadaan sa mahirap na season. Paalala na kayang magdala ni God ng mabuti kahit mula sa sakit at kalituhan.",
    explain:
      "Isinulat ito ni Paul sa mga Christians na naghihirap at natatakot. Hindi sinasabi ng verse na lahat ng nangyayari ay mabuti — totoo ang sakit, pagkawala at injustice. Ang sinasabi nito: walang nasasayang sa kamay ni God. Kaya Niyang kunin ang mabuti, masama at magulo, at gamitin para sa isang bagay na mas maganda.",
    today:
      "Breakup, failed business, nawalang mahal sa buhay — hindi 'okay lang' ang mga 'yan. Pero hindi rin iyon ang katapusan. Kayang gawan ni God ng meaning kahit ang pinaka-masakit na chapter ng kwento mo.",
    fact: "Ang Romans 8 ay nagsisimula sa 'there is now no condemnation' (walang hatol) at nagtatapos sa 'nothing can separate us from the love of God' (walang makakapaghiwalay sa atin sa pag-ibig Niya). Isa sa pinaka-powerful na chapters ng Bible!",
    question: "Anong mahirap na karanasan noon ang nakita mong ginamit ni God para sa mabuti?",
    challenge: "Ikwento sa isang tao kung paano ka inalalayan ni God sa isang mahirap na panahon.",
  },
  {
    day: 21,
    ref: "Romans 12:2",
    version: "NIV",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.",
    theme: "Huwag Basta Sumabay",
    why: "Paalala ito na ang pagsunod kay Jesus ay hindi tungkol sa pakikisabay, kundi sa pagpapabago ni God mula sa loob.",
    explain:
      "Dalawang option ang ipinakita ni Paul. 'Conform' — hayaang ang values at habits ng mundo ang humubog sa'yo. O 'be transformed' — hayaang baguhin ni God ang perspective, attitude at actions mo. Ang renewal na ito ay hindi lang positive thinking o willpower. Ito ay hayaang ilipat ni God ang pananaw mo para makita mo ang buhay sa mata Niya.",
    today:
      "Trends, peer pressure, 'Ganyan talaga dito,' 'Lahat naman ginagawa 'yan' — ang dali sumabay sa agos. Pero ang tunay na pagbabago ay nagsisimula sa isip. Ano ang pinapakain mo sa isip mo araw-araw?",
    fact: "Ang Greek word para sa 'transformed' ay 'metamorphoō' — dito galing ang English word na 'metamorphosis,' gaya ng uod na nagiging paru-paro. Parehong word ang ginamit sa Transfiguration ni Jesus!",
    question: "Saang area ng buhay mo ikaw 'sumasabay lang sa agos' kahit alam mong hindi tama?",
    challenge: "Mag-unfollow ng isang account na hindi nakakabuti sa isip mo.",
  },
  {
    day: 22,
    ref: "1 Corinthians 13:4–7",
    version: "NIV",
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
    theme: "Ito ang Tunay na Pag-ibig",
    why: "Isa ito sa pinaka-popular na description ng love sa history. Binabasa sa kasal, kinakanta, at itinatangi dahil sa larawan nito ng tunay na pag-ibig.",
    explain:
      "Surprise: hindi ito tungkol sa romantic love! Isinulat ito ni Paul sa isang church na puno ng away — nagtatalo, nagko-compete, at nakakalimutan ang point ng pagsunod kay Jesus. Kaya pinaalala niya ang pinaka-mahalaga: love. Ang love na dine-describe dito ay hindi feelings — ito ay choice at action araw-araw. Patient, kind, hindi nagbibilang ng kasalanan ng iba.",
    today:
      "Subukan mo: palitan ang 'love' ng pangalan mo. 'Si ___ ay patient, si ___ ay kind, si ___ ay hindi madaling magalit...' Medyo nakaka-tama, 'di ba? Ito ang love na ipinakita ni Jesus — at kayang palaguin sa'yo.",
    fact: "Ang Greek word dito para sa love ay 'agapē' — selfless, unconditional na pag-ibig. Ang Corinth ay mayamang port city na kilala sa pagiging mapagmataas at magulo — kaya swak ang bilin ni Paul.",
    question: "Sa listahang ito, alin ang pinaka-mahirap para sa'yo ngayon?",
    challenge: "Pumili ng isang katangian (hal. patience) at i-practice ito sa isang tao ngayong araw.",
  },
  {
    day: 23,
    ref: "2 Corinthians 5:17",
    version: "NIV",
    text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    theme: "Fresh Start",
    why: "Mahal ito ng tao dahil tinutugunan nito ang malalim nating pagnanais para sa bagong simula.",
    explain:
      "Hindi self-improvement o paglilinis lang ng ilang bad habits ang tinutukoy ni Paul. Ito ay buong-buhay, inside-out na pagbabago. Ang 'in Christ' ay pagiging Kanya — naka-ugat sa love Niya at hinuhubog ng grace Niya. Ang 'old' ay ang mga pagkakamali, kasalanan at sirang paraan ng pamumuhay. Ang 'new' — bagong identity, bagong buhay.",
    today:
      "Hindi mo kailangang hintayin ang New Year para sa fresh start. Sa kay Jesus, pwede mong iwan ang luma at pumasok sa bagong buhay na puno ng pag-asa — ngayon na.",
    fact: "Si Paul mismo ay buhay na halimbawa nito! Dati siyang si Saul, na nang-uusig at nagpapakulong ng mga Christians — bago siya nakatagpo kay Jesus sa daan papuntang Damascus at nabago ang buhay niya.",
    question: "Anong 'luma' sa buhay mo ang gusto mo nang iwan?",
    challenge: "Isulat ang isang 'old' na gusto mong bitawan at isang 'new' na gusto mong yakapin.",
  },
  {
    day: 24,
    ref: "Galatians 5:22–23",
    version: "NIV",
    text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
    theme: "Bunga ng Espiritu",
    why: "Ipinapakita nito ang magagandang katangian na pinapalago ng presensya ni God sa buhay ng isang tao.",
    explain:
      "Dalawang paraan ng pamumuhay ang inilarawan ni Paul. Una: hayaang ang selfish desires ang mag-control — na madalas nauuwi sa galit, inggit at yabang. Pangalawa: hayaang ang Holy Spirit ang gumabay sa choices, attitude at pakikitungo natin sa tao. Ang picture ay 'fruit' — hindi mo pinipilit ang puno na mamunga; kusa itong lumalabas kapag healthy at konektado ang puno.",
    today:
      "Gusto mo bang maging mas pasensyoso sa traffic? Mas mabait sa kapatid? Hindi ito puro willpower — lumalago ito kapag nananatili kang konektado kay God araw-araw.",
    fact: "Pansinin: 'fruit' — singular, hindi 'fruits'! Sa Greek (karpos), isang bunga na may siyam na 'flavor.' Hindi ka pumipili ng isa o dalawa lang; sabay-sabay silang lumalago.",
    question: "Sa siyam na ito, alin ang pinaka-gusto mong lumago sa'yo ngayong taon?",
    challenge: "Mag-pray ngayon: 'Holy Spirit, palaguin Mo sa akin ang ___.'",
  },
  {
    day: 25,
    ref: "Ephesians 2:8–9",
    version: "NIV",
    text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
    theme: "Regalo, Hindi Sweldo",
    why: "Madalas itong i-quote kasi dito makikita kung ano ang unique sa Christianity: ang love at forgiveness ni God ay regalo, hindi pinagtatrabahuhan.",
    explain:
      "Karamihan sa atin, buong buhay nagpapatunay ng sarili — sa trabaho, relasyon, o sa pagiging 'mabuting tao.' Binaliktad ito ni Paul: hindi mo mapagtatrabahuhan ang love ni God. Walang hagdan na kailangan mong akyatin papunta sa Kanya. Ang inaalok Niya ay grace — undeserved na kabaitan. Tanggapin mo lang sa pamamagitan ng faith.",
    today:
      "Sa kulturang 'pag may tiyaga, may nilaga' — maganda 'yan sa trabaho! Pero sa love ni God, hindi ka kailangang mag-overtime. Libre. No strings attached.",
    fact: "Sa sunod na verse (2:10), sinabi ni Paul na tayo ay 'God's handiwork' — sa Greek 'poiēma,' kung saan galing ang English word na 'poem.' Ikaw ay tula ni God!",
    question: "Saan mo sinusubukang 'patunayan' ang sarili mo para matanggap?",
    challenge: "Kapag naramdaman mong 'hindi ako enough' ngayong araw, sabihin: 'Regalo ang grace ni God sa akin.'",
  },
  {
    day: 26,
    ref: "Philippians 4:13",
    version: "NKJV",
    text: "I can do all things through Christ who strengthens me.",
    theme: "Lakas sa Lahat ng Sitwasyon",
    why: "Isa ito sa pinaka-quoted na verses sa Bible. Madalas itong sandalan kapag may hinaharap na challenge o hinahabol na malaking pangarap.",
    explain:
      "Nakita mo na ba itong naka-print sa jersey ng athlete? Pero heto ang twist: hindi ito isinulat ni Paul mula sa basketball court — isinulat niya ito mula sa kulungan! Ang context: natuto si Paul na maging content sa lahat ng sitwasyon, mayaman man o kapos. Ang lakas niya ay hindi galing sa sarili, kundi kay Christ. Hindi ito 'kaya kong manalo sa lahat,' kundi 'kaya kong harapin ang lahat — kasama Siya.'",
    today:
      "Board exam, bagong trabaho, single parenting, o simpleng pagbangon sa kama — hindi mo kailangang umasa lang sa sarili mo. Humingi ka ng lakas kay God para sa ngayon.",
    fact: "Ang Philippians ay tinatawag na 'the epistle of joy' — paulit-ulit ang salitang 'joy' at 'rejoice' dito, kahit isinulat ito ni Paul habang nakakulong!",
    question: "Saang sitwasyon ka kailangang matutong maging 'content' ngayon?",
    challenge: "Ilista ang 5 bagay na pinasasalamatan mo kahit hindi perpekto ang sitwasyon mo.",
  },
  {
    day: 27,
    ref: "Philippians 4:6–7",
    version: "NIV",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    theme: "Peace na Hindi Ma-explain",
    why: "Mahal ito dahil nagbibigay ito ng pag-asa sa mga taong puno ng worry at stress. Ipinapakita nito ang kapayapaang hindi nakadepende sa perpektong buhay.",
    explain:
      "Kapag nag-aalala ka, ano ang una mong ginagawa? Karamihan sa atin: inaayos agad, dini-distract ang sarili, o kinikimkim. Iba ang suggestion ni Paul: dalhin ito kay God sa prayer — at may kasamang pasasalamat. Hindi niya pinapangako na mawawala agad ang problema, pero pinapangako niya ang peace na lampas sa pang-unawa — na magbabantay sa puso at isip mo.",
    today:
      "Overthinking sa 3AM? Doom-scrolling? Subukan ang 'prayer + thanksgiving' combo: sabihin kay God ang worry mo, tapos magpasalamat sa isang bagay. Ulit-ulitin.",
    fact: "Ang word na 'guard' (phroureō) ay military term — parang sundalong nagbabantay sa lungsod. Bagay, kasi ang Philippi ay Roman colony na maraming retiradong sundalo!",
    question: "Ano ang pinaka-pinag-aalala mo ngayong linggo?",
    challenge: "Isulat ang worry mo sa papel, i-pray ito, tapos isulat sa ilalim ang isang bagay na pinasasalamatan mo.",
  },
  {
    day: 28,
    ref: "2 Timothy 1:7",
    version: "NIV",
    text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    theme: "Hindi Duwag",
    why: "Madalas itong ibahagi sa mga taong natatakot o nag-aalinlangan sa sarili. Paalala na hindi takot ang ibinigay ni God sa atin.",
    explain:
      "Isinulat ito ni Paul kay Timothy — isang batang leader na marahil ay mahiyain at kinakabahan sa responsibility niya. Pinaalalahanan siya ni Paul: ang Spirit na ibinigay ni God ay hindi espiritu ng pagkatakot. Power — lakas para kumilos. Love — para ang lakas ay gamitin nang tama. Self-discipline — para manatiling matatag at balanse.",
    today:
      "Takot mag-apply, mag-speak up sa meeting, magsabi ng 'hindi,' o magsimula ng bagong bagay? Kapag sinasabi ng takot na 'hindi mo kaya,' tandaan: may lakas, pag-ibig at disiplina na galing kay God.",
    fact: "Ang 2 Timothy ay malamang ang huling sulat ni Paul bago siya pinatay sa Rome. Kaya ito ay parang 'last words' niya sa spiritual son niya — puno ng encouragement.",
    question: "Ano ang isang bagay na gusto mong gawin pero pinipigilan ka ng takot?",
    challenge: "Gumawa ng isang maliit na 'brave step' ngayong araw — isang message, isang tanong, isang simula.",
  },
  {
    day: 29,
    ref: "James 1:2–3",
    version: "NIV",
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.",
    theme: "Joy sa Gitna ng Pagsubok",
    why: "Madalas itong i-quote dahil binabaliktad nito ang tingin natin sa hirap — ang pagsubok ay pwedeng maging daan ng paglago.",
    explain:
      "Sumusulat si James sa mga naghihirap na Christians na nagkalat sa iba't ibang lugar. Hindi niya sinasabing 'matuwa ka na masakit.' Ang sinasabi niya: may joy dahil alam mong may nabubuo sa'yo — perseverance, tibay ng loob. Parang gym: masakit ang workout, pero lumalakas ang muscles. Ganoon din ang faith na sinusubok.",
    today:
      "Delayed na sweldo, sakit, problema sa pamilya — hindi masaya ang mga 'yan. Pero sa bawat pagsubok na nalampasan mo kasama si God, mas tumitibay ka. Ang Pinoy resilience? May mas malalim na pinagmumulan.",
    fact: "Ang James na sumulat nito ay malamang kapatid ni Jesus! Ayon sa John 7:5, hindi siya naniniwala kay Jesus noong una — pero naging leader siya ng church sa Jerusalem.",
    question: "Anong pagsubok noon ang nagpatibay sa'yo ngayon?",
    challenge: "I-encourage ang isang taong dumadaan sa mahirap na panahon ngayong araw.",
  },
  {
    day: 30,
    ref: "Revelation 21:4",
    version: "NIV",
    text: "“‘He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain, for the old order of things has passed away.”",
    theme: "Wala Nang Luha",
    why: "Isa ito sa pinaka-magandang larawan ng pag-asa sa Bible — ang pangako na isang araw, matatapos ang lahat ng sakit.",
    explain:
      "Galing ito sa isang vision na ibinigay kay John tungkol sa hinaharap: bagong langit at bagong lupa kung saan si God mismo ay maninirahan kasama ng tao. Hindi lang Niya aalisin ang sakit — personal Niyang pupunasan ang bawat luha. Ang kamatayan, pagluluksa at sakit ay mawawala. Ito ang ending ng buong kwento ng Bible: pag-asa.",
    today:
      "Kung nagluluksa ka, kung may sakit kang dinadala, kung pagod ka na sa mundo — hindi ito ang katapusan. Ang dulo ng kwento ay hindi luha, kundi pag-asa. At kasama mo si God hanggang doon.",
    fact: "Ang Revelation ay isinulat ni John habang naka-exile sa isla ng Patmos (Revelation 1:9). At astig ang 'bookends' ng Bible: nagsimula sa isang garden (Genesis), nagtapos sa isang lungsod na may 'tree of life' (Revelation 22).",
    question: "Ano ang pinaka-hinihintay mong mawala sa 'bagong mundo' na ipinangako ni God?",
    challenge: "Balikan ang 30 araw na ito. Anong verse ang pinaka-tumatak sa'yo? I-share sa isang kaibigan!",
  },
];

export const getVerse = (day: number) => verses.find((v) => v.day === day);
