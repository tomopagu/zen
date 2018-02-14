/* Thoughts From https://github.com/dpapathanasiou/zen-thought */
/*
The MIT License (MIT)
Copyright (c) 2013-2014 Denis Papathanasiou

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

const zenMessage = [
  {
    day: 1,
    thought_jp: 'あきらめない|あきらめない|あきらめない|必ず|出来る',
    thought_en:
      'Do not give up,|Do not give up,|Do not give up|Without fail|You can do it',
  },
  {
    day: 2,
    thought_jp: 'ありがとう|あなたの笑顔|出会えて|良かった',
    thought_en: 'Thank you|To encounter|Your smile|Was nice',
  },
  {
    day: 3,
    thought_jp: '尖り心は昨日に置いて|今日から私は笑顔道',
    thought_en:
      'Yesterday I left my sharp heart behind|From now on I am on the way to smiling',
  },
  {
    day: 4,
    thought_jp:
      'お金も土地も重くて|天国へ持って行けない|持って行けるのは|透明な心だけ',
    thought_en:
      "Money and land are too heavy|It isn't possible to bring them into heaven|The thing that we can bring|Is a transparent heart",
  },
  {
    day: 5,
    thought_jp: 'してもらったことは忘れない|してやったことは忘れるよう',
    thought_en:
      "I don't forget what has been done for me|I forget what I have done for others",
  },
  {
    day: 6,
    thought_jp: 'せかせかと生き急がない|ゆっくりと生きる',
    thought_en: "Let's take it easy|Without hurrying up and being restless",
  },
  {
    day: 7,
    thought_jp: 'その時はその時です|その時も|その時です',
    thought_en: 'That time is that time|And this time|Is also this time',
  },
  {
    day: 8,
    thought_jp:
      'どうにもならない行き詰まりは|幸運の開宴を知らせる|鐘の音である',
    thought_en:
      'At a dead end|The beginning of felicity|Is the sound of a chime',
  },
  {
    day: 9,
    thought_jp: '貰う喜びより|与える喜び',
    thought_en: 'More than the joy of receiving|There is the joy of giving',
  },
  {
    day: 10,
    thought_jp: '一人が笑う|二人が笑う|みんなが笑う|地球が笑う|笑うのがいい',
    thought_en:
      'One person smiles|Two people smile|Everyone smiles|The earth smiles|It is good to smile',
  },
  {
    day: 11,
    thought_jp: '強い信念と|明るい笑顔には|奇跡の力がある',
    thought_en:
      'With a strong faith and|A bright smile|There is the power of a miracle',
  },
  {
    day: 12,
    thought_jp: '人間の花は|笑顔|笑顔花を咲かせよう',
    thought_en: 'The flower of a human is|A smile|Let bloom the smile flower',
  },
  {
    day: 13,
    thought_jp: '感謝|祝福|喜び',
    thought_en: 'Gratitude|Blessing|Happiness',
  },
  {
    day: 14,
    thought_jp: '自分が変われば|周囲が変わる',
    thought_en: 'If I change|The people around me will change',
  },
  {
    day: 15,
    thought_jp: '元気',
    thought_en: 'Powerful vigorous spirit',
  },
  {
    day: 16,
    thought_jp: '困難の向こうには|必ず幸運が在る',
    thought_en: 'Beyond difficulties|Inevitably there is fortune',
  },
  {
    day: 17,
    thought_jp: '幸運|開宴',
    thought_en: 'The spectacle of fortune|Start',
  },
  {
    day: 18,
    thought_jp: '私の心が大きくなって|やさしい笑顔で周囲を包む',
    thought_en: 'My heart becomes big|With a kind smile I wrap my surroundings',
  },
  {
    day: 19,
    thought_jp: '夢を追いかけよう',
    thought_en: "Let's pursue the dream",
  },
  {
    day: 20,
    thought_jp:
      '尖った心でいると尖った心の人に囲まれ|尖りが丸まると|丸い笑顔の人に|囲まれる',
    thought_en:
      'With a sharp heart I will be surrounded by sharp-hearted people|When the sharpness gets rounder and rounder|People with round smiles|Will surround me',
  },
  {
    day: 21,
    thought_jp: 'いかに思われているかではない|自分が自分をいかに思うかである',
    thought_en:
      "It is not about knowing how I'm judged|It is about me knowing how to judge myself",
  },
  {
    day: 22,
    thought_jp: '太陽のように|分けへだてなく|愛の笑顔を',
    thought_en: 'Like the sun|Without discrimination|Give love and smile',
  },
  {
    day: 23,
    thought_jp: '人は皆一人一人|存在理由と|存在価値がある',
    thought_en:
      'For all men, for each and every man|There is a reason for being|There is a meaning in being',
  },
  {
    day: 24,
    thought_jp: '心配は万病の素|喜びは万病の薬',
    thought_en: 'Worries source of illness|Gladness source of medicine',
  },
  {
    day: 25,
    thought_jp: '弱いから強くなれる|持ってないから何でも持てる',
    thought_en:
      'Because of weakness, I can become strong|Because I do not possess, I can possess everything',
  },
  {
    day: 26,
    thought_jp: '奪えば奪われ|与えれば与えれる',
    thought_en:
      'If I take|Things will be taken from me|If I give I can receive',
  },
  {
    day: 27,
    thought_jp: 'ありがとう|あなたに出逢えて良かった',
    thought_en: 'Thank you|Because of you, I am here',
  },
  {
    day: 28,
    thought_jp: 'いえいえ|あなたがいてくれたお陰です|本当にありがとう',
    thought_en:
      "No, no I'm very indebted to you|Because of you, I am here|Thank you very much",
  },
  {
    day: 29,
    thought_jp: '何はとも|あれ周囲に笑顔で|話は出来る人が居る境遇に|感謝',
    thought_en:
      'Anyway|To the environment where people can|Talk with big smiles on their faces|Thank you',
  },
  {
    day: 30,
    thought_jp: '自分の心が映ってる|自分の周囲の現象に',
    thought_en: 'The image of the people around me|Is reflected onto my heart',
  },
  {
    day: 31,
    thought_jp: '大望を持て|全ては可能だ',
    thought_en: 'With ambition|Everything is possible',
  },
];

exports.zenMessage = zenMessage;
