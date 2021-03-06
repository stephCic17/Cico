const Questions = [
{
  idTable: 0,
  id: 1,
  title: "Quel âge avez-vous ?",
  type: "number",
  prevStep:0,
  answer:
  {
    label: "age en année",
    nextStep: 2
  },
  answerUser: -1
},
{
  idTable: 1,
  id: 2,
  answerUser: -1,
  title: "Êtes-vous enceinte ?",
  type: "yesNoIdn",
  prevStep:0,
  answerYes:
  {
    label: "Oui",
    nextStep: 3
  },
  answerNo:
  {
    label: "Non",
    nextStep: 5
  },
  answerIdn:
  {
    label: "Je ne sais pas",
    nextStep: 3
  }
},
{
  idTable: 2,
  id: 3,
  answerUser: -1,
  prevStep:0,
  title: "Quelle est la date de vos dernières règles ?",
  type: "date",
  answer: {
    label: "jj/mm/aaaa",
    nextStep: 4
  }
},
{
  idTable: 3,
  id: 4,
  title:"Est-ce une bonne nouvelle ?",
  type:"yesNoIdn",
  answerUser: -1,
  prevStep:0,
  answerYes:
  {
    label: "Oui",
    nextStep: 5
  },
  answerNo:
  {
    label: "Non",
    nextStep: 250
  },
  answerIdn:
  {
    label: "Je ne sais pas",
    nextStep: 5
  }
},
{
  idTable: 4,
  id: 5,
  title:"Avez vous déjà eu recours à ces procédés ?",
  type:"Psycho1",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  prevStep:0,
  answer1:
  {
    label: "Procréation médicalement assistée",
  },
  answer2:
  {
    label: "Depuis combien de temps avez-vous commencé ?",
  },
  answer3:
  {
    label: "Combien de tentatives avez-vous faites ?",
  },
  answer4:
  {
    label: "Bénéficié d'un don d'ovocyte",
  },
  answer5:
  {
    label: "Bénéficié d'un don de sperme",
  },
  nextStep: 6
},
{
  idTable: 5,
  id: 6,
  title:"Fumez-vous ?",
  type:"yesNo",
  answerUser: -1,
  prevStep:0,
  answerYes:
  {
    label: "Oui",
    nextStep: 7
  },
  answerNo:
  {
    label: "Non",
    nextStep: 7
  }
},
{
  idTable: 6,
  id: 7,
  answerUser: -1 ,
  title:"Avez-vous des enfants ?",
  type: "yesNo",
  prevStep:0,
  answerYes:
  {
    label: "Oui",
    nextStep: 8
  },
  answerNo:
  {
    label: "Non",
    nextStep: 18
  }
},
{
  idTable: 7,
  id: 8,
  answerUser: -1,
  prevStep:0,
  title:"Combien avez-vous d'enfant(s) ?",
  type: "number",
  answer:
  {
    label: "nombre d'enfant",
    nextStep: 9
  }
},
{
  idTable: 8,
  id: 9,
  answerUser: -1,
  prevStep:0,
  title: "Avez-vous accouché d'enfant(s) de plus de 4 kilos ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 10
  },
  answerNo:
  {
    label: "Non",
    nextStep: 11
  }
},
{
  idTable: 9,
  id: 10,
  answerUser: -1,
  prevStep:0,
  title:"Combien d'enfant(s) de plus de 4 kilos avez-vous eu ?",
  type: "number",
  answer:
  {
    label: "nombre d'enfants",
    nextStep: 11
  }
},
{
  idTable: 10,
  id: 11,
  answerUser: -1,
  prevStep:0,
  title:"Avez-vous accouché d'enfant(s) de moins de 2kg200 ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 12
  },
  answerNo:
  {
    label: "Non",
    nextStep: 13
  }
},
{
  idTable: 11,
  id: 12,
  answerUser: -1,
  prevStep:0,
  title: "Votre enfant était il prématuré ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 13
  },
  answerNo:
  {
    label: "Non",
    nextStep: 13
  }
},
{
  idTable: 12,
  id: 13,
  answerUser: -1,
  prevStep:0,
  title: "Avez-vous eu une prééclampsie ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 14
  },
  answerNo:
  {
    label: "Non",
    nextStep: 14
  }
},
{
  idTable: 13,
  id: 14,
  answerUser: -1,
  prevStep:0,
  title:"Avez-vous un antécedent de diabète de grossesse ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 15
  },
  answerNo:
  {
    label: "Non",
    nextStep: 15
  }
},
{
  idTable: 14,
  id: 15,
  title: "Avez-vous déjà eu une césarienne ?",
  type: "yesNo",
  prevStep:0,
  answerYes:
  {
    label: "Oui",
    nextStep: 16
  },
  answerNo:
  {
    label: "Non",
    nextStep: 17
  }
},
{
  idTable: 15,
  id: 16,
  answerUser: -1,
  prevStep:0,
  title: "Combien de césarienne(s) avez-vous eu ?",
  type: "number",
  answer:
  {
    label: "nombre de cesarienne",
    nextStep: 17
  }
},
{
  idTable: 16,
  id: 17,
  title:"Avez-vous déjà été confrontée à une de ces situations ?",
  type:"multipleChoice",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,
  answerUser9: -1,
  prevStep:0,
  answer1:
  {
    label: "Forceps",
  },
  answer2:
  {
    label: "Ventouse",
  },
  answer3:
  {
    label: "Césarienne en urgence",
  },
  answer4:
  {
    label: "Anesthésie générale",
  },
  answer5:
  {
    label: "Hémorragie",
  },
  answer6:
  {
    label: "Séparation avec le bébé à la naissance pendant plus de 6 heures",
  },
  answer7:
  {
    label: "Peur de mourrir en accouchant",
  },
  answer8:
  {
    label: "Peur de perdre mon bébé ",
  },
  answer9:
  {
    label: "J'ai subit un accouchement traumatique",
  },
  nextStep: 18
},
{
  idTable: 17,
  id: 18,
  title:"Avez-vous connu une de ces situation ?",
  type:"multipleChoice",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,
  answerUser9: -1,
  answerUser10: -1,
  answerUser11: -1,
  answerUser12: -1,
  prevStep:0,
  answer1:
  {
    label: "Fausse couche",
  },
  answer2:
  {
    label: "Interruption volontaire de grossesse",
  },
  answer3:
  {
    label: "Grossesse extra utérine",
  },
  answer4:
  {
    label: "Mort foetale in utéro",
  },
  answer5:
  {
    label: "Interruption médicale de la grossesse",
  },
  answer6:
  {
    label: "Interruption sélective de la grossesse",
  },
  answer7:
  {
    label: "Enfant porteur de handicap",
  },
  answer8:
  {
    label: "Enfant prématuré",
  },
  answer9:
  {
    label: "Enfant atteint d'une maladie chronique",
  },
  answer10:
  {
    label: "Mort d'un enfant",
  },
  answer11:
  {
    label: "Ces expériences ont été traumatiques",
  },
  answer12:
  {
    label: "En dehors des situations de grossesse(s) j'ai connu des évènements que je qualifierais de traumatiques",
  },
  nextStep: 19
},
{
  idTable: 18,
  id: 19,
  answerUser: -1,
  prevStep:0,
  title: "Combien de fausses couches avez-vous fait ?",
  type: "number",
  answer:
  {
    label: "nombre",
    nextStep: 20
  }
},
{
  idTable: 19,
  id: 20,
  title: "Combien de verres d'alcool buvez-vous par semaine ?",
  type: "number",
  prevStep:0,
  answer:
  {
    label: "nombre par semaine",
    nextStep: 21
  },
  answerUser: -1,
},
{
  idTable: 20,
  id: 21,
  answerUser: -1,
  prevStep:0,
  title: "Etes-vous sujette aux crises d'épilepsie ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 22
  },
  answerNo:
  {
    label: "Non",
    nextStep: 22
  }
},
{
  idTable: 21,
  id: 22,
  answerUser: -1,
  title: "Avez-vous déjà eu une phlébite ?",
  type: "yesNo",
  prevStep:0,
  answerYes:
  {
    label: "Oui",
    nextStep: 23
  },
  answerNo:
  {
    label: "Non",
    nextStep: 23
  }
},
{
  idTable: 22,
  id: 23,
  answerUser: -1,
  prevStep:0,
  title: "Avez-vous de l'hypertension artérielle ?",
  type: "yesNoIdn",
  answerYes:
  {
    label: "Oui",
    nextStep: 24
  },
  answerNo:
  {
    label: "Non",
    nextStep: 24
  },
  answerIdn:
  {
    label: "Je ne sais pas",
    nextStep: 24
  }
},
{
  idTable: 23,
  id: 24,
  answerUser: -1,
  prevStep:0,
  title: "Avez-vous du diabète ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 25
  },
  answerNo:
  {
    label: "Non",
    nextStep: 25
  }
},
{
  idTable: 24,
  id: 25,
  answerUser: -1,
  prevStep:0,
  title:"Prenez vous des médicaments ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 26
  },
  answerNo:
  {
    label: "Non",
    nextStep: 27
  }
},
{
  idTable: 25,
  id: 26,
  title:"Selectionnez les médicaments que vous prenez",
  type:"multipleIf",
  answerUser1: -1,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,
  prevStep:0,
  answer1:
  {
    label: "Anti-Epileptique",
  },
  answer2:
  {
    label: "Anticoagulent",
  },
  answer3:
  {
    label: "Antihypertenseur",
  },
  answer4:
  {
    label: "Insuline",
  },
  answer5:
  {
    label: "Antidepresseur",
  },

  nextStep: 27
},
{
  idTable: 26,
  id: 27,
  answerUser: -1,
  prevStep:0,
  title: "Quelle est votre taille (en cm) ?",
  type: "number",
  answer:
  {
    label: "en cm",
    nextStep: 28
  }
},
{
  idTable: 27,
  id: 28,
  title: "Quel est votre poids (en kg) ?",
  type: "number",
  answer:
  {
    label: "en kg",
    nextStep: 29
  }
},
{
  idTable: 28,
  id: 29,
  answerUser: -1,
  prevStep:0,
  title: "Travaillez-vous ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 30
  },
  answerNo:
  {
    label: "Non",
    nextStep: 33
  }
},
{
  idTable: 29,
  id: 30,
  answerUser: -1,
  prevStep:0,
  title: "Combien d'heures de travail effectuez-vous par jour ?",
  type: "number",
  answer:
  {
    label: "en heure",
    nextStep: 31
  }
},
{
  idTable: 30,
  id: 31,
  answerUser: -1,
  prevStep:0,
  title: "Quel est votre temps de trajet par jour (en minutes) ?",
  type: "number",
  answer:
  {
    label: "en minute",
    nextStep: 32
  }
},
{
  idTable: 31,
  id: 32,
  answerUser: -1,
  prevStep:0,
  title: "Travaillez-vous debout plus de 6 heures par jour ?",
  type: "yesNo",
  answerYes:
  {
    label: "Oui",
    nextStep: 33
  },
  answerNo:
  {
    label: "Non",
    nextStep: 33
  }
},
{
  idTable: 32,
  id: 33,
  title:"Etes-vous concernée par les éléments ci-dessous ?",
  type:"multipleChoice",
  answerUser1: -1,
  prevStep:0,
  answerUser2 :-1,
  answerUser3: -1,
  answerUser4 :-1,
  answerUser5: -1,
  answerUser6: -1,
  answerUser7: -1,
  answerUser8: -1,
  answer1:
  {
    label: "Crises d'angoisse",
  },
  answer2:
  {
    label: "Boulimie",
  },
  answer3:
  {
    label: "Anorexie",
  },
  answer4:
  {
    label: "Trouble obsessionnels compulsif TOC",
  },
  answer5:
  {
    label: "Dépression",
  },
  answer6:
  {
    label: "Phobie",
  },
  answer7:
  {
    label: "Troubles bipolaires",
  },
  answer8:
  {
    label: "Hospitalisation dans un service psychiatrique",
  },
  nextStep: 99
},
{
  idTable: 33,
  id: 34,
  answerUser: -1,
  title: "Nombre de semaines de grossesse",
  type: "number",
  prevStep:0,
  answer:
  {
    label: "en semaine",
    nextStep: 35
  }
},
{
  idTable: 34,
  id: 35,
  answerUser: -1,
  prevStep:0,
  title: "Nombre de semaines restantes",
  type: "number",
  answer:
  {
    label: "en semaine",
    nextStep: 35
  }
}
];

export default Questions;