const subject = {
  '9dd5d5d9-e460-c7fb-6303-72b0270e7736': {
    name: 'Math',
    unitIDs: ['6f42b93b-a963-5d61-6a96-3fc0ec7437de', '8871000b-31c4-4822-e3ee-49696f1aea95', '1126c000-d8dd-bc65-5f8f-f298e5435a0b', 'fd34000a-4284-98bb-d524-31629865a0cd'],
  },
  '6cd3c533-d559-f0ef-48f9-f3ed5e9d9ac7': {
    name: 'Chemistry',
    unitIDs: ['d4dfa68b-d9c3-e185-d103-d00088f07fdd', '93477855-3fbd-15b5-5c16-84207edcf93d', 'b6a137d1-fc0b-8fe6-448b-1915508b3e10', '5f70275e-a073-33c9-b6d4-0c5839a184e0'],
  },
  '03f7f930-842d-f17a-5a06-79730d9dc405': {
    name: 'Physics',
    unitIDs: ['0eb8a917-f542-76a9-feee-1a2490d482cb', 'c09fb3ac-e2b8-91bd-093f-12c40e25df1f'],
  },
  '83984c25-1669-f135-c8c9-81803c2a5d88': {
    name: 'null',
    unitIDs: [],
  },
};

const units = {
  '6f42b93b-a963-5d61-6a96-3fc0ec7437de': {
    name: 'Calculus',
    elementIDs: ['5f2823f1-d7b6-9286-b834-0d18509bf3dc'],
  },
  '8871000b-31c4-4822-e3ee-49696f1aea95': {
    name: 'Algebra',
    elementIDs: ['5ee2e81b-d124-712e-50df-10c86ea5d77e', '0bf7d336-d42e-c863-ab7e-a5ff7b01dce5'],
  },
  '1126c000-d8dd-bc65-5f8f-f298e5435a0b': {
    name: 'Trigonometry',
    elementIDs: [],
  },
  '0eb8a917-f542-76a9-feee-1a2490d482cb': {
    name: 'Modern Physics',
    elementIDs: ['3dedb5f3-e804-56bc-3977-334ace52b395', 'fa14fb9d-6bc9-258d-6ef7-c6d8b1a7046e'],
  },
  'd4dfa68b-d9c3-e185-d103-d00088f07fdd': {
    name: 'Macromolecule',
    elementIDs: [],
  },
  '93477855-3fbd-15b5-5c16-84207edcf93d': {
    name: 'Inorganic Chemistry',
    elementIDs: ['6d1deef2-c620-ef0c-62a1-b0cc7aa784f7'],
  },
  'c09fb3ac-e2b8-91bd-093f-12c40e25df1f': {
    name: 'Wave',
    elementIDs: ['f8389b75-0a7e-bffb-960d-060b481270a8'],
  },
  'fd34000a-4284-98bb-d524-31629865a0cd': {
    name: 'Linear Algebra',
    elementIDs: [],
  },
  'b6a137d1-fc0b-8fe6-448b-1915508b3e10': {
    name: 'Thermochemistry',
    elementIDs: [],
  },
  '5f70275e-a073-33c9-b6d4-0c5839a184e0': {
    name: 'Organic Chemistry',
    elementIDs: ['201c5146-d541-016a-a76b-30380374e469', '8cc19488-3f50-6261-ee0e-7b7c589889f3', 'd76fcdf9-4ffa-0f6c-13cd-72023801eee5'],
  },
};

const elements = {
  '201c5146-d541-016a-a76b-30380374e469': {
    canvas: {},
    tagIDs: ['fa4f8f3a-847a-2432-0845-7c128dba83dd'],
    date: { create: 1647250064, modify: 1647344999 },
    note: ['ここにメモを残します。', 'この文は２行目です。', '各行ごとに配列の要素にします。'],
    text: ['(CH3COO)2Ca -> CH3COCH3 + CaCO3', '乾留'],
    image: ['http://img-cdn.jg.jugem.jp/159/3684509/20170702_1056195.png'],
    ref: ['@海城高３二学期中間考査'],
  },
  '8cc19488-3f50-6261-ee0e-7b7c589889f3': {
    canvas: {},
    tagIDs: ['fa4f8f3a-847a-2432-0845-7c128dba83dd'],
    date: { create: 1647275375, modify: 1647389011 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['HCOOH -> H2O + CO', 'ギ酸の脱水', '濃硫酸'],
    image: ['data:image/png;base64,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'],
    ref: ['@海城高2三学期期末考査'],
  },
  'd76fcdf9-4ffa-0f6c-13cd-72023801eee5': {
    canvas: {},
    tagIDs: ['fa4f8f3a-847a-2432-0845-7c128dba83dd'],
    date: { create: 1647280929, modify: 1647325184 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['CuO + CH3OH -> Cu + HCHO + H20', 'メタノールの酸化'],
    image: [],
    ref: ['@海城高３二学期中間考査'],
  },
  '5f2823f1-d7b6-9286-b834-0d18509bf3dc': {
    canvas: {},
    tagIDs: ['9b09e0c8-fe77-4587-c50c-5963397503b6', 'a67d801f-21e5-f939-6a7f-1272d0716d58', 'b10422f9-81a8-6a63-918b-9c8888604540'],
    date: { create: 1647212908, modify: 1647379372 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。', 'この文は4行目です。', 'この文は5行目です。', 'この文は6行目です', 'この文は7行目です', 'この文は8行目です', 'この文は9行目です', 'この文は10行目です', 'この文は11行目です'],
    text: ['I_{n}=\int_{0}^{\frac{\pi}{2}}\sin^{n}xdx=\int_{0}^{\frac{\pi}{2}}\cos^{n}xdx', 'I_{n}=\frac{n-1}{n}I_{n-2}', 'ウォリス積分'],
    image: ['https://hiraocafe.com/note/noteimages/walliseyecatch.png'],
    ref: ['@高３夏駿台模試'],
  },
  '6d1deef2-c620-ef0c-62a1-b0cc7aa784f7': {
    canvas: {},
    tagIDs: ['fa4f8f3a-847a-2432-0845-7c128dba83dd'],
    date: { create: 1647251315, modify: 1647352669 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O', '銅と希硝酸の反応'],
    image: [''],
    ref: ['@海城高３二学期中間考査'],
  },
  'fa14fb9d-6bc9-258d-6ef7-c6d8b1a7046e': {
    canvas: {},
    tagIDs: ['fa4f8f3a-847a-2432-0845-7c128dba83dd'],
    date: { create: 1647225490, modify: 1647369427 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['Δλ = h/mc(1-cosα)', 'コンプトン効果'],
    image: [],
    ref: ['@海城高３二学期中間考査'],
  },
  '0bf7d336-d42e-c863-ab7e-a5ff7b01dce5': {
    canvas: {},
    tagIDs: [],
    date: { create: 1647288179, modify: 1647329211 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['a+b\ge2\sqrt{ab}', 'a>0, b>0', '相加相乗平均'],
    image: [],
    ref: ['@海城高３二学期中間考査'],
  },
  '3dedb5f3-e804-56bc-3977-334ace52b395': {
    canvas: {},
    tagIDs: ['b10422f9-81a8-6a63-918b-9c8888604540'],
    date: { create: 1647238985, modify: 1647321081 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['hν=K+W', 'W: 仕事関数'],
    image: ['https://d12rf6ppj1532r.cloudfront.net/images/k/0/sci_phy/5_1_2_2/k_sci_phy_5_1_2_2_image04.png'],
    ref: ['@海城高３二学期期末考査'],
  },
  'f8389b75-0a7e-bffb-960d-060b481270a8': {
    canvas: {},
    tagIDs: ['fa4f8f3a-847a-2432-0845-7c128dba83dd', 'b10422f9-81a8-6a63-918b-9c8888604540'],
    date: { create: 1647279731, modify: 1647359248 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['v=√(T/ρ)', '糸を伝わる波の速さの公式'],
    image: [],
    ref: ['@海城高２二学期中間考査'],
  },
  '5ee2e81b-d124-712e-50df-10c86ea5d77e': {
    canvas: {},
    tagIDs: [],
    date: { create: 1647224328, modify: 1647394904 },
    note: ['ここにメモを残します。', 'この文は２行目です。', 'この文は３行目です。', '各行ごとに配列の要素にします。'],
    text: ['ax^{2}+bx+c=0', 'x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}', '二次方程式の解の公式'],
    image: ['https://media.qikeru.me/wp-content/uploads/2016/08/kaino1.png'],
    ref: ['@海城中２一学期中間考査'],
  },
};

const tags = {
  'fa4f8f3a-847a-2432-0845-7c128dba83dd': {
    name: '苦手',
    elementIDs: [
      '201c5146-d541-016a-a76b-30380374e469',
      '8cc19488-3f50-6261-ee0e-7b7c589889f3',
      'd76fcdf9-4ffa-0f6c-13cd-72023801eee5',
      '6d1deef2-c620-ef0c-62a1-b0cc7aa784f7',
      'fa14fb9d-6bc9-258d-6ef7-c6d8b1a7046e',
      'f8389b75-0a7e-bffb-960d-060b481270a8'],
  },
  'b10422f9-81a8-6a63-918b-9c8888604540': {
    name: '未暗記',
    elementIDs: ['f8389b75-0a7e-bffb-960d-060b481270a8', '3dedb5f3-e804-56bc-3977-334ace52b395', '5f2823f1-d7b6-9286-b834-0d18509bf3dc'],
  },
  '9b09e0c8-fe77-4587-c50c-5963397503b6': {
    name: '積分',
    elementIDs: ['5f2823f1-d7b6-9286-b834-0d18509bf3dc'],
  },
  'a67d801f-21e5-f939-6a7f-1272d0716d58': {
    name: '時短公式',
    elementIDs: ['5f2823f1-d7b6-9286-b834-0d18509bf3dc'],
  },
};

export default {
  subject, units, elements, tags,
};
