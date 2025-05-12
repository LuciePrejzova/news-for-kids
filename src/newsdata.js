const newsdata = [
  {
    id: "590ba0cf-9d7d-4bc1-9967-5cblf8a9a6fab",
    title: "Former Maine Gov. Files for Congressional Run Against Rep. Golden",
    description:
      "Former Maine Gov. Paul LePage (R) filed paperwork …District, which Rep. Jared Golden (D) represents.",
    url: "https://www.breitbart.com/politics/2025/05/04/form…-lepage-files-congressional-run-rep-jared-golden/",
    image:
      "None",
    author: "Elizabeth Weibel",
    category: "general",
  },
  {
    id: "62b5ea08-f412-44ec-a117-16fe457bac7p7",
    title:
      "NIH closes experimentation labs accused of brutally killing thousands of beagles for 40+ years",
    description:
      "National Institutes of Health (NIH) director Jay B…on Musk posted on X that he would investigate ...",
    url: "https://www.foxnews.com/politics/nih-closes-experi…cused-brutally-killing-thousands-beagles-40-years",
    image: "None",

    author: "foxnews",
    category: "general",
  },
  {
    id: "cac411f4-32a5-44e3-ae06-f371517237oae",
    title: "Democrat Jasmine Crockett Accused of Cutting Airport Line",
    description:
      "Texas Rep. Jasmine Crockett (D) has been accused b….\n\nIn a Sunday post on X, Republican Rep. Lisa...",
    url: "https://www.breitbart.com/politics/2025/05/04/demo…ul-jasmine-crockett-accused-cutting-airport-line/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wvj2caokPnNWS6WOvcxabzYzGuCkFTWEyA&s",

    author: "Paul Bois",
    category: "general",
  },
  {
    id: "92a7fba0-7e8f-4dc1-bf26-4d00a7f3bje7a",
    title: "Sample Headline #4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 4.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image: "None",

    author: "Reporter E",
    category: "general",
  },
  {
    id: "c44b44ea-33a3-419c-b13a-08aaabf12t22b",
    title: "Sample Headline #5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 5.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4bYQZQHCzXawhYUiaU0MF8Rr8MEjl-pXeQ&s",

    author: "Reporter F",
    category: "programming",
  },
  {
    id: "bd3e7c73-bfcf-40f1-bb4f-8826r7444672f",
    title: "Sample Headline #6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 6.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-KP5UU8o0wGzdkNBUH0ipgGZwx22mevdqQ&s",

    author: "Reporter G",
    category: "bussiness",
  },
  {
    id: "bf1497f3-1de1-4a67-8ac1-42c1a712k9b8f",
    title: "Sample Headline #7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 7.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter H",
    category: "general",
  },
  {
    id: "739c4a59-3ad1-44d5-a9c3-02a367b739la1",
    title: "Sample Headline #8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 8.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-KP5UU8o0wGzdkNBUH0ipgGZwx22mevdqQ&s",
    author: "Reporter I",
    category: "bussiness",
  },
  {
    id: "7f2cd3a5-1cbb-4553-b29e-18ef8a5382na3",
    title: "Sample Headline #9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 9.",
    url: "https://example.com/news/sample-9",
    image: "None",
    author: "Reporter J",
    category: "general",
  },
  {
    id: "017cbf88-45fa-4e5b-b79c-0cc1b0fcm3611",
    title: "Sample Headline #10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 10.",
    url: "https://example.com/news/sample-10",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter K",
    category: "regional",
  },
  {
    id: "2299ae93-5d6a-46b5-8bcd-5df0c9c0db6de",
    title: "Sample Headline #11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 11.",
    url: "https://example.com/news/sample-11",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter L",
    category: "regional",
  },
  {
    id: "ea1d926c-5148-4233-bbdd-5ac7e15288dfa",
    title: "Sample Headline #12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 12.",
    url: "https://example.com/news/sample-12",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wvj2caokPnNWS6WOvcxabzYzGuCkFTWEyA&s",
    author: "Reporter M",
    category: "regional",
  },
  {
    id: "5f0be548-faad-4f1e-92c2-2b9d9734b1r80",
    title: "Sample Headline #13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 13.",
    url: "https://example.com/news/sample-13",
    image: "None",
    author: "Reporter N",
    category: "technology",
  },
  {
    id: "6d3c0ccf-1300-4980-9f0e-1e9ebedc40ffc",
    title: "Sample Headline #14",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 14.",
    url: "https://example.com/news/sample-14",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter O",
    category: "technology",
  },
  {
    id: "6ecb2c96-03c7-4ddf-98d4-9efc84e28dsc0",
    title: "Sample Headline #15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 15.",
    url: "https://example.com/news/sample-15",
    image: "None",
    author: "Reporter P",
    category: "technology",
  },
  {
    id: "4fcf935f-cce4-499d-b3e9-e89cfb4fcx5f1",
    title: "Sample Headline #16",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 16.",
    url: "https://example.com/news/sample-16",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaT-EY-hDPY1Qde6-5QAKrSfPzGA8_ozCKw&s",
    author: "Reporter Q",
    category: "lifestyle",
  },
  {
    id: "d837716f-3ddf-4577-9f52-8f40aa96rc83b",
    title: "Sample Headline #17",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 17.",
    url: "https://example.com/news/sample-17",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter R",
    category: "lifestyle",
  },
  {
    id: "10b23d13-9b3b-4f71-a107-c40d81b4febc3",
    title: "Sample Headline #18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 18.",
    url: "https://example.com/news/sample-18",
    image: "None",
    author: "Reporter S",
    category: "lifestyle",
  },
  {
    id: "43f130e4-96cc-4b2c-8032-df7509dcdwe1c",
    title: "Sample Headline #19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 19.",
    url: "https://example.com/news/sample-19",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter T",
    category: "business",
  },
  {
    id: "d18b3b7d-71aa-4620-a787-1f6d6613afabc",
    title: "Sample Headline #20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 20.",
    url: "https://example.com/news/sample-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter U",
    category: "business",
  },
  {
    id: "590ba0cf-9d7d-4bc1-9967-5cbf8a9a6flab",
    title: "Former Maine Gov. Files for Congressional Run Against Rep. Golden",
    description:
      "Former Maine Gov. Paul LePage (R) filed paperwork …District, which Rep. Jared Golden (D) represents.",
    url: "https://www.breitbart.com/politics/2025/05/04/form…-lepage-files-congressional-run-rep-jared-golden/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaT-EY-hDPY1Qde6-5QAKrSfPzGA8_ozCKw&s",
    author: "Elizabeth Weibel",
    category: "bussiness",
  },
  {
    id: "62b5ea08-f412-44ec-a117-16fe457bacp77",
    title:
      "NIH closes experimentation labs accused of brutally killing thousands of beagles for 40+ years",
    description:
      "National Institutes of Health (NIH) director Jay B…on Musk posted on X that he would investigate ...",
    url: "https://www.foxnews.com/politics/nih-closes-experi…cused-brutally-killing-thousands-beagles-40-years",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",

    author: "foxnews",
    category: "general",
  },
  {
    id: "cac411f4-32a5-44e3-ae06-hf371517237ae",
    title: "Democrat Jasmine Crockett Accused of Cutting Airport Line",
    description:
      "Texas Rep. Jasmine Crockett (D) has been accused b….\n\nIn a Sunday post on X, Republican Rep. Lisa...",
    url: "https://www.breitbart.com/politics/2025/05/04/demo…ul-jasmine-crockett-accused-cutting-airport-line/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wvj2caokPnNWS6WOvcxabzYzGuCkFTWEyA&s",

    author: "Paul Bois",
    category: "bussiness",
  },
  {
    id: "92a7fba0-7e8f-4dc1-bf26-4y00a7f3be7a",
    title: "Sample Headline #4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 4.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image: "None",

    author: "Reporter E",
    category: "general",
  },
  {
    id: "c44b44ea-33a3-419c-b13a-08aalabf1222b",
    title: "Sample Headline #5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 5.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image: "None",

    author: "Reporter F",
    category: "general",
  },
  {
    id: "bd3e7c73-bfcf-40f1-bb4f-8826k7444672f",
    title: "Sample Headline #6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 6.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-KP5UU8o0wGzdkNBUH0ipgGZwx22mevdqQ&s",

    author: "Reporter G",
    category: "general",
  },
  {
    id: "bf1497f3-1de1-4a67-8ac1-42c1a7u29b8f",
    title: "Sample Headline #7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 7.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter H",
    category: "general",
  },
  {
    id: "739c4a59-3ad1-44d5-a9c3-02a367ob739a1",
    title: "Sample Headline #8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 8.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-KP5UU8o0wGzdkNBUH0ipgGZwx22mevdqQ&s",
    author: "Reporter I",
    category: "general",
  },
  {
    id: "7f2cd3a5-1cbb-4553-b29e-18ef8a5k382a3",
    title: "Sample Headline #9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 9.",
    url: "https://example.com/news/sample-9",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter J",
    category: "general",
  },
  {
    id: "017cbf88-45fa-4e5b-b79c-0cc1b0fsc3611",
    title: "Sample Headline #10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 10.",
    url: "https://example.com/news/sample-10",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter K",
    category: "regional",
  },
  {
    id: "2299ae93-5d6a-46b5-8bcd-5df0c9c0dd6de",
    title: "Sample Headline #11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 11.",
    url: "https://example.com/news/sample-11",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter L",
    category: "regional",
  },
  {
    id: "ea1d926c-5148-4233-bbdd-5ac7e15t288fa",
    title: "Sample Headline #12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 12.",
    url: "https://example.com/news/sample-12",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wvj2caokPnNWS6WOvcxabzYzGuCkFTWEyA&s",
    author: "Reporter M",
    category: "regional",
  },
  {
    id: "5f0be548-faad-4f1e-92c2-2b9d973l4b180",
    title: "Sample Headline #13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 13.",
    url: "https://example.com/news/sample-13",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaT-EY-hDPY1Qde6-5QAKrSfPzGA8_ozCKw&s",
    author: "Reporter N",
    category: "technology",
  },
  {
    id: "6d3c0ccf-1300-4980-9f0e-1e9ebedkc40fc",
    title: "Sample Headline #14",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 14.",
    url: "https://example.com/news/sample-14",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter O",
    category: "technology",
  },
  {
    id: "6ecb2c96-03c7-4ddf-98d4-9efc84e28wdc0",
    title: "Sample Headline #15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 15.",
    url: "https://example.com/news/sample-15",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter P",
    category: "technology",
  },
  {
    id: "4fcf935f-cce4-499d-b3e9-e89cfb4fc5df1",
    title: "Sample Headline #16",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 16.",
    url: "https://example.com/news/sample-16",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaT-EY-hDPY1Qde6-5QAKrSfPzGA8_ozCKw&s",
    author: "Reporter Q",
    category: "lifestyle",
  },
  {
    id: "d837716f-3ddf-4577-9f52-8f40aa9m6c83b",
    title: "Sample Headline #17",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 17.",
    url: "https://example.com/news/sample-17",
    image: "None",
    author: "Reporter R",
    category: "lifestyle",
  },
  {
    id: "10b23d13-9b3b-4f71-a107-c40dw81b4fbc3",
    title: "Sample Headline #18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 18.",
    url: "https://example.com/news/sample-18",
    image: "None",
    author: "Reporter S",
    category: "lifestyle",
  },
  {
    id: "43f130e4-96cc-4b2c-8032-df7i509dcde1c",
    title: "Sample Headline #19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 19.",
    url: "https://example.com/news/sample-19",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter T",
    category: "business",
  },
  {
    id: "d18b3b7d-71aa-4620-a787-1fx6d6613fabc",
    title: "Sample Headline #20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 20.",
    url: "https://example.com/news/sample-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter U",
    category: "business",
  },
  {
    id: "590ba0cf-9d7d-4bc1-9967-5cbf8ta9a6fab",
    title: "Former Maine Gov. Files for Congressional Run Against Rep. Golden",
    description:
      "Former Maine Gov. Paul LePage (R) filed paperwork …District, which Rep. Jared Golden (D) represents.",
    url: "https://www.breitbart.com/politics/2025/05/04/form…-lepage-files-congressional-run-rep-jared-golden/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaT-EY-hDPY1Qde6-5QAKrSfPzGA8_ozCKw&s",
    author: "Elizabeth Weibel",
    category: "general",
  },
  {
    id: "62b5ea08-f412-44ec-a117-16fe457bac77",
    title:
      "NIH closes experimentation labs accused of brutally killing thousands of beagles for 40+ years",
    description:
      "National Institutes of Health (NIH) director Jay B…on Musk posted on X that he would investigate ...",
    url: "https://www.foxnews.com/politics/nih-closes-experi…cused-brutally-killing-thousands-beagles-40-years",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",

    author: "foxnews",
    category: "general",
  },
  {
    id: "cac411f4-32a5-44e3-ae06-f37v1517237ae",
    title: "Democrat Jasmine Crockett Accused of Cutting Airport Line",
    description:
      "Texas Rep. Jasmine Crockett (D) has been accused b….\n\nIn a Sunday post on X, Republican Rep. Lisa...",
    url: "https://www.breitbart.com/politics/2025/05/04/demo…ul-jasmine-crockett-accused-cutting-airport-line/",
    image: "None",

    author: "Paul Bois",
    category: "general",
  },
  {
    id: "92a7fba0-7e8f-4dc1-bf26-4d0g0a7f3be7a",
    title: "Sample Headline #4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 4.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image: "None",

    author: "Reporter E",
    category: "general",
  },
  {
    id: "c44b44ea-33a3-419c-b13a-08aaabjf1222b",
    title: "Sample Headline #5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 5.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4bYQZQHCzXawhYUiaU0MF8Rr8MEjl-pXeQ&s",

    author: "Reporter F",
    category: "general",
  },
  {
    id: "bd3e7c73-bfcf-40f1-bb4f-88267444672f",
    title: "Sample Headline #6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 6.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-KP5UU8o0wGzdkNBUH0ipgGZwx22mevdqQ&s",

    author: "Reporter G",
    category: "general",
  },
  {
    id: "bf1497f3-1de1-4a67-8ac1-42gc1a7129b8f",
    title: "Sample Headline #7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 7.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter H",
    category: "general",
  },
  {
    id: "739c4a59-3ad1-44d5-a9c3-02av367b739a1",
    title: "Sample Headline #8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 8.",
    url: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-KP5UU8o0wGzdkNBUH0ipgGZwx22mevdqQ&s",
    author: "Reporter I",
    category: "general",
  },
  {
    id: "7f2cd3a5-1cbb-4553-b29e-18tf8a5382a3",
    title: "Sample Headline #9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 9.",
    url: "https://example.com/news/sample-9",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter J",
    category: "general",
  },
  {
    id: "017cbf88-45fa-4e5b-b79c-0cc1bf0fc3611",
    title: "Sample Headline #10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 10.",
    url: "https://example.com/news/sample-10",
    image: "None",
    author: "Reporter K",
    category: "regional",
  },
  {
    id: "2299ae93-5d6a-46b5-8bcd-5df0c9c0ad6de",
    title: "Sample Headline #11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 11.",
    url: "https://example.com/news/sample-11",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter L",
    category: "regional",
  },
  {
    id: "ea1d926c-5148-4233-bbdd-5ac7e152j88fa",
    title: "Sample Headline #12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 12.",
    url: "https://example.com/news/sample-12",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wvj2caokPnNWS6WOvcxabzYzGuCkFTWEyA&s",
    author: "Reporter M",
    category: "regional",
  },
  {
    id: "5f0be548-faad-4f1e-92c2-2b9dg9734b180",
    title: "Sample Headline #13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 13.",
    url: "https://example.com/news/sample-13",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaT-EY-hDPY1Qde6-5QAKrSfPzGA8_ozCKw&s",
    author: "Reporter N",
    category: "technology",
  },
  {
    id: "6d3c0ccf-1300-4980-9f0e-1e9efedc40fc",
    title: "Sample Headline #14",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 14.",
    url: "https://example.com/news/sample-14",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter O",
    category: "technology",
  },
  {
    id: "6ecb2c96-03c7-4ddf-98d4-9efcb84e28dc0",
    title: "Sample Headline #15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 15.",
    url: "https://example.com/news/sample-15",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter P",
    category: "technology",
  },
  {
    id: "4fcf935f-cce4-499d-b3e9-e89ctfb4fc5f1",
    title: "Sample Headline #16",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 16.",
    url: "https://example.com/news/sample-16",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaT-EY-hDPY1Qde6-5QAKrSfPzGA8_ozCKw&s",
    author: "Reporter Q",
    category: "lifestyle",
  },
  {
    id: "d837716f-3ddf-4577-9f52-8fd40aa96c83b",
    title: "Sample Headline #17",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 17.",
    url: "https://example.com/news/sample-17",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter R",
    category: "lifestyle",
  },
  {
    id: "10b23d13-9b3b-4f71-a107-c40fd81b4fbc3",
    title: "Sample Headline #18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 18.",
    url: "https://example.com/news/sample-18",
    image: "None",
    author: "Reporter S",
    category: "lifestyle",
  },
  {
    id: "43f130e4-96cc-4b2c-8032-df7509dgcde1c",
    title: "Sample Headline #19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 19.",
    url: "https://example.com/news/sample-19",
    image:
      "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg",
    author: "Reporter T",
    category: "business",
  },
  {
    id: "d18b3b7d-71aa-4620-a787-1f6d6613jfabc",
    title: "Sample Headline #20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is sample article 20.",
    url: "https://example.com/news/sample-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_TLJ6ZnY9TKeJStZIPjl8_7Tu1rO1XVsdA&s",
    author: "Reporter U",
    category: "business",
  },
];

export default newsdata;
