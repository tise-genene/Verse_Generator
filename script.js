const verses = [
    "ሕፃን ተወልዶልናልና፥ ወንድ ልጅም ተሰጥቶናልና፤ አለቅነትም በጫንቃው ላይ ይሆናል፤ ስሙም ድንቅ መካር፥ ኃያል አምላክ፥ የዘላለም አባት፥ የሰላም አለቃ ተብሎ ይጠራል።ትንቢተ ኢሳይያስ 9:6 For unto us a child is born, unto us a son is given. (Isaiah 9:6)",
    "ክብር ለእግዚአብሔር በአርያም ይሁን ሰላምም በምድር ለሰውም በጎ ፈቃድ፡ አሉ። ሉቃስ 2:14 Glory to God in the highest, and on earth peace, goodwill toward men. (Luke 2:14)",
    "ቃልም ሥጋ ሆነ፤ ጸጋንና እውነትንም ተመልቶ በእኛ አደረ፥ አንድ ልጅም ከአባቱ ዘንድ እንዳለው ክብር የሆነው ክብሩን አየን። የዮሐንስ ወንጌል 1 : 14 And the Word became flesh and dwelt among us. (John 1:14)",
    "መልአኩም እንዲህ አላቸው፡— እነሆ፥ ለሕዝቡ ሁሉ የሚሆን ታላቅ ደስታ የምሥራች እነግራችኋለሁና አትፍሩ፤ ዛሬ በዳዊት ከተማ መድኃኒት እርሱም ክርስቶስ ጌታ የሆነ ተወልዶላችኋልና። ሉቃስ 2:10_11 But the angel said to them, 'Do not be afraid. I bring you good news of great joy for all people.' (Luke 2:10_11)",
    "በጨለማ የሄደ ሕዝብ ብርሃን አየ፤ በሞት ጥላ አገርም ለኖሩ ብርሃን ወጣላቸው። ትንቢተ ኢሳይያስ 9:2 The people walking in darkness have seen a great light. (Isaiah 9:2)",
    "ስለማይነገር ስጦታው እግዚአብሔር ይመስገን። 2 ቆሮንቶስ 9:15 Thanks be to God for His indescribable gift! (2 Corinthians 9:15)",
    "እርሱም ተነሥቶ ሕፃኑንና እናቱን ያዘና ወደ እስራኤል አገር ገባ። ማቴዎስ 2 : 21 She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins. (Matthew 1:21)",
    "ኮከቡንም ባዩ ጊዜ በታላቅ ደስታ እጅግ ደስ አላቸው። ማቴዎስ 2 : 10 When they saw the star, they rejoiced with exceedingly great joy. (Matthew 2:10)",
    " እነርሱም፡— አንቺ ቤተ ልሔም፥ የይሁዳ ምድር፥ ከይሁዳ ገዢዎች ከቶ አታንሽም፤ ሕዝቤን እስራኤልን የሚጠብቅ መስፍን ከአንቺ ይወጣልና፡ ተብሎ በነቢይ እንዲህ ተጽፎአልና በይሁዳ ቤተ ልሔም ነው፡ አሉት። ማቴዎስ 2 : 6 And you, Bethlehem, in the land of Judah, are by no means least among the rulers of Judah; for out of you will come a ruler who will shepherd my people Israel. (Matthew 2:6)",
    " ለሰው ሁሉ የሚያበራው እውነተኛው ብርሃን ወደ ዓለም ይመጣ ነበር። የዮሐንስ ወንጌል 1 : 9 The true light that gives light to everyone was coming into the world. (John 1:9)",
    " በጎ ስጦታ ሁሉ ፍጹምም በረከት ሁሉ ከላይ ናቸው፥ መለወጥም በእርሱ ዘንድ ከሌለ በመዞርም የተደረገ ጥላ በእርሱ ዘንድ ከሌለ ከብርሃናት አባት ይወርዳሉ። የያዕቆብ መልእክት 1:17 Every good and perfect gift is from above, coming down from the Father of the heavenly lights. (James 1:17)",
    "በነቢያት፡— ናዝራዊ ይባላል፡ የተባለው ይፈጸም ዘንድ፥ ናዝሬት ወደምትባል ከተማ መጥቶ ኖረ። ማቴዎስ 2 : 23 The virgin will conceive and give birth to a son, and they will call him Immanuel (which means 'God with us'). (Matthew 1:23)",
    "አንቺ የጽዮን ልጅ ሆይ፥ እጅግ ደስ ይበልሽ፤ አንቺ የኢየሩሳሌም ልጅ ሆይ፥ እልል በዪ፤ እነሆ፥ ንጉሥሽ ጻድቅና አዳኝ ነው፤ ትሑትም ሆኖ በአህያም፥ በአህያይቱ ግልገል በውርጫይቱ ላይ ተቀምጦ ወደ አንቺ ይመጣል። ትንቢተ ዘካርያስ 9 : 9 Rejoice greatly, Daughter Zion! Shout, Daughter Jerusalem! See, your king comes to you, righteous and victorious. (Zechariah 9:9)",
    "በእርሱ ሕይወት ነበረች፥ ሕይወትም የሰው ብርሃን ነበረች። የዮሐንስ ወንጌል 1 : 4 In Him was life, and that life was the light of all mankind. (John 1:4)",
    "አንቺም ቤተ ልሔም ኤፍራታ ሆይ፥ አንቺ በይሁዳ አእላፋት መካከል ትሆኚ ዘንድ ታናሽ ነሽ፤ ከአንቺ ግን አወጣጡ ከቀድሞ ጀምሮ ከዘላለም የሆነ፥ በእስራኤልም ላይ ገዥ የሚሆን ይወጣልኛል። ትንቢተ ሚክያስ 5 : 2 But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel. (Micah 5:2)",
    "እርሱ ታላቅ ይሆናል የልዑል ልጅም ይባላል፥ ጌታ አምላክም የአባቱን የዳዊትን ዙፋን ይሰጠዋል፤ ሉቃስ 1:32 He will be great and will be called the Son of the Most High. (Luke 1:32)",
    "ብርሃንም በጨለማ ይበራል፥ ጨለማም አላሸነፈውም። የዮሐንስ ወንጌል 1 : 5 The light shines in the darkness, and the darkness has not overcome it. (John 1:5)",
    "በነገው ዮሐንስ ኢየሱስን ወደ እርሱ ሲመጣ አይቶ እንዲህ አለ፡— እነሆ የዓለምን ኃጢአት የሚያስወግድ የእግዚአብሔር በግ። የዮሐንስ ወንጌል 1 : 29  Behold, the Lamb of God, who takes away the sin of the world! (John 1:29)",
    "ዓይኖቼ በሰዎች ሁሉ ፊት ያዘጋጀኸውን ማዳንህን አይተዋልና፤ ሉቃስ 2:30_31 For my eyes have seen your salvation, which you have prepared in the sight of all nations. (Luke 2:30-31)",
    "መልአኩም መልሶ እንዲህ አላት፡— መንፈስ ቅዱስ በአንቺ ላይ ይመጣል፥ የልዑልም ኃይል ይጸልልሻል ስለዚህ ደግሞ ከአንቺ የሚወለደው ቅዱስ የእግዚአብሔር ልጅ ይባላል። ሉቃስ 1:35 The angel answered, 'The Holy Spirit will come on you, and the power of the Most High will overshadow you.' (Luke 1:35)",
    "ድንገትም ብዙ የሰማይ ሠራዊት ከመልአኩ ጋር ነበሩ። እግዚአብሔርንም እያመሰገኑ። ሉቃስ 2:13 And suddenly there was with the angel a multitude of the heavenly host praising God. (Luke 2:13)",
    "በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና። የዮሐንስ ወንጌል 3 : 16  For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. (John 3:16)",
    "የተስፋ አምላክም በመንፈስ ቅዱስ ኃይል በተስፋ እንድትበዙ በማመናችሁ ደስታንና ሰላምን ሁሉ ይሙላባችሁ። ሮመ 15:13 May the God of hope fill you with all joy and peace as you trust in Him. (Romans 15:13)",
    "ሰዎችን ሁሉ የሚያድን የእግዚአብሔር ጸጋ ተገልጦአልና፤ ቲቶ 2:11 The grace of God has appeared, bringing salvation to all people. (Titus 2:11)",
    "በጨለማ የሄደ ሕዝብ ብርሃን አየ፤ በሞት ጥላ አገርም ለኖሩ ብርሃን ወጣላቸው። ትንቢተ ኢሳይያስ 9:2 Therefore the Lord Himself will give you a sign: The virgin will conceive, have a son, and name him Immanuel. (Isaiah 7:14)",
    "የእርሱ ወደ ሆነው መጣ፥ የገዛ ወገኖቹም አልተቀበሉትም። ለተቀበሉት ሁሉ ግን፥ በስሙ ለሚያምኑት ለእነርሱ የእግዚአብሔር ልጆች ይሆኑ ዘንድ ሥልጣንን ሰጣቸው፤ የዮሐንስ ወንጌል 1 : 11_12 He came to that which was his own, but his own did not receive him. Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God. (John 1:11-12)",
    "ለእግዚአብሔር አዲስ ምስጋናን አመስግኑ፤ ምድር ሁሉ፥ እግዚአብሔርን አመስግኑ። መዝሙረ ዳዊት 32:11 Sing to the Lord a new song; sing to the Lord, all the earth. (Psalm 96:1)",
    "ጻድቃን ሆይ፥ በእግዚአብሔር ደስ ይበላችሁ ሐሤትም አድርጉ፤ ልባችሁም የቀና ሁላችሁ፥ እልል በሉ። መዝሙረ ዳዊት 32:11 Shout for joy, all you who are upright in heart! (Psalm 32:11)"
  ];
  
  document.getElementById('generateBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const verse = verses[randomIndex];
    
    const verseDisplay = document.getElementById('verseDisplay');
    verseDisplay.style.display = 'block'; // Make it visible
    verseDisplay.innerHTML = `<p>${verse}</p>`;
  });
  